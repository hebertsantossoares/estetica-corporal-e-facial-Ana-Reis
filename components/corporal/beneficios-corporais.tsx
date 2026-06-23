"use client"

import { motion } from "framer-motion"
import {
  UserCheck,
  Cpu,
  Award,
  Sofa,
  TrendingUp,
  ShieldCheck,
} from "lucide-react"

const beneficios = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente recebe um protocolo exclusivo desenvolvido de acordo com suas necessidades e objetivos individuais.",
  },
  {
    icon: Cpu,
    title: "Equipamentos Modernos",
    description:
      "Utilizamos tecnologia de ponta e equipamentos de última geração para garantir tratamentos eficazes e seguros.",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description:
      "Nossa equipe é formada por profissionais especializados, com constante atualização em técnicas estéticas.",
  },
  {
    icon: Sofa,
    title: "Ambiente Confortável",
    description:
      "Um espaço acolhedor e sofisticado, pensado para proporcionar máximo conforto e bem-estar durante os atendimentos.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Visíveis",
    description:
      "Protocolos comprovados que entregam resultados reais, perceptíveis desde as primeiras sessões de tratamento.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança nos Procedimentos",
    description:
      "Todos os procedimentos seguem rigorosos protocolos de biossegurança, garantindo saúde e tranquilidade para você.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function BeneficiosCorporais() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Por que nos escolher
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Diferenciais que fazem toda a diferença
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No Studio Ana Reis, cada detalhe é pensado para oferecer uma
            experiência única e resultados que superam suas expectativas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <beneficio.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                {beneficio.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
