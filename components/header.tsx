"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const WA = "https://wa.me/5515996369065?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."

const navLinks = [
  { href: "/#inicio",    label: "Início" },
  { href: "/#sobre",     label: "Sobre" },
  { href: "/#servicos",  label: "Serviços" },
  { href: "/agendar",    label: "Agendar" },
  { href: "/#contato",   label: "Contato" },
]

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center leading-none">
      <span
        className="font-serif font-bold text-primary leading-none"
        style={{ fontSize: "1.6rem", letterSpacing: "-0.04em" }}
      >
        AR
      </span>
      <span
        className="font-sans text-foreground/60 leading-none"
        style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase" }}
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

  // fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/96 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-foreground/70 hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Ações desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </Link>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2.5 border-b border-border/40 last:border-0"
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
              Agendar pelo WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
