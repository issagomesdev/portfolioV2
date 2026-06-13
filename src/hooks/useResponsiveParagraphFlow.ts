import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Options {
  /** Number of dynamic paragraphs to manage (those that may flow beside the image) */
  paragraphCount: number;
  /**
   * Vertical gap in pixels between:
   *   - the fixed p2 paragraph and the first dynamic paragraph
   *   - consecutive dynamic paragraphs
   * Should match the CSS gap/margin used in the side column.
   */
  gap: number;
  /** Enable measurement — true only when the tablet float layout is active */
  enabled: boolean;
}

interface Result {
  /**
   * How many dynamic paragraphs should render in the side column.
   *
   * During the synchronous remeasurement phase this equals `paragraphCount`
   * so every paragraph is present in the side container for accurate height
   * reads. Because the remeasurement commit and its correction both happen
   * inside useLayoutEffect (before the browser paints), the intermediate
   * "all in side" state is never visible to the user.
   */
  effectiveSideCount: number;
  /** Attach to the ProfileImage outer container */
  setImageEl: (el: HTMLElement | null) => void;
  /** Attach to the p2 paragraph (always in the side column on tablet) */
  setP2El: (el: HTMLElement | null) => void;
  /** Returns a stable ref callback for the dynamic paragraph at `index` */
  getParagraphRef: (index: number) => (el: HTMLElement | null) => void;
}

export function useResponsiveParagraphFlow({ paragraphCount, gap, enabled }: Options): Result {
  // When true, all dynamic paragraphs are rendered in the side column so
  // getBoundingClientRect reads their heights at the correct (narrow) width.
  const [isMeasuring, setIsMeasuring] = useState(enabled);
  const [sideCount, setSideCount] = useState(0);

  const imageEl = useRef<HTMLElement | null>(null);
  const p2El = useRef<HTMLElement | null>(null);
  const paragraphEls = useRef<(HTMLElement | null)[]>(
    Array.from({ length: paragraphCount }, () => null),
  );
  const observerRef = useRef<ResizeObserver | null>(null);
  // Prevents scheduling a second measurement while one is already in flight.
  const pendingRef = useRef(false);

  // Pre-create one stable ref callback per index to avoid React ref churn.
  const stableRefs = useRef(
    Array.from(
      { length: paragraphCount },
      (_, i) =>
        (el: HTMLElement | null): void => {
          paragraphEls.current[i] = el;
        },
    ),
  );

  /**
   * Reads the heights of the image, p2, and each dynamic paragraph from the
   * DOM and returns how many dynamic paragraphs fit beside the image.
   *
   * Must only be called when all paragraphs are rendered in the side column
   * (i.e. during the isMeasuring phase) so widths — and therefore heights —
   * are correct.
   */
  const runMeasure = useCallback((): number => {
    const image = imageEl.current;
    const p2 = p2El.current;
    if (!image || !p2) return 0;

    const imageHeight = image.getBoundingClientRect().height;
    if (imageHeight <= 0) return 0;

    // p2 is always present → start occupied with its height plus the gap after it.
    let occupied = p2.getBoundingClientRect().height + gap;
    let count = 0;

    for (let i = 0; i < paragraphCount; i++) {
      const el = paragraphEls.current[i];
      if (!el) break;
      const h = el.getBoundingClientRect().height;
      if (h <= 0) break;
      // The gap between p2 and the first dynamic paragraph is already included
      // in `occupied`. Add a gap between consecutive dynamic paragraphs only.
      const next = occupied + h + (count > 0 ? gap : 0);
      if (next <= imageHeight) {
        occupied = next;
        count++;
      } else {
        break;
      }
    }

    return count;
  }, [paragraphCount, gap]);

  // Runs synchronously after the commit that placed all paragraphs in the
  // side column — before the browser paints. Calling setState here triggers
  // a synchronous re-render that resolves the final layout, also before paint.
  useLayoutEffect(() => {
    if (!isMeasuring || !enabled) return;
    setSideCount(runMeasure());
    setIsMeasuring(false);
    pendingRef.current = false;
  }, [isMeasuring, enabled, runMeasure]);

  const scheduleMeasure = useCallback(() => {
    if (!enabled || pendingRef.current) return;
    pendingRef.current = true;
    setIsMeasuring(true);
  }, [enabled]);

  // Set up the ResizeObserver and trigger the first measurement.
  useEffect(() => {
    if (!enabled) {
      observerRef.current?.disconnect();
      observerRef.current = null;
      setSideCount(0);
      setIsMeasuring(false);
      pendingRef.current = false;
      return;
    }

    const observer = new ResizeObserver(() => {
      scheduleMeasure();
    });
    observerRef.current = observer;

    if (imageEl.current) {
      observer.observe(imageEl.current);
    }

    // Trigger initial measurement. If useState(enabled) already set isMeasuring=true
    // and the layoutEffect ran first, pendingRef is false so this schedules a
    // second (harmless) pass after the first paint.
    scheduleMeasure();

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [enabled, scheduleMeasure]);

  const setImageEl = useCallback(
    (el: HTMLElement | null) => {
      if (imageEl.current && observerRef.current) {
        observerRef.current.unobserve(imageEl.current);
      }
      imageEl.current = el;
      if (el && observerRef.current) {
        observerRef.current.observe(el);
        scheduleMeasure();
      }
    },
    [scheduleMeasure],
  );

  const setP2El = useCallback((el: HTMLElement | null) => {
    p2El.current = el;
  }, []);

  const getParagraphRef = useCallback(
    (index: number) => stableRefs.current[index],
    [],
  );

  return {
    effectiveSideCount: isMeasuring ? paragraphCount : sideCount,
    setImageEl,
    setP2El,
    getParagraphRef,
  };
}
