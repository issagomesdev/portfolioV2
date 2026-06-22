import type { CSSProperties } from 'react';
import { useTypewriterCode } from '@/hooks/useTypewriterCode';
import type { RevealState } from '@/hooks/useInViewAnimation';
import { revealClass } from '@/lib/reveal';

// ── Token definition ───────────────────────────────────────────────────────
interface CodeToken {
  text: string;
  className?: string;
}

// Mirrors the original static JSX exactly — same text, same color classes
const CODE_TOKENS: CodeToken[] = [
  { text: 'const', className: 'text-tertiary' },
  { text: ' profile = {' },
  { text: "\n  name: " },
  { text: "'Hayssa Gomes'", className: 'text-primary' },
  { text: ',' },
  { text: "\n  role: " },
  { text: "'Fullstack'", className: 'text-primary' },
  { text: ',' },
  { text: "\n  stack: [" },
  { text: " 'React'", className: 'text-secondary' },
  { text: ',' },
  { text: "'React Native'", className: 'text-secondary' },
  { text: ",\n    " },
  { text: "'Next.js'", className: 'text-secondary' },
  { text: ',' },
  { text: "'Node.js'", className: 'text-secondary' },
  { text: ",\n    " },
  { text: "'TypeScript'", className: 'text-secondary' },
  { text: ',' },
  { text: "'Laravel'", className: 'text-secondary' },
  { text: ",\n    " },
  { text: "'Docker'", className: 'text-secondary' },
  { text: ',' },
  { text: "'GIT' ", className: 'text-secondary' },
  { text: ']' },
  { text: "\n  focus: [" },
  { text: " 'Performance'", className: 'text-primary' },
  { text: ',' },
  { text: "'Scalability'", className: 'text-primary' },
  { text: ",\n    " },
  { text: "'Clean Architecture'", className: 'text-primary' },
  { text: ',' },
  { text: "'SOLID'", className: 'text-primary' },
  { text: ",\n    " },
  { text: "'UX/UI'", className: 'text-primary' },
  { text: ',' },
  { text: "'API Design' ", className: 'text-primary' },
  { text: ']' },
  { text: "\n};" },
  { text: "\n\n// Optimizing UX...", className: 'text-on-surface/30' },
  { text: "\nprofile." },
  { text: 'deploy', className: 'text-secondary' },
  { text: '();' },
];

// Single source of truth for the full text (used by the hook for timing)
const FULL_TEXT = CODE_TOKENS.map(t => t.text).join('');

// ── Render helper ──────────────────────────────────────────────────────────
function renderVisibleTokens(tokens: CodeToken[], visibleCount: number) {
  let count = 0;
  return tokens.map((token, index) => {
    const start = count;
    count += token.text.length;
    if (visibleCount <= start) return null;
    const visibleText = token.text.slice(0, visibleCount - start);
    if (!visibleText) return null;
    return (
      <span key={index} className={token.className}>
        {visibleText}
      </span>
    );
  });
}

// ── Component ──────────────────────────────────────────────────────────────
interface CodeConsoleProps {
  /** Drives the hidden/entering/visible reveal classes — set by the Hero's `useInViewAnimation`. */
  revealState: RevealState;
  /** Entrance delay (e.g. `'700ms'`) — set by the Hero based on scroll direction. */
  revealDelay?: string;
}

export default function CodeConsole({ revealState, revealDelay = '700ms' }: CodeConsoleProps) {
  const { visibleCount, soundEnabled, toggleSound } = useTypewriterCode({
    text: FULL_TEXT,
  });

  return (
    <aside
      style={{ '--reveal-delay': revealDelay } as CSSProperties}
      className={`
    ${revealClass('hero-console-enter', revealState)}
    relative block z-20
    mx-auto mb-12

    
    w-[90%] 
    
    /*  Mobile */ 
    min-[425px]:w-[22rem]

    p-6 rounded-xl

    bg-white/35 dark:bg-black/35 backdrop-blur-sm
    border border-black/[0.06] dark:border-white/[0.06]
    shadow-2xl shadow-black/60

    rotate-3 hover:rotate-0
    overflow-hidden

    /* Tablet */
    md:w-[25rem]
    md:mt-8

    /* iPad Pro / tablets grandes */
    lg:mt-10

    /* Desktop real */
    min-[1180px]:absolute
    min-[1180px]:top-[var(--console-top)]
    min-[1180px]:right-[var(--console-right)]
    min-[1180px]:mb-0
    min-[1180px]:w-[22rem]

    /* Large desktops */
    xl:w-[24rem]

    [transition:transform_500ms_ease,background-color_300ms_ease,border-color_300ms_ease]
  `}
      aria-label="Perfil de desenvolvedor em código"
    >
      {/* Screen reader: full static text */}
      <p className="sr-only">{FULL_TEXT}</p>

      {/* Traffic lights + sound toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <button
          onClick={toggleSound}
          className="text-on-surface/30 hover:text-on-surface/70 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          aria-label={soundEnabled ? 'Desativar som de digitação' : 'Ativar som de digitação'}
          aria-pressed={soundEnabled}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }} aria-hidden="true">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>
      </div>

      {/* Animated code */}
      <pre
        className="min-h-[15rem] sm:min-h-[19rem] min-[1180px]:min-h-[15rem] min-[1180px]:max-h-[7.5rem] font-mono text-[10px] sm:text-[13px] min-[1180px]:text-xs text-secondary/70 leading-relaxed text-left select-none whitespace-pre-wrap"
        aria-hidden="true"
      >
        {renderVisibleTokens(CODE_TOKENS, visibleCount)}
        <span className="animate-pulse text-primary" aria-hidden="true">|</span>
      </pre>
    </aside>
  );
}
