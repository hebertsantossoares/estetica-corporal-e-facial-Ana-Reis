import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroCorporal } from "@/components/corporal/hero-corporal"
import { Tratamentos } from "@/components/corporal/tratamentos"
import { BeneficiosCorporais } from "@/components/corporal/beneficios-corporais"
import { GaleriaResultados } from "@/components/corporal/galeria-resultados"
import { DepoimentosCorporais } from "@/components/corporal/depoimentos-corporais"
import { CTACorporal } from "@/components/corporal/cta-corporal"

export const metadata: Metadata = {
  title: "Estética Corporal | Studio Ana Reis",
  description:
    "Tratamentos corporais especializados: massagem relaxante, modeladora, drenagem linfática, tratamento para celulite, redução de medidas e muito mais. Agende sua avaliação.",
  keywords: [
    "estética corporal",
    "massagem modeladora",
    "drenagem linfática",
    "tratamento celulite",
    "redução de medidas",
    "gordura localizada",
    "flacidez corporal",
    "detox corporal",
    "massagem relaxante",
    "beleza",
    "bem-estar",
  ],
}

export default function EsteticaCorporalPage() {
  return (
    <main>
      <Header />
      <HeroCorporal />
      <Tratamentos />
      <BeneficiosCorporais />
      <GaleriaResultados />
      <DepoimentosCorporais />
      <CTACorporal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
