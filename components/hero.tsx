import Link from "next/link"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

function GoldLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M60 190 C60 190 10 140 10 80 C10 30 60 10 60 10 C60 10 110 30 110 80 C110 140 60 190 60 190Z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.55" />
      <line x1="60" y1="10" x2="60" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M60 50 C40 65 30 80 10 80" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M60 80 C40 95 25 105 10 100" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M60 110 C40 120 28 132 15 130" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M60 50 C80 65 90 80 110 80" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M60 80 C80 95 95 105 110 100" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M60 110 C80 120 92 132 105 130" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
    </svg>
  )
}

function LotusIcon() {
  return (
    <svg viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
      <path d="M16 17C16 17 4 13 4 7C4 3 8 1 16 1C24 1 28 3 28 7C28 13 16 17 16 17Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M16 17C16 17 9 10 9 5" stroke="currentColor" strokeWidth="1" />
      <path d="M16 17C16 17 23 10 23 5" stroke="currentColor" strokeWidth="1" />
      <path d="M16 1V17" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Folhas decorativas — menores em mobile */}
      <GoldLeaf className="absolute -top-4 -left-8 w-28 sm:w-40 md:w-56 text-primary opacity-50 -rotate-12 pointer-events-none" />
      <GoldLeaf className="absolute -top-4 -right-8 w-28 sm:w-40 md:w-56 text-primary opacity-50 rotate-12 scale-x-[-1] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Monograma */}
          <div className="flex flex-col items-center mb-5 sm:mb-6">
            <span
              className="font-serif font-bold text-primary leading-none select-none"
              style={{ fontSize: "clamp(2.8rem, 9vw, 5.5rem)", letterSpacing: "-0.04em" }}
            >
              AR
            </span>
            <span
              className="font-sans text-foreground/50 tracking-[0.28em] uppercase"
              style={{ fontSize: "0.55rem" }}
            >
              Studio
            </span>
            <span
              className="font-serif italic text-foreground"
              style={{ fontSize: "clamp(1.7rem, 6vw, 3.4rem)", lineHeight: 1.1 }}
            >
              Ana Reis
            </span>
            <span
              className="tracking-[0.22em] uppercase text-foreground/50 mt-1"
              style={{ fontSize: "0.55rem", fontFamily: "var(--font-lato, sans-serif)" }}
            >
              Estética Corporal e Facial
            </span>
          </div>

          {/* Divisor lotus */}
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1 h-px bg-primary/30 max-w-[60px] sm:max-w-[80px]" />
            <span className="text-primary"><LotusIcon /></span>
            <div className="flex-1 h-px bg-primary/30 max-w-[60px] sm:max-w-[80px]" />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl font-serif text-foreground mb-1 text-balance">
            Beleza, cuidado e{" "}
            <span className="text-primary italic">bem-estar</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-serif text-foreground mb-8 sm:mb-10 text-balance">
            em um só lugar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 sm:py-4 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </Link>
            <Link
              href="/agendar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary/40 text-primary px-7 py-3.5 sm:py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary/5 transition-colors"
            >
              Agendar Online
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
