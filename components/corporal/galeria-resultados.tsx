"use client"

import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

const resultados = [
  { label: "Redução de Medidas", area: "Abdômen" },
  { label: "Tratamento de Celulite", area: "Coxas" },
  { label: "Massagem Modeladora", area: "Quadril" },
  { label: "Flacidez Corporal", area: "Braços" },
  { label: "Drenagem Linfática", area: "Pernas" },
  { label: "Gordura Localizada", area: "Flancos" },
]

export function GaleriaResultados() {
  return (
    <section id="resultados" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Galeria de Resultados
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Antes e Depois
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de clientes que confiaram no nosso trabalho e
            transformaram seu corpo com nossos tratamentos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultados.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className="relative aspect-[4/5] bg-secondary/60 flex flex-col items-center justify-center gap-4">
                {/* Antes / Depois labels */}
                <div className="absolute top-4 left-4 bg-foreground/70 text-background text-xs font-semibold px-3 py-1 rounded-full">
                  Antes
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Depois
                </div>

                {/* Divider line */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card rounded-full border border-border flex items-center justify-center z-10 shadow-sm">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
                  </svg>
                </div>

                <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                <p className="text-muted-foreground/50 text-sm">Foto em breve</p>
              </div>

              <div className="p-5">
                <p className="font-serif font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground mt-1">Área tratada: {item.area}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Os resultados podem variar de pessoa para pessoa. Entre em contato para uma avaliação personalizada.
        </motion.p>
      </div>
    </section>
  )
}
