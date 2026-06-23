import Link from "next/link"
import Image from "next/image"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

/* Ícones SVG fiéis ao flyer */
function LotusIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true">
      <ellipse cx="20" cy="30" rx="12" ry="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 30 C20 20 10 14 8 8 C14 12 18 18 20 24 C22 18 26 12 32 8 C30 14 20 20 20 30Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <line x1="20" y1="8" x2="20" y2="30" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function WaxIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true">
      <line x1="14" y1="8" x2="22" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="26" y1="8" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function MassageIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true">
      <path d="M8 28 C12 20 20 18 28 20 C34 22 36 28 32 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22 C14 16 22 15 30 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="13" r="4" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
}

function BrowIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" aria-hidden="true">
      <path d="M6 16 C10 10 18 8 26 12 C30 14 32 16 34 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="20" cy="24" rx="9" ry="6" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="20" cy="24" r="3" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

const services = [
  {
    Icon: MassageIcon,
    title: "Massagem",
    description: "Alívio do estresse, relaxamento e bem-estar para o corpo e a mente.",
    benefits: ["Relaxamento profundo", "Alívio de tensões", "Bem-estar geral"],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Massagem relaxante nas costas",
  },
  {
    Icon: WaxIcon,
    title: "Depilação",
    description: "Pele lisa, macia e livre de preocupações.",
    benefits: ["Resultados duradouros", "Elimina pelos pela raiz", "Menos pelos encravados"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Depilação profissional com cera",
  },
  {
    Icon: LotusIcon,
    title: "Limpeza de Pele",
    description: "Pele limpa, saudável e radiante com o cuidado que você merece.",
    benefits: ["Poros desobstruídos", "Luminosidade renovada", "Remove impurezas"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Limpeza de pele facial",
  },
  {
    Icon: BrowIcon,
    title: "Design de Sobrancelhas",
    description: "Sobrancelhas que valorizam seu olhar e realçam sua beleza.",
    benefits: ["Formato personalizado", "Realça o olhar", "Acabamento preciso"],
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Design de sobrancelhas",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary/40 w-12" />
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
              Nossos Serviços
            </p>
            <div className="h-px bg-primary/40 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Tratamentos especializados para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada serviço é realizado com técnica, cuidado e produtos de alta qualidade.
          </p>
        </div>

        {/* Grid de cards — 3 acima + 1 largo embaixo (igual ao flyer) */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          {/* Último card — destaque horizontal */}
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCardWide service={services[3]} />
            {/* CTA lateral */}
            <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center text-primary-foreground">
              <p className="font-serif italic text-2xl md:text-3xl mb-3 text-balance">
                Cuidado que transforma.
              </p>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Resultados que elevam sua autoestima. Agende agora e viva a experiência de se cuidar.
              </p>
              <Link
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-card/90 transition-colors"
              >
                Agendar Horário
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300">
      {/* Foto */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>
      {/* Ícone */}
      <div className="flex justify-center -mt-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shadow-sm">
          <service.Icon />
        </div>
      </div>
      {/* Conteúdo */}
      <div className="p-6 pt-3 text-center">
        <h3 className="text-base font-medium tracking-[0.2em] uppercase text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <ul className="space-y-1.5 mb-6 text-left">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs text-foreground/75">
              <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <Link
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 px-5 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Agendar
        </Link>
      </div>
    </div>
  )
}

function ServiceCardWide({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300 flex">
      <div className="relative w-1/2 shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-primary">
            <service.Icon />
          </div>
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
            {service.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <Link
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 px-5 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Agendar
        </Link>
      </div>
    </div>
  )
}
