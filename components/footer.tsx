import Link from "next/link"
import { Instagram, MapPin, Phone } from "lucide-react"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">

          {/* Marca */}
          <div className="sm:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-serif font-bold text-primary leading-none" style={{ fontSize: "1.9rem", letterSpacing: "-0.04em" }}>AR</span>
              <span className="font-serif italic text-background/80" style={{ fontSize: "1.1rem" }}>Ana Reis</span>
              <span className="tracking-[0.2em] uppercase text-background/40 mt-0.5" style={{ fontSize: "0.5rem" }}>Estética Corporal e Facial</span>
            </div>
            <p className="text-background/60 max-w-xs leading-relaxed text-sm mb-5">
              Massagem, depilação, limpeza de pele e design de sobrancelhas.
              Beleza, cuidado e bem-estar em um só lugar.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://instagram.com/studioanareis" target="_blank" rel="noopener noreferrer" aria-label="Instagram @studioanareis"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <WhatsAppIcon />
              </Link>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/#inicio",   label: "Início" },
                { href: "/#sobre",    label: "Sobre" },
                { href: "/#servicos", label: "Serviços" },
                { href: "/agendar",   label: "Agendar" },
                { href: "/#contato",  label: "Contato" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-background/60 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <Link href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-background/60 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  (15) 99636-9065
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/studioanareis" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-background/60 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4 shrink-0" />
                  @studioanareis
                </Link>
              </li>
              <li>
                <Link
                       href="https://www.google.com/maps/search/?api=1&query=Rua+Elisete+Cardoso+86+Sala+2+Julio+de+Mesquita+Sorocaba+SP"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-start gap-2.5 text-sm text-background/60 hover:text-primary transition-colors"
              >
    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />

    <span>
      Rua Elisete Cardoso, 86 — Sala 2
      <br />
      Júlio de Mesquita, Sorocaba – SP
    </span>
  </Link>
</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/30">
            &copy; {new Date().getFullYear()} Studio Ana Reis Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
