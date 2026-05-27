import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Agende seu horário
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp ou visite nosso espaço. Estamos prontos para
            cuidar de você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Location Card */}
          <div className="bg-background rounded-2xl p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Localização</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rua Elisete Cardoso, Nº86
              <br />
              Sala 02 - Júlio de Mesquita Filho
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-background rounded-2xl p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">
              <Link
                href="https://wa.me/5515991176219"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                (15) 99117-6219
              </Link>
            </p>
          </div>

          {/* Hours Card */}
          <div className="bg-background rounded-2xl p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Horário</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Segunda a Sexta: 9h - 19h
              <br />
              Sábado: 9h - 14h
            </p>
          </div>

          {/* Instagram Card */}
          <div className="bg-background rounded-2xl p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
            <p className="text-sm text-muted-foreground">
              <Link
                href="https://instagram.com/anareis_esteticacorporal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @anareis_esteticacorporal
              </Link>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-balance">
            Pronta para cuidar da sua pele?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Agende agora mesmo sua sessão pelo WhatsApp e descubra o que podemos fazer
            pela sua beleza.
          </p>
          <Link
            href="https://wa.me/5515991176219?text=Olá! Gostaria de agendar um horário."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-card/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
