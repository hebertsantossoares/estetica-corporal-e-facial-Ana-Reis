import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
