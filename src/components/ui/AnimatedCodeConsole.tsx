import { useEffect, useRef, useState } from 'react';

// ── Op types ───────────────────────────────────────────────────────────────
type Op =
  | { k: 'c'; v: string; d?: number }   // type one char (optional fixed delay)
  | { k: 'd'; n: number; d?: number }   // delete n chars
  | { k: 'p'; ms: number };             // pause

// ── Script helpers ─────────────────────────────────────────────────────────
const ch = (text: string, d?: number): Op[] =>
  [...text].map(v => ({ k: 'c' as const, v, d }));

const del = (n: number, d?: number): Op => ({ k: 'd', n, d });
const pause = (ms: number): Op => ({ k: 'p', ms });

// ── Animation script ───────────────────────────────────────────────────────
// Typo 1: 'Hayssa Gmoes' → del(6) → 'Hayssa ' → type 'Gomes'
// Typo 2: 'Perfomance'   → del(6) → 'Perfo'  → type 'rmance''
const SCRIPT: Op[] = [
  ...ch('const profile = {'),
  pause(350),
  ...ch('\n  name: '),
  ...ch("'Hayssa Gmoes'"),   // typo: Gmoes
  pause(400),
  del(6),                    // → "'Hayssa "
  pause(180),
  ...ch("Gomes'"),           // → "'Hayssa Gomes'"
  ...ch(','),
  ...ch('\n  role: '),
  ...ch("'Fullstack'"),
  ...ch(','),
  ...ch('\n  stack: ['),
  pause(320),
  ...ch("\n    'React'"),
  ...ch(', '),
  ...ch("'React Native'"),
  ...ch(','),
  ...ch("\n    'Next.js'"),
  ...ch(', '),
  ...ch("'Node.js'"),
  ...ch(','),
  ...ch("\n    'TypeScript'"),
  ...ch(', '),
  ...ch("'Laravel'"),
  ...ch(','),
  ...ch("\n    'Docker'"),
  ...ch(', '),
  ...ch("'GIT'"),
  ...ch('\n  ],'),
  pause(440),
  ...ch('\n  focus: ['),
  pause(310),
  ...ch("\n    'Perfomance'"),  // typo: missing 'r'
  pause(380),
  del(6),                       // → "'Perfo"
  pause(160),
  ...ch("rmance'"),             // → "'Performance'"
  ...ch(', '),
  ...ch("'Scalability'"),
  ...ch(','),
  ...ch("\n    'Clean Architecture'"),
  ...ch(', '),
  ...ch("'SOLID'"),
  ...ch(','),
  ...ch("\n    'UX/UI'"),
  ...ch(', '),
  ...ch("'API Design'"),
  ...ch('\n  ]'),
  ...ch('\n};'),
  pause(380),
  ...ch('\n\n// Optimizing UX...'),
  pause(640),
  ...ch('\nprofile.deploy();'),
];

// ── Final text (for prefers-reduced-motion & wipe length ref) ──────────────
const FINAL_TEXT =
  "const profile = {\n" +
  "  name: 'Hayssa Gomes',\n" +
  "  role: 'Fullstack',\n" +
  "  stack: [\n" +
  "    'React', 'React Native',\n" +
  "    'Next.js', 'Node.js',\n" +
  "    'TypeScript', 'Laravel',\n" +
  "    'Docker', 'GIT'\n" +
  "  ],\n" +
  "  focus: [\n" +
  "    'Performance', 'Scalability',\n" +
  "    'Clean Architecture', 'SOLID',\n" +
  "    'UX/UI', 'API Design'\n" +
  "  ]\n" +
  "};\n\n" +
  "// Optimizing UX...\n" +
  "profile.deploy();";

// ── Syntax tokeniser (works on any partial string) ─────────────────────────
interface Token { text: string; cls: string }

function tokenise(code: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  while (i < code.length) {
    // keyword
    if (code.startsWith('const', i) && !/\w/.test(code[i + 5] ?? '')) {
      out.push({ text: 'const', cls: 'text-tertiary' });
      i += 5;
    }
    // comment
    else if (code.startsWith('//', i)) {
      const end = code.indexOf('\n', i);
      const slice = end === -1 ? code.slice(i) : code.slice(i, end);
      out.push({ text: slice, cls: 'text-on-surface/30' });
      i += slice.length;
    }
    // string (single-quoted, may be unclosed during typing)
    else if (code[i] === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== "'") j++;
      if (j < code.length) j++;
      out.push({ text: code.slice(i, j), cls: 'text-primary' });
      i = j;
    }
    // identifier
    else if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /\w/.test(code[j])) j++;
      const word = code.slice(i, j);
      const isSecondary =
        code[j] === ':' || word === 'profile' || word === 'deploy';
      out.push({ text: word, cls: isSecondary ? 'text-secondary' : 'text-on-surface/70' });
      i = j;
    }
    // newline
    else if (code[i] === '\n') {
      out.push({ text: '\n', cls: '' });
      i++;
    }
    // everything else
    else {
      out.push({ text: code[i], cls: 'text-on-surface/70' });
      i++;
    }
  }
  return out;
}

// ── Web Audio click synthesiser ────────────────────────────────────────────
let _audioCtx: AudioContext | null = null;

