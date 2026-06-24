"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, CheckCircle2, Clock, ArrowRight } from "lucide-react"

/* ── Ícones ── */
function LotusIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="20" cy="30" rx="12" ry="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 30 C20 20 10 14 8 8 C14 12 18 18 20 24 C22 18 26 12 32 8 C30 14 20 20 20 30Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <line x1="20" y1="8" x2="20" y2="30" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function WaxIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <line x1="14" y1="8" x2="22" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="8" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function MassageIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M8 28 C12 20 20 18 28 20 C34 22 36 28 32 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 22 C14 16 22 15 30 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function BrowIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M6 16 C10 10 18 8 26 12 C30 14 32 16 34 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="20" cy="24" rx="9" ry="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

type Service = {
  id: string
  Icon: ({ className }: { className?: string }) => React.JSX.Element
  title: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  duration: string
  benefits: string[]
  details: string
  includes: string[]
}

const services: Service[] = [
  {
    id: "massagem",
    Icon: MassageIcon,
    title: "Massagem",
    tagline: "Alívio do estresse, relaxamento e bem-estar para o corpo e a mente.",
    description:
      "Nossa massagem terapêutica combina técnicas relaxantes e modeladoras para proporcionar bem-estar completo. Ideal para aliviar tensões, melhorar a circulação e renovar as energias.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Massagem relaxante nas costas",
    duration: "60 a 90 min",
    benefits: [
      "Alívio de tensões musculares e dores crônicas",
      "Redução do estresse e ansiedade",
      "Melhora da circulação sanguínea e linfática",
      "Relaxamento profundo do sistema nervoso",
      "Estímulo à produção de endorfinas",
      "Sensação imediata de leveza e bem-estar",
    ],
    details:
      "Realizamos diferentes tipos de massagem: relaxante, modeladora e drenagem linfática. O protocolo é escolhido conforme a necessidade de cada cliente para garantir o melhor resultado.",
    includes: [
      "Avaliação inicial das necessidades",
      "Uso de óleos essenciais premium",
      "Ambiente climatizado e acolhedor",
      "Toalhas aquecidas",
    ],
  },
  {
    id: "depilacao",
    Icon: WaxIcon,
    title: "Depilação",
    tagline: "Pele lisa, macia e livre de preocupações.",
    description:
      "Depilação com cera profissional que remove os pelos pela raiz, garantindo resultados duradouros e pele incrivelmente macia. Técnica precisa para o menor desconforto possível.",
    image: "https://img.magnific.com/fotos-premium/beleza-depilacao-depilacao-depilacao-e-conceito-de-pessoas-mulher-bonita-com-aplicador-aplicando-cera-depilatoria-na-perna_152904-5231.jpg?semt=ais_hybrid&w=740&q=80",
    imageAlt: "Depilação profissional com cera",
    duration: "30 a 60 min",
    benefits: [
      "Pele lisa e macia por semanas",
      "Redução progressiva dos pelos com o uso regular",
      "Menos pelos encravados comparado à lâmina",
      "Remoção pela raiz para resultado duradouro",
      "Técnica que minimiza o desconforto",
      "Pele hidratada após o procedimento",
    ],
    details:
      "Utilizamos cera quente e cera fria de alta qualidade, adequadas para cada região do corpo e tipo de pele. O procedimento é realizado com total higiene e cuidado com sua pele.",
    includes: [
      "Higienização da área antes do procedimento",
      "Cera premium de qualidade profissional",
      "Finalização calmante para a pele",
      "Orientações pós-depilação",
    ],
  },
  {
    id: "limpeza-de-pele",
    Icon: LotusIcon,
    title: "Limpeza de Pele",
    tagline: "Pele limpa, saudável e radiante com o cuidado que você merece.",
    description:
      "Limpeza de pele profunda com técnicas estéticas avançadas. Remove impurezas, cravos e células mortas, revelando uma pele mais luminosa, uniforme e saudável desde a primeira sessão.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Limpeza de pele facial profissional",
    duration: "60 a 75 min",
    benefits: [
      "Remoção profunda de cravos e impurezas",
      "Desobstrução completa dos poros",
      "Luminosidade e uniformidade da pele",
      "Estimula a renovação celular",
      "Prepara a pele para absorver melhor os ativos",
      "Redução da oleosidade e de manchas",
    ],
    details:
      "O protocolo inclui higienização, esfoliação, vapor, extração de cravos e comedões, aplicação de máscara e hidratação final. Cada etapa é personalizada conforme o seu tipo de pele.",
    includes: [
      "Análise de pele antes do procedimento",
      "Esfoliação e vapor facial",
      "Extração profissional segura",
      "Máscara calmante personalizada",
      "Hidratação e proteção solar final",
    ],
  },
  {
    id: "design-de-sobrancelhas",
    Icon: BrowIcon,
    title: "Design de Sobrancelhas",
    tagline: "Sobrancelhas que valorizam seu olhar e realçam sua beleza.",
    description:
      "Design de sobrancelhas personalizado que respeita as características do seu rosto, realçando o seu olhar de forma natural e harmoniosa. Técnica precisa para um resultado impecável.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zJF6-El1Av1FPiUWWftFOJI_LiJb2eFWq0Upnz_sbKEiu3lDXsbNJrc&s=10",
    imageAlt: "Design de sobrancelhas profissional",
    duration: "30 a 45 min",
    benefits: [
      "Formato personalizado para o seu rosto",
      "Realça e emoldura o olhar naturalmente",
      "Simetria e harmonia facial",
      "Acabamento preciso e duradouro",
      "Técnica que respeita a estrutura natural",
      "Rejuvenescimento facial imediato",
    ],
    details:
      "O design começa com uma análise do formato do seu rosto e estrutura óssea. Usamos técnicas de medição profissional para garantir simetria e o formato ideal que realce a sua beleza.",
    includes: [
      "Mapeamento facial individualizado",
      "Técnica de linha a linha",
      "Acabamento com henna opcional",
      "Orientações de manutenção em casa",
    ],
  },
]

