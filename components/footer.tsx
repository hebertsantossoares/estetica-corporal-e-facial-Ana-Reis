import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold text-primary">
                Ana Reis
              </span>
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Estética Corporal e Facial. Cuidando da sua pele com amor e
              profissionalismo. Limpeza de pele, depilação com cera e tratamentos
              faciais personalizados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/anareis_esteticacorporal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/5515991176219"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#servicos", label: "Serviços" },
                { href: "#beneficios", label: "Benefícios" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Rua Elisete Cardoso, Nº86
                  <br />
                  Sala 02 - Júlio de Mesquita Filho
                </span>
              </li>
              <li>
                <Link
                  href="https://wa.me/5515991176219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  (15) 99117-6219
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Ana Reis Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
