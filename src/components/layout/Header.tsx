import { useState, useCallback } from 'react';
import { navItems } from '@/data/navItems';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';

const sectionIds = navItems.map((n) => n.sectionId);

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

const scrollTo = useCallback((sectionId: string) => {
  const el = document.getElementById(sectionId);

  if (el) {
    const offset = 40;
    const elementTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth',
    });
  }

  setMobileOpen(false);
}, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-[0_0_40px_rgba(255,45,85,0.04)]">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4"
        role="navigation"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Ir para o início"
        >
          {/* <Wordmark /> */}
          <img
            src="/images/logo.png"
            alt="Hayssa Gomes logo"
            className="h-16 w-auto"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,95,125,0.25))' }}
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <li key={item.sectionId}>
                <button
                  onClick={() => scrollTo(item.sectionId)}
                  className={`font-headline tracking-tight text-sm transition-colors relative pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-on-surface/50 hover:text-primary'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex p-2 hover:bg-surface-container-high rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
          >
            <span className="material-symbols-outlined text-primary">
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 hover:bg-surface-container-high rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-primary">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent h-px absolute bottom-0 w-full" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-header border-t border-outline-variant/10 px-6 py-4">
          <ul className="flex flex-col gap-2" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <button
                    onClick={() => scrollTo(item.sectionId)}
                    className={`w-full text-left px-4 py-3 font-headline tracking-tight text-sm rounded transition-colors focus:outline-none ${isActive
                        ? 'text-primary bg-primary/5 border-l-2 border-primary pl-3'
                        : 'text-on-surface/60 hover:text-primary hover:bg-primary/5'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
