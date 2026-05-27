import { Heart, Award, Clock } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-5xl font-serif font-bold text-primary">AR</span>
                  </div>
                  <p className="text-lg font-serif text-foreground/70">Ana Reis</p>
                  <p className="text-sm text-muted-foreground">Esteticista</p>
                </div>
              </div>
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold mb-1">+500</p>
              <p className="text-sm opacity-90">Clientes satisfeitas</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Sobre Mim
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Cuidando da sua pele com amor e profissionalismo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sou Ana Reis, especialista em estética corporal e facial. Minha missão é proporcionar 
              tratamentos de qualidade que realcem sua beleza natural, com técnicas modernas e 
              produtos de alta qualidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Acredito que cuidar da pele vai além da estética — é um momento de autocuidado e 
              bem-estar. Cada tratamento é personalizado para atender às suas necessidades específicas.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cuidado</h3>
                  <p className="text-sm text-muted-foreground">Atendimento personalizado</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Qualidade</h3>
                  <p className="text-sm text-muted-foreground">Produtos premium</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pontualidade</h3>
                  <p className="text-sm text-muted-foreground">Respeito ao seu tempo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
