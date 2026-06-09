interface MainBrandProps {
  className?: string;
  compact?: boolean;
}

export default function MainBrand({ className = '', compact = false }: MainBrandProps) {

  return (
    <div className={`flex flex-col sm:flex-row items-center ${className}`} aria-label="Hayssa Gomes">
      <img
        src="/images/logo.png"
        alt="Hayssa Gomes logo"
        className={`${compact ? 'w-32 sm:w-24' : 'w-20 sm:w-60'} h-auto mb-4 sm:mb-0 mr-0 sm:mr-3`}
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,95,125,0.25))' }}
      />

      <section className={`${compact ? 'flex flex-col items-center' : 'flex flex-col items-center'} leading-none -mt-2`}>
        <span className="brand-name" style={{ fontSize: `${compact ? '2rem' : '3.8rem'}`, letterSpacing: '0.4em' }}>
          Hayssa
        </span>

        <div className="relative flex items-center gap-2 w-full justify-center mt-2">
          <span className="brand-line inverse" style={{ width: `${compact ? '45px' : '80px'}`}} />
          <span className="brand-surname" style={{ fontSize: `${compact ? '1.1rem' : '2rem'}`, letterSpacing: '0.5em' }}>
            Gomes
          </span>
          <span className="brand-line" style={{ width: `${compact ? '45px' : '80px'}` }} />
        </div>

        <div className="flex items-center gap-3 mt-2 font-brand text-sm tracking-widest uppercase text-on-surface/70">
          <span className={`${compact ? 'text-[0.5rem]' : 'text-sm'}`}>Arquitetura</span>
          <span
            className={`${compact ? 'w-1 h-1' : 'w-2 h-2'} rounded-full inline-block`}
            style={{ background: '#b75cff', boxShadow: '0 0 8px #b75cff' }}
          />
          <span className={`${compact ? 'text-[0.5rem]' : 'text-sm'}`}>Código</span>
          <span
            className={`${compact ? 'w-1 h-1' : 'w-2 h-2'} rounded-full inline-block`}
            style={{ background: '#55e8ee', boxShadow: '0 0 8px #55e8ee' }}
          />
          <span className={`${compact ? 'text-[0.5rem]' : 'text-sm'}`}>Experiência</span>
        </div>
      </section>
    </div>
  );
}