function ServiceModal({
  service,
  onClose,
}: {
  service: Service
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const waLink = `https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20${encodeURIComponent(service.title)}.`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${service.title}`}
    >
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[88vh] bg-card rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        <div className="relative h-44 sm:h-56 shrink-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 672px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-primary border border-border">
              <service.Icon className="w-5 h-5" />
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                Serviço
              </p>
              <h2 className="text-lg font-serif font-bold text-card-foreground leading-tight">
                {service.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-7">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>
              Duração média:{" "}
              <strong className="text-foreground">{service.duration}</strong>
            </span>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="mb-6">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Benefícios
            </h3>

            <ul className="grid sm:grid-cols-2 gap-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/75">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              O que está incluso
            </h3>

            <ul className="space-y-2">
              {service.includes.map((inc) => (
                <li
                  key={inc}
                  className="flex items-center gap-2.5 text-sm text-foreground/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {service.details}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/agendar"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Agendar Online
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-primary/40 text-primary px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({
  service,
  onClick,
}: {
  service: Service
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Ver detalhes: ${service.title}`}
    >
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors" />
      </div>

      <div className="flex justify-center -mt-5 relative z-10">
        <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary shadow-sm">
          <service.Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="p-5 pt-3 text-center">
        <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
          {service.tagline}
        </p>

        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Ver detalhes
        </span>
      </div>
    </button>
  )
}

function ServiceCardWide({
  service,
  onClick,
}: {
  service: Service
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col sm:flex-row w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Ver detalhes: ${service.title}`}
    >
      <div className="relative h-44 sm:h-40 sm:w-2/5 shrink-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 40vw"
        />

        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors" />
      </div>

      <div className="p-5 sm:p-6 flex items-center sm:w-3/5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center text-primary shrink-0">
            <service.Icon className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-primary mb-2">
              {service.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.tagline}
            </p>

            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Ver detalhes
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null)

  const closeModal = useCallback(() => setActiveService(null), [])

  return (
    <>
      <section id="servicos" className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-primary/40 w-8 sm:w-12" />

              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Nossos Serviços
              </p>

              <div className="h-px bg-primary/40 w-8 sm:w-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Tratamentos especializados para você
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              Clique em qualquer serviço para conhecer todos os benefícios e detalhes.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.slice(0, 3).map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => setActiveService(service)}
                />
              ))}
            </div>

            <ServiceCardWide
              service={services[3]}
              onClick={() => setActiveService(services[3])}
            />

            <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 text-center">
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-primary mb-2">
                ❤ Cuidado que transforma.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base tracking-wide">
                Resultados que elevam sua autoestima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {activeService && (
        <ServiceModal service={activeService} onClose={closeModal} />
      )}
    </>
  )
}