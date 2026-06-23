import { Heart, Award, Star } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual lado esquerdo */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
              {/* Placeholder elegante com monograma */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/20">
                <div className="w-28 h-28 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
                  <span
                    className="font-serif font-bold text-primary"
                    style={{ fontSize: "2.8rem", letterSpacing: "-0.04em" }}
                  >
                    AR
                  </span>
                </div>
                <p className="font-serif italic text-foreground/70 text-lg">Ana Reis</p>
                <p
                  className="tracking-[0.2em] uppercase text-muted-foreground mt-1"
                  style={{ fontSize: "0.6rem" }}
                >
                  Esteticista
                </p>
              </div>
            </div>

            {/* Badge flutuante */}
            <div className="absolute -bottom-4 -right-2 md:-right-8 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-serif font-bold leading-none">+500</p>
              <p className="text-xs opacity-85 mt-0.5">clientes atendidas</p>
            </div>
          </div>

          {/* Conteúdo lado direito */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-primary/40 w-10" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Sobre o Studio
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Cuidando da sua pele com amor e profissionalismo
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou Ana Reis, especialista em estética corporal e facial. Minha missão é proporcionar
              tratamentos de qualidade que realcem sua beleza natural, com técnicas modernas e
              produtos cuidadosamente selecionados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Acredito que cuidar da pele é um ato de amor próprio. Cada sessão é pensada
              individualmente para atender às suas necessidades — porque você merece o melhor.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { Icon: Heart, label: "Cuidado", sub: "Atendimento personalizado" },
                { Icon: Award, label: "Qualidade", sub: "Produtos premium" },
                { Icon: Star, label: "Excelência", sub: "Resultados visíveis" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