function playClick(enabled: boolean, isDelete = false) {
  if (!enabled) return;
  try {
    if (!_audioCtx) _audioCtx = new AudioContext();
    if (_audioCtx.state === 'suspended') return;
    const sr = _audioCtx.sampleRate;
    const len = Math.floor(sr * (isDelete ? 0.018 : 0.028));
    const buf = _audioCtx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    const decay = sr * (isDelete ? 0.004 : 0.007);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / decay);
    }
    const src = _audioCtx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = (isDelete ? 0.6 : 0.8) + Math.random() * 0.35;
    const gain = _audioCtx.createGain();
    gain.gain.value = isDelete ? 0.025 : 0.04;
    src.connect(gain);
    gain.connect(_audioCtx.destination);
    src.start();
  } catch { /* audio unavailable */ }
}

// ── Helpers ────────────────────────────────────────────────────────────────
function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, Math.max(0, ms)));
}

/** Human-like jitter: rare long pauses, occasional medium, mostly natural */
function jitter(base: number): number {
  const r = Math.random();
  if (r > 0.96) return base + 260 + Math.random() * 320;
  if (r > 0.84) return base + 40 + Math.random() * 65;
  return Math.max(12, base + (Math.random() - 0.5) * base * 0.35);
}

// ── Props ──────────────────────────────────────────────────────────────────
export interface AnimatedCodeConsoleProps {
  className?: string;
  /** Base ms per character typed. Default 55. */
  typingSpeed?: number;
  /** Ms per character deleted during wipe. Default 22. */
  deleteSpeed?: number;
  /** Ms to hold the complete code before wiping. Default 10 000. */
  pauseBeforeDelete?: number;
  /** Enable procedural keyboard click sounds (requires user interaction first). */
  enableSound?: boolean;
  /** Loop the animation. Default true. */
  loop?: boolean;
}

// ── Component ──────────────────────────────────────────────────────────────
export default function AnimatedCodeConsole({
  className = '',
  typingSpeed = 55,
  deleteSpeed = 22,
  pauseBeforeDelete = 10_000,
  enableSound = false,
  loop = true,
}: AnimatedCodeConsoleProps) {
  const [displayText, setDisplayText] = useState('');
  const [blinking, setBlinking] = useState(false);

  // Mutable refs — safe to read inside the long-running async function
  const stopped   = useRef(false);
  const textRef   = useRef('');
  const propsRef  = useRef({ typingSpeed, deleteSpeed, pauseBeforeDelete, enableSound, loop });
  propsRef.current = { typingSpeed, deleteSpeed, pauseBeforeDelete, enableSound, loop };

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  // Resume AudioContext after first user gesture (browser policy)
  useEffect(() => {
    if (!enableSound) return;
    const resume = () => {
      try {
        if (!_audioCtx) _audioCtx = new AudioContext();
        if (_audioCtx.state === 'suspended') void _audioCtx.resume();
      } catch { /* noop */ }
    };
    window.addEventListener('pointerdown', resume, { once: true });
    return () => window.removeEventListener('pointerdown', resume);
  }, [enableSound]);

  // Main animation loop
  useEffect(() => {
    stopped.current = false;

    // Reduced-motion: show final text immediately
    if (prefersReduced) {
      textRef.current = FINAL_TEXT;
      setDisplayText(FINAL_TEXT);
      setBlinking(true);
      return;
    }

    const update = (text: string) => {
      textRef.current = text;
      setDisplayText(text);
    };

    async function run() {
      while (!stopped.current) {
        const { typingSpeed: ts, deleteSpeed: ds, enableSound: es } = propsRef.current;

        // ── Reset ──
        update('');
        setBlinking(false);

        // ── Type ──
        for (const op of SCRIPT) {
          if (stopped.current) return;

          if (op.k === 'c') {
            await sleep(op.d !== undefined ? op.d : jitter(ts));
            if (stopped.current) return;
            update(textRef.current + op.v);
            playClick(es, false);
          } else if (op.k === 'd') {
            for (let i = 0; i < op.n; i++) {
              if (stopped.current) return;
              await sleep(op.d !== undefined ? op.d : jitter(ds * 2.2));
              update(textRef.current.slice(0, -1));
              playClick(es, true);
            }
          } else {
            // pause — blink cursor on longer pauses
            if (op.ms >= 250) setBlinking(true);
            await sleep(op.ms);
            if (op.ms >= 250) setBlinking(false);
          }
        }

        if (stopped.current) return;

        // ── Hold ──
        setBlinking(true);
        await sleep(propsRef.current.pauseBeforeDelete);
        if (stopped.current) return;

        // If not looping, stay at final state forever
        if (!propsRef.current.loop) return;

        // ── Wipe (faster than typing) ──
        setBlinking(false);
        const wds = propsRef.current.deleteSpeed;
        while (textRef.current.length > 0) {
          if (stopped.current) return;
          await sleep(wds);
          update(textRef.current.slice(0, -1));
          // avoid audio spam: play every ~4 deletes
          if (textRef.current.length % 4 === 0) playClick(propsRef.current.enableSound, true);
        }

        await sleep(500);
      }
    }

    void run();
    return () => { stopped.current = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <pre
      className={`font-mono text-xs leading-relaxed text-left ${className}`}
      aria-label="Exemplo de código"
      aria-live="polite"
    >
      {tokenise(displayText).map((token, i) =>
        token.text === '\n' ? (
          <br key={i} />
        ) : (
          <span key={i} className={token.cls}>
            {token.text}
          </span>
        )
      )}
      {/* Blinking cursor */}
      <span
        className={`text-primary select-none ${blinking ? 'cursor-blink' : ''}`}
        aria-hidden="true"
      >
        |
      </span>
    </pre>
  );
}
