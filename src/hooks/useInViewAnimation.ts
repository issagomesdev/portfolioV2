import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

export type ScrollDirection = 'up' | 'down';

/**
 * `hidden`   — section out of view; elements sit at their static pre-entrance
 *              look (opacity 0, offset, blurred), no animation running.
 * `entering` — section just entered; the keyframe cascade is playing.
 * `visible`  — cascade has settled; elements hold their fully-revealed look.
 *
 * Consumers swap a `-hidden` / (plain) / `-visible` class per `revealState`
 * (see `revealClass` in `@/lib/reveal`) instead of toggling one class on and
 * off — that's what makes the keyframe replay cleanly on every re-entry
 * without a flash of old content first: the section is already sitting at
 * `hidden` by the time the user scrolls back, because exit resets it
 * immediately rather than waiting for the next entry to do so.
 */
export type RevealState = 'hidden' | 'entering' | 'visible';

interface UseInViewAnimationOptions {
  /** Fraction of the element that must be visible to count as "entered". */
  threshold?: number;
  rootMargin?: string;
  /** Whether leaving the viewport resets `isVisible`/`revealState` so re-entering counts as a fresh entrance. */
  resetOnExit?: boolean;
  /** Ms after entering before `revealState` settles from 'entering' to 'visible' — size to the section's longest delay + animation duration. */
  settleAfterMs?: number;
}

interface UseInViewAnimationResult<T extends HTMLElement> {
  /** Attach to the element to observe: `<section ref={ref}>`. */
  ref: RefObject<T>;
  isVisible: boolean;
  /** Increments every time the element enters the viewport. */
  animationKey: number;
  /** Scroll direction at the moment the element last entered the viewport. */
  scrollDirection: ScrollDirection;
  revealState: RevealState;
}

/**
 * Tracks viewport entry/exit for a section so its entrance animations can
 * replay each time the user scrolls back to it (not just on first mount),
 * and reports which way the user was scrolling when that happened — so the
 * caller can play a "forward" cascade on the way down and a reversed one
 * on the way back up. Generic and reusable: any section can call this with
 * its own threshold/timing.
 *
 * Observer setup and teardown live in the same effect on purpose: under
 * StrictMode, React mounts effects, runs their cleanup, then mounts them
 * again to surface exactly this kind of bug — an observer created outside
 * the effect (e.g. in a ref callback) gets disconnected by the simulated
 * cleanup but never recreated, leaving it dead for the rest of the page.
 */
export function useInViewAnimation<T extends HTMLElement = HTMLElement>({
  threshold = 0.35,
  rootMargin = '0px',
  resetOnExit = true,
  settleAfterMs = 1700,
}: UseInViewAnimationOptions = {}): UseInViewAnimationResult<T> {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');
  const [revealState, setRevealState] = useState<RevealState>('hidden');

  // Tracked in refs (not state) so every scroll tick doesn't trigger a
  // re-render — the direction is only committed to state at the moment of
  // intersection, bundled into the same update as `animationKey`.
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<ScrollDirection>('down');
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current) {
        scrollDirectionRef.current = 'down';
      } else if (currentScrollY < lastScrollYRef.current) {
        scrollDirectionRef.current = 'up';
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
          setIsVisible(true);
          setScrollDirection(scrollDirectionRef.current);
          setAnimationKey((key) => key + 1);
          setRevealState('entering');
          settleTimeoutRef.current = setTimeout(() => setRevealState('visible'), settleAfterMs);
        } else if (resetOnExit) {
          if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
          setIsVisible(false);
          setRevealState('hidden');
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, [threshold, rootMargin, resetOnExit, settleAfterMs]);

  return { ref, isVisible, animationKey, scrollDirection, revealState };
}
