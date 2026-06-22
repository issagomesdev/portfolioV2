import type { RevealState, ScrollDirection } from '@/hooks/useInViewAnimation';

/**
 * Builds a `{ stageKey: delayMs }` map from an ordered list of reveal
 * stages, spacing them `step`ms apart starting at `start`ms.
 *
 * On `'down'` the stages play in the order given (e.g. image → ... →
 * actions, an "interface initializing" cascade). On `'up'` the same order
 * is reversed, so whatever was last now leads (e.g. actions → ... → image,
 * reading as the interface returning focus). This is the one place the
 * down/up mirroring logic lives — any section can reuse it by supplying its
 * own ordered stage list, no per-section animation logic required.
 */
export function createDirectionalDelays<K extends string>(
  order: readonly K[],
  direction: ScrollDirection,
  { start = 100, step = 100 }: { start?: number; step?: number } = {},
): Record<K, number> {
  const sequence = direction === 'up' ? [...order].reverse() : order;
  return sequence.reduce((delays, key, index) => {
    delays[key] = start + index * step;
    return delays;
  }, {} as Record<K, number>);
}

/** Formats a delay (plus an optional per-item stagger offset) as a CSS time string. */
export function revealDelayMs(baseDelayMs: number, offsetMs = 0): string {
  return `${baseDelayMs + offsetMs}ms`;
}

/**
 * Resolves which of an element's three reveal classes applies for the
 * current `revealState` — e.g. `revealClass('section-reveal', 'hidden')`
 * returns `'section-reveal-hidden'`. Pass the "entering" class name as
 * `base`; `@/styles/globals.css` defines the matching `-hidden`/`-visible`
 * siblings for every reveal family (fade-up, fade-left, scale-in, and the
 * Hero console's bespoke one).
 */
export function revealClass(base: string, state: RevealState): string {
  if (state === 'hidden') return `${base}-hidden`;
  if (state === 'visible') return `${base}-visible`;
  return base;
}
