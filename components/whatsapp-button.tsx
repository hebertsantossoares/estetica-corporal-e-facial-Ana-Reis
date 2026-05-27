"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5515991176219?text=Olá! Gostaria de agendar um horário."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  )
}
