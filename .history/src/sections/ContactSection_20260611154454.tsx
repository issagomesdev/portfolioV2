import { useState, type FormEvent } from 'react';

const contactLinks = [
  { icon: 'phone', label: 'WhatsApp', value: '+55 (81) 99108-0086', href: 'https://wa.me/5581991080086' },
  { icon: 'mail', label: 'Email', value: 'contact@byissa.dev', href: 'mailto:contact@byissa.dev' },
  { icon: 'location_on', label: 'Base Location', value: 'Paulista, Pernambuco - Brazil', href: 'https://maps.google.com/?q=Paulista,+Pernambuco+-+Brazil' },
  { icon: 'code', label: 'GitHub', value: 'github.com/hayssa', href: '#' },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — wire up to VITE_API_URL when ready
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Title */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" aria-hidden="true" />
            <span className="font-label text-primary tracking-[0.2em] text-xs uppercase">Get in touch</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-on-surface to-on-surface/50 bg-clip-text text-transparent">
            CONTATO<span className="text-primary">.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div className="space-y-8">
            <p className="font-body text-lg text-on-surface/80 leading-relaxed max-w-md">
              Disponível para projetos freelance, consultoria e oportunidades de emprego. Respondo em até 24h.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 bg-surface-container-low ghost-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-lg border border-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">{icon}</span>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{label}</p>
                    <p className="font-body text-sm text-on-surface">{value}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-container-low ghost-border rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">Mensagem enviada!</h3>
                <p className="text-on-surface-variant font-body">Obrigada pelo contato. Responderei em breve.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2 border border-primary/30 text-primary font-label text-xs uppercase tracking-widest rounded hover:bg-primary/5 transition-colors"
                >
                  Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Nome *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary/50 rounded px-4 py-3 text-on-surface text-sm font-body outline-none transition-colors placeholder:text-on-surface/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary/50 rounded px-4 py-3 text-on-surface text-sm font-body outline-none transition-colors placeholder:text-on-surface/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Projeto freelance, consultoria..."
                    className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary/50 rounded px-4 py-3 text-on-surface text-sm font-body outline-none transition-colors placeholder:text-on-surface/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Descreva seu projeto..."
                    className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary/50 rounded px-4 py-3 text-on-surface text-sm font-body outline-none transition-colors resize-none placeholder:text-on-surface/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label font-bold uppercase tracking-widest rounded-lg hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {loading ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
