"use server"

import { addAppointment, getBookedSlots } from "@/lib/appointments"

export type BookingFormState = {
  status: "idle" | "success" | "error"
  message: string
  appointmentId?: string
}

export async function bookAppointment(
  _prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const name    = (formData.get("name")    as string | null)?.trim() ?? ""
  const phone   = (formData.get("phone")   as string | null)?.trim() ?? ""
  const service = (formData.get("service") as string | null)?.trim() ?? ""
  const date    = (formData.get("date")    as string | null)?.trim() ?? ""
  const time    = (formData.get("time")    as string | null)?.trim() ?? ""

  if (!name || !phone || !service || !date || !time) {
    return { status: "error", message: "Preencha todos os campos obrigatórios." }
  }

  // Validação: não agendar datas passadas
  const chosenDate = new Date(`${date}T${time}:00`)
  if (chosenDate < new Date()) {
    return { status: "error", message: "Não é possível agendar para uma data/horário passado." }
  }

  const result = addAppointment({ name, phone, service, date, time })

  if (!result.ok) {
    return { status: "error", message: result.error }
  }

  return {
    status: "success",
    message: `Agendamento confirmado! Aguarde nossa confirmação pelo WhatsApp (15) 99636-9065.`,
    appointmentId: result.appointment.id,
  }
}

export async function fetchBookedSlots(date: string): Promise<string[]> {
  if (!date) return []
  return getBookedSlots(date)
}
