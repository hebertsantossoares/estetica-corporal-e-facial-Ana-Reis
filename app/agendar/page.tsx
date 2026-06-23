import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Clock, Phone } from "lucide-react"
import Link from "next/link"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

export const metadata = {
  title: "Agendar Horário | Studio Ana Reis",
  description:
    "Agende seu horário de massagem, depilação, limpeza de pele ou design de sobrancelhas no Studio Ana Reis em Sorocaba.",
}

export default function AgendarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16 sm:pt-20">

        {/* Hero da página */}
        <section className="bg-secondary/40 border-b border-border py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px bg-primary/40 w-8 sm:w-12" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">Online</p>
              <div className="h-px bg-primary/40 w-8 sm:w-12" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 text-balance">
              Agende seu Horário
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
              Escolha o serviço, a data e o horário. Os horários já ocupados aparecem automaticamente bloqueados.
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">

              {/* Formulário — ocupa 3/5 em lg */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <h2 className="text-lg font-serif font-semibold text-foreground mb-6">
                    Preencha seus dados
                  </h2>
                  <BookingForm />
                </div>
              </div>

              {/* Sidebar — ocupa 2/5 em lg */}
              <aside className="lg:col-span-2 space-y-4">

                {/* Informações */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Informações</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">Endereço</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          Rua Elisete Cardoso, 86 — Sala 2<br />
                          Júlio de Mesquita, Sorocaba – SP
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">Horários</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          Seg–Sex: 09:00 – 19:00<br />
                          Sábado: 09:00 – 14:00<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">WhatsApp</p>
                        <Link
                          href={WA}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          (15) 99636-9065
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Dica */}
                <div className="bg-primary/8 border border-primary/20 rounded-2xl p-5">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">Dica</p>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Preferindo agendar por mensagem? Fale direto no WhatsApp — respondemos rapidamente!
                  </p>
                  <Link
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                  >
                    Abrir WhatsApp
                  </Link>
                </div>

                {/* Serviços */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Serviços disponíveis</h3>
                  <ul className="space-y-2">
                    {["Massagem", "Depilação", "Limpeza de Pele", "Design de Sobrancelhas"].map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
