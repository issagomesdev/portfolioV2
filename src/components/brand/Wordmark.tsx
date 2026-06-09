interface WordmarkProps {
  className?: string;
}

export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Hayssa Gomes">
      <img
        src="/images/logo.png"
        alt="Hayssa Gomes logo"
        className="h-20 w-auto"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,95,125,0.25))' }}
      />
      <div className="flex flex-col leading-none">
        <span className="brand-name text-[1.5rem]" style={{ letterSpacing: '0.5em' }}>
          Hayssa
        </span>
        <div className="relative flex items-center gap-2 -left-2 mt-1">
          <span className="brand-line flex-1" style={{ width: 36 }} />
          <span className="brand-surname text-sm" style={{ letterSpacing: '0.4em' }}>
            Gomes
          </span>
          <span className="brand-line inverse flex-1" style={{ width: 36 }} />
        </div>
      </div>
    </div>
  );
}
