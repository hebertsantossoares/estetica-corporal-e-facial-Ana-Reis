const testimonials = [
  { name: "Mariana S.", text: "Melhor limpeza de pele que já fiz! A Ana é muito cuidadosa e atenciosa. Minha pele ficou incrível!", service: "Limpeza de Pele" },
  { name: "Juliana R.", text: "Ambiente super acolhedor e atendimento impecável. A depilação é maravilhosa, super recomendo!", service: "Depilação" },
  { name: "Carolina M.", text: "Sou a cliente numero um. Os tratamentos fizeram uma diferença enorme na minha pele.", service: "Estética Facial" },
  { name: "Fernanda T.", text: "Design de sobrancelha impecável! Finalmente encontrei alguém que entende o formato certo para o meu rosto.", service: "Design de Sobrancelhas" },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">Depoimentos</p>
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            O que nossas clientes dizem
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/25 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Stars />
              <p className="text-foreground/75 leading-relaxed my-4 italic text-sm flex-1">
                {`"${t.text}"`}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
