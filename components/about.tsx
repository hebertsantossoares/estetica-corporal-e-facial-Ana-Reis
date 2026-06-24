import Image from "next/image"
import { Heart, Award, Star } from "lucide-react"

export function About() {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/ana-reis.jpg"
                alt="Ana Reis"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Texto sobre a foto */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-3xl font-semibold">
                  Ana Reis
                </h3>

                <p className="tracking-[0.25em] uppercase text-xs mt-1 text-white/90">
                  Estetica corporal
                </p>
              </div>
            </div>

            
          </div>

          {/* Texto */}
          <div className="mt-8 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-primary/40 w-10" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Sobre o Studio
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5 text-balance">
              Cuidando da sua beleza com amor e profissionalismo
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              Sou Ana Reis, especialista em estética corporal e facial.
              Minha missão é proporcionar tratamentos de qualidade que
              realcem sua beleza natural, utilizando técnicas modernas,
              atendimento personalizado e produtos cuidadosamente
              selecionados.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10">
              Acredito que cuidar da autoestima é um ato de amor próprio.
              Cada atendimento é planejado de forma individual para atender
              às necessidades de cada cliente, proporcionando conforto,
              bem-estar e resultados que valorizam sua beleza.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  Icon: Heart,
                  label: "Cuidado",
                  sub: "Atendimento personalizado",
                },
                {
                  Icon: Award,
                  label: "Qualidade",
                  sub: "Produtos premium",
                },
                {
                  Icon: Star,
                  label: "Excelência",
                  sub: "Resultados visíveis",
                },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {label}
                    </p>

                    <p className="text-xs text-muted-foreground mt-0.5">
                      {sub}
                    </p>
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