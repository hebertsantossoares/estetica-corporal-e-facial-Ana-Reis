import { Droplets, Sparkles, Leaf } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Droplets,
    title: "Limpeza de Pele",
    description:
      "Tratamento completo para remover impurezas, cravos e células mortas, deixando sua pele renovada e radiante.",
    benefits: ["Pele renovada", "Poros desobstruídos", "Luminosidade"],
    price: "A partir de R$ 120",
  },
  {
    icon: Sparkles,
    title: "Depilação com Cera",
    description:
      "Depilação profissional com cera de alta qualidade. Resultados duradouros, pele macia e lisinha por mais tempo.",
    benefits: ["Resultados duradouros", "Elimina pelos pela raiz", "Menos pelos encravados"],
    price: "Consulte valores",
  },
  {
    icon: Leaf,
    title: "Estética Facial",
    description:
      "Tratamentos faciais especializados para rejuvenescimento, hidratação profunda e cuidados anti-idade.",
    benefits: ["Rejuvenescimento", "Hidratação profunda", "Anti-idade"],
    price: "A partir de R$ 150",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Tratamentos especializados para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma variedade de tratamentos estéticos de alta qualidade,
            personalizados para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-semibold text-primary">{service.price}</span>
                <Link
                  href="https://wa.me/5515991176219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  Agendar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
