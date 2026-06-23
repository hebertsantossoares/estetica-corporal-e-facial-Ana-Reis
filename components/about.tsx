import { Heart, Award, Star } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/20">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
                  <span className="font-serif font-bold text-primary" style={{ fontSize: "2.4rem", letterSpacing: "-0.04em" }}>AR</span>
                </div>
                <p className="font-serif italic text-foreground/70 text-base sm:text-lg">Ana Reis</p>
                <p className="tracking-[0.2em] uppercase text-muted-foreground mt-1" style={{ fontSize: "0.6rem" }}>Esteticista</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-primary text-primary-foreground px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-xl">
              <p className="text-xl sm:text-2xl font-serif font-bold leading-none">+500</p>
              <p className="text-xs opacity-85 mt-0.5">clientes atendidas</p>
            </div>
          </div>

          {/* Texto */}
          <div className="mt-8 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-primary/40 w-10" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">Sobre o Studio</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5 text-balance">
              Cuidando da sua pele com amor e profissionalismo
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              Sou Ana Reis, especialista em estética corporal e facial. Minha missão é proporcionar
              tratamentos de qualidade que realcem sua beleza natural, com técnicas modernas e
              produtos cuidadosamente selecionados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10">
              Acredito que cuidar da pele é um ato de amor próprio. Cada sessão é pensada
              individualmente para atender às suas necessidades — porque você merece o melhor.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { Icon: Heart,  label: "Cuidado",    sub: "Atendimento personalizado" },
                { Icon: Award,  label: "Qualidade",  sub: "Produtos premium" },
                { Icon: Star,   label: "Excelência", sub: "Resultados visíveis" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
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
