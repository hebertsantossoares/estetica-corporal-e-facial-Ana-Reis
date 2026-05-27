const testimonials = [
  {
    name: "Mariana S.",
    text: "Melhor limpeza de pele que já fiz! A Ana é muito cuidadosa e atenciosa. Minha pele ficou incrível!",
    service: "Limpeza de Pele",
  },
  {
    name: "Juliana R.",
    text: "Ambiente super acolhedor e atendimento impecável. A depilação é maravilhosa, super recomendo!",
    service: "Depilação com Cera",
  },
  {
    name: "Carolina M.",
    text: "Já sou cliente há mais de um ano. Os tratamentos faciais fizeram uma diferença enorme na minha pele.",
    service: "Estética Facial",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            O que nossas clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                {`"${testimonial.text}"`}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
