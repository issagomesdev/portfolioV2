import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTypewriterCodeReturn {
  visibleCount: number;
  soundEnabled: boolean;
  toggleSound: () => void;
}

// ── Web Audio click synthesiser ────────────────────────────────────────────
let _audioCtx: AudioContext | null = null;

function playClick(enabled: boolean) {
  if (!enabled) return;
  try {
    if (!_audioCtx) _audioCtx = new AudioContext();
    if (_audioCtx.state === 'suspended') return;
    const sr = _audioCtx.sampleRate;
    const len = Math.floor(sr * 0.025);
    const buf = _audioCtx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    const decay = sr * 0.006;
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / decay);
    }
    const src = _audioCtx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const gain = _audioCtx.createGain();
    gain.gain.value = 0.035 + Math.random() * 0.025;
    src.connect(gain);
    gain.connect(_audioCtx.destination);
    src.start();
  } catch { /* audio unavailable */ }
}

// ── Timing helpers ─────────────────────────────────────────────────────────
function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

function getDeleteDelay(): number {
  return 30 + Math.random() * 20; // 60–80 ms
}

function getTypingDelay(text: string, idx: number): number {
  const prev = text[idx - 1] ?? '';
  const curr = text[idx] ?? '';

  // Long thinking pause before comment block
  if (curr === '/' && text[idx + 1] === '/') return 600 + Math.random() * 400;

  // Pause before profile.deploy() — comes right after \n at the end of comment
  if (prev === '\n' && curr === 'p' && text.slice(idx, idx + 7) === 'profile') {
    return 400 + Math.random() * 300;
  }

  // Newline itself is fast
  if (curr === '\n') return 20 + Math.random() * 20;

  // First char of a new line: small hesitation
  if (prev === '\n') return 120 + Math.random() * 140;

  // After opening / closing a block
  if ('[{]}'.includes(prev)) return 160 + Math.random() * 160;

  // After comma
  if (prev === ',') return 80 + Math.random() * 100;

  // Normal keystroke
  return 60 + Math.random() * 60;
}

// ── Hook ───────────────────────────────────────────────────────────────────
export function useTypewriterCode(options: {
  text: string;
}): UseTypewriterCodeReturn {
  const { text } = options;
  const totalChars = text.length;

  // Start fully visible so the card is never empty on first paint
  const [visibleCount, setVisibleCount] = useState(totalChars);
  const [soundEnabled, setSoundEnabled]  = useState(false);

  const soundRef = useRef(false);

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const next = !prev;
      soundRef.current = next;
      if (next) {
        try {
          if (!_audioCtx) _audioCtx = new AudioContext();
          if (_audioCtx.state === 'suspended') void _audioCtx.resume();
        } catch { /* noop */ }
      }
      return next;
    });
  }, []);

  useEffect(() => {
    // Reduced-motion: stay at full text, no animation
    if (prefersReduced) return;

    let cancelled = false;

    async function run() {
      // ── Phase 1: initial hold (5 s) ─────────────────────────────────────
      setVisibleCount(totalChars);
      await sleep(5_000);
      if (cancelled) return;

      while (!cancelled) {
        // ── Phase 2: delete character by character ───────────────────────
        for (let i = totalChars; i > 0; i--) {
          await sleep(getDeleteDelay());
          if (cancelled) return;
          setVisibleCount(i - 1);
        }

        // ── Phase 3: pause while empty ───────────────────────────────────
        await sleep(800);
        if (cancelled) return;

        // ── Phase 4: type character by character ─────────────────────────
        for (let i = 0; i < totalChars; i++) {
          await sleep(getTypingDelay(text, i));
          if (cancelled) return;
          setVisibleCount(i + 1);
          if (text[i] !== '\n' && text[i] !== ' ' && Math.random() > 0.2) {
            playClick(soundRef.current);
          }
        }

        // ── Phase 5: hold complete (10 s) ────────────────────────────────
        await sleep(10_000);
        if (cancelled) return;
      }
    }

    void run();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { visibleCount, soundEnabled, toggleSound };
}
