import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    number: "01",
    title: "Resultados Visíveis",
    description:
      "Tratamentos que realmente funcionam, com resultados que você pode ver e sentir desde a primeira sessão.",
  },
  {
    number: "02",
    title: "Produtos de Qualidade",
    description:
      "Utilizamos apenas produtos profissionais de alta qualidade, seguros e eficazes para todos os tipos de pele.",
  },
  {
    number: "03",
    title: "Ambiente Acolhedor",
    description:
      "Um espaço pensado para o seu conforto e bem-estar, onde você pode relaxar enquanto cuida de si mesma.",
  },
  {
    number: "04",
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é única. Criamos protocolos de tratamento específicos para as suas necessidades.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Por que nos escolher
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Benefícios da limpeza de pele profissional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A limpeza de pele profissional vai muito além do que você consegue fazer em casa. 
              É um tratamento completo que proporciona resultados duradouros e visíveis.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Remove cravos e impurezas profundas",
                "Desobstrui os poros completamente",
                "Estimula a renovação celular",
                "Prepara a pele para absorver melhor os produtos",
                "Melhora a textura e luminosidade da pele",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/5515991176219"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Marque seu Horário
            </Link>
          </div>

          {/* Cards Side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors"
              >
                <span className="text-4xl font-serif font-bold text-primary/20 mb-4 block">
                  {benefit.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
