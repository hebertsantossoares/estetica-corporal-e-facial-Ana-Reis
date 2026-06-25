import { MapPin, Clock, Instagram } from "lucide-react"
import Link from "next/link"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const infoCards = [
  { Icon: WhatsAppIcon, label: "WhatsApp", value: "(15) 99636-9065",                                            href: WA },
  { Icon: MapPin,       label: "Endereço", value: "Rua Elisete Cardoso, 86 — Sala 2\nJúlio de Mesquita, Sorocaba – SP", href: "https://maps.google.com/?q=Rua+Elisete+Cardoso+86+Sorocaba+SP" },
  { Icon: Instagram,    label: "Instagram",value: "@studioanareis",                                             href: "https://instagram.com/studioanareis" },
]

export function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">Contato</p>
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Agende seu horário
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Entre em contato pelo WhatsApp ou visite nosso espaço. Estamos prontas para cuidar de você.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {infoCards.map(({ Icon, label, value, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-secondary/40 rounded-2xl p-6 sm:p-7 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</p>
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{value}</p>
            </Link>
          ))}
        </div>

        {/* Horários */}
        <div className="bg-card rounded-2xl border border-border p-5 sm:p-8 mb-6 sm:mb-10">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base">Horários de Atendimento</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { day: "Segunda a Sexta", hours: "14:00 – 20:00" },
              { day: "Sábado",          hours: "08:00 – 16:00" },
              { day: "Domingo",         hours: "Fechado" },
            ].map(({ day, hours }) => (
              <div key={day} className="bg-secondary/40 rounded-xl p-3 sm:p-4">
                <p className="text-xs text-muted-foreground mb-1">{day}</p>
                <p className="font-semibold text-foreground text-sm">{hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground/70 shrink-0" aria-hidden="true">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <p className="text-primary-foreground font-serif text-base sm:text-xl font-medium text-balance">
              Agende seu horário e viva a experiência de se cuidar!
            </p>
          </div>
          <Link
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 bg-card text-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-card/90 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Conversar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
