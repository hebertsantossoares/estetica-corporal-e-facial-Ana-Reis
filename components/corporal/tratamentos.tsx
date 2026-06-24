"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Wind,
  Activity,
  Waves,
  Zap,
  Ruler,
  Target,
  Layers,
  Leaf,
} from "lucide-react"

const tratamentos = [
  {
    icon: Wind,
    title: "Massagem Relaxante",
    description:
      "Técnica suave que alivia tensões musculares, reduz o estresse e promove profundo relaxamento do corpo e da mente.",
    beneficios: ["Alívio do estresse", "Relaxamento muscular", "Melhora do sono"],
  },
  {
    icon: Activity,
    title: "Massagem Modeladora",
    description:
      "Movimentos específicos que atuam no tecido adiposo, remodelando o contorno corporal e melhorando a circulação.",
    beneficios: ["Contorno corporal", "Melhora da circulação", "Tonificação"],
  },
  {
    icon: Waves,
    title: "Drenagem Linfática",
    description:
      "Técnica manual que estimula o sistema linfático, reduzindo inchaços, toxinas e retendo líquidos no organismo.",
    beneficios: ["Redução de inchaço", "Detoxificação", "Leveza corporal"],
  },
  {
    icon: Zap,
    title: "Tratamento para Celulite",
    description:
      "Protocolo especializado que combina técnicas manuais e recursos para suavizar a aparência da celulite.",
    beneficios: ["Suaviza a pele", "Melhora a textura", "Resultados visíveis"],
  },
  {
    icon: Ruler,
    title: "Redução de Medidas",
    description:
      "Tratamento focado na diminuição de medidas corporais através de técnicas combinadas de massagem e recursos.",
    beneficios: ["Perda de medidas", "Definição corporal", "Autoestima elevada"],
  },
  {
    icon: Target,
    title: "Gordura Localizada",
    description:
      "Protocolo direcionado para áreas de gordura resistente, promovendo a lipólise e remodelação do corpo.",
    beneficios: ["Elimina gordura", "Remodelação corporal", "Resultados duradouros"],
  },
  {
    icon: Layers,
    title: "Flacidez Corporal",
    description:
      "Tratamento que estimula a produção de colágeno e elastina, devolvendo firmeza e elasticidade à pele.",
    beneficios: ["Firmeza da pele", "Estímulo de colágeno", "Pele rejuvenescida"],
  },
  {
    icon: Leaf,
    title: "Detox Corporal",
    description:
      "Protocolo purificante que elimina toxinas acumuladas, revitaliza o organismo e melhora o bem-estar geral.",
    beneficios: ["Eliminação de toxinas", "Revitalização", "Bem-estar"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Tratamentos() {
  return (
    <section id="tratamentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Nossos Tratamentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Tratamentos especializados para o seu corpo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Protocolos personalizados desenvolvidos para transformar seu corpo,
            elevando sua autoestima e bem-estar com técnicas modernas e eficazes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tratamentos.map((tratamento, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <tratamento.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                {tratamento.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                {tratamento.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {tratamento.beneficios.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                    <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="https://wa.me/5515991176219?text=Olá! Gostaria de saber mais sobre o tratamento de estética corporal."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-1.5 w-full border border-primary/30 text-primary px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                Saiba Mais
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
