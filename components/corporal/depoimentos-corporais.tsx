"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const depoimentos = [
  {
    nome: "Fernanda O.",
    texto:
      "Excelente atendimento e resultados incríveis! Fiz o tratamento de redução de medidas e em apenas um mês perdi 8cm na cintura. Super recomendo o Studio Ana Reis!",
    servico: "Redução de Medidas",
  },
  {
    nome: "Patrícia L.",
    texto:
      "Ambiente acolhedor e profissionais muito atenciosos. A drenagem linfática transformou minha qualidade de vida. Me sinto muito mais leve e sem inchaço!",
    servico: "Drenagem Linfática",
  },
  {
    nome: "Camila T.",
    texto:
      "Fiz a massagem modeladora por 10 sessões e o resultado foi além das minhas expectativas. Meu corpo ficou muito mais definido e minha autoestima lá em cima!",
    servico: "Massagem Modeladora",
  },
  {
    nome: "Renata M.",
    texto:
      "O tratamento para celulite foi simplesmente maravilhoso. A Ana é muito profissional e cuidadosa. Minha pele melhorou muito e continuo voltando sempre!",
    servico: "Tratamento para Celulite",
  },
  {
    nome: "Larissa B.",
    texto:
      "Há anos lido com flacidez nos braços e nada resolvia. Depois do protocolo do Studio Ana Reis, minha pele ficou muito mais firme. Resultado incrível em pouco tempo!",
    servico: "Flacidez Corporal",
  },
]

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export function DepoimentosCorporais() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            O que nossas clientes dizem
          </h2>
        </motion.div>

        {/* Carrossel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl p-10 border border-border shadow-sm overflow-hidden min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <StarRating />
                <p className="text-foreground/80 leading-relaxed text-lg italic mb-8">
                  {`"${depoimentos[current].texto}"`}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{depoimentos[current].nome}</p>
                  <p className="text-sm text-muted-foreground">{depoimentos[current].servico}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/70" />
            </button>

            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5 text-foreground/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
