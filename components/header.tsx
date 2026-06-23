"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

const navLinks = [
  { href: "/#inicio",    label: "Início" },
  { href: "/#sobre",     label: "Sobre" },
  { href: "/#servicos",  label: "Serviços" },
  { href: "/#contato",   label: "Contato" },
]

/* ── SVG logo inline — fiel ao flyer (AR monograma + texto) ── */
function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center leading-none">
      {/* Monograma AR */}
      <span
        className="font-serif font-bold text-primary leading-none"
        style={{ fontSize: "1.6rem", letterSpacing: "-0.04em" }}
      >
        AR
      </span>
      {/* Studio Ana Reis */}
      <span
        className="font-serif text-foreground/70 leading-none"
        style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase" }}
      >
        Studio Ana Reis
      </span>
    </Link>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/96 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-foreground/75 hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Agendar Horário
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium"
            >
              Agendar Horário
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
