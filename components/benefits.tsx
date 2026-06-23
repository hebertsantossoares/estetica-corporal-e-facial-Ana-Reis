import { CheckCircle2, Shield, Star } from "lucide-react"
import Link from "next/link"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

const pillars = [
  {
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="20" cy="28" rx="12" ry="5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M20 28 C20 18 10 13 8 7 C14 11 18 17 20 23 C22 17 26 11 32 7 C30 13 20 18 20 28Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <line x1="20" y1="7" x2="20" y2="28" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    title: "Atendimento Personalizado",
    description: "Foco nas suas necessidades. Cada protocolo é desenvolvido exclusivamente para você.",
  },
  {
    Icon: Shield,
    title: "Profissionais Qualificados",
    description: "Segurança e excelência em cada detalhe. Técnicas atualizadas e formação especializada.",
  },
  {
    Icon: Star,
    title: "Produtos de Qualidade",
    description: "Tecnologia e cuidados para resultados incríveis. Apenas marcas profissionais.",
  },
]

const checkItems = [
  "Remove cravos e impurezas profundas",
  "Desobstrói os poros completamente",
  "Estimula a renovação celular",
  "Prepara a pele para absorver melhor os produtos",
  "Melhora textura e luminosidade da pele",
  "Reduz oleosidade e manchas",
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* 3 pilares — fiel ao flyer */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pillars.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                <Icon />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-1">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção benefícios limpeza de pele */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-primary/40 w-10" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Por que nos escolher
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
              Benefícios da limpeza de pele profissional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A limpeza de pele profissional vai muito além do que você consegue fazer em casa.
              É um tratamento completo com resultados duradouros e visíveis desde a primeira sessão.
            </p>

            <ul className="space-y-3 mb-10">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Marque seu Horário
            </Link>
          </div>

          {/* Cards numerados */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { n: "01", t: "Resultados Visíveis", d: "Você vê e sente a diferença desde a primeira sessão." },
              { n: "02", t: "Produtos Premium", d: "Formulações profissionais seguras para todos os tipos de pele." },
              { n: "03", t: "Ambiente Acolhedor", d: "Espaço pensado para o seu conforto e relaxamento." },
              { n: "04", t: "Personalização", d: "Protocolos criados especificamente para as suas necessidades." },
            ].map(({ n, t, d }) => (
              <div
                key={n}
                className="bg-secondary/50 p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors"
              >
                <span className="text-4xl font-serif font-bold text-primary/20 mb-3 block leading-none">
                  {n}
                </span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
