"use client"

import { useActionState, useEffect, useState, useTransition } from "react"
import { bookAppointment, fetchBookedSlots } from "@/app/actions"
import type { BookingFormState } from "@/app/actions"
import { CheckCircle2, AlertCircle, Loader2, Calendar, Clock } from "lucide-react"

const SERVICES = [
  "Massagem",
  "Depilação",
  "Limpeza de Pele",
  "Design de Sobrancelhas",
]

/* Horários disponíveis por dia da semana:
   seg–sex: 09:00–18:30, sáb: 09:00–13:30, dom: fechado */
function getSlots(dateStr: string): string[] {
  if (!dateStr) return []
  const day = new Date(`${dateStr}T12:00:00`).getDay() // 0=dom
  if (day === 0) return [] // domingo fechado

  const end = day === 6 ? 14 : 19 // sáb até 13:30, seg-sex até 18:30
  const slots: string[] = []
  for (let h = 9; h < end; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`)
    if (h < end - 1 || day !== 6) slots.push(`${String(h).padStart(2, "0")}:30`)
  }
  // sáb: 09:00..13:30
  if (day === 6) {
    return ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30"]
  }
  return slots
}

const initialState: BookingFormState = { status: "idle", message: "" }

export function BookingForm({ preselectedService }: { preselectedService?: string }) {
  const [state, formAction] = useActionState(bookAppointment, initialState)
  const [, startTransition] = useTransition()

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)

  // busca horários ocupados quando a data muda
  useEffect(() => {
    if (!selectedDate) { setBookedSlots([]); return }
    setLoadingSlots(true)
    startTransition(async () => {
      const booked = await fetchBookedSlots(selectedDate)
      setBookedSlots(booked)
      setLoadingSlots(false)
    })
  }, [selectedDate])

  // limpa o horário selecionado se a data mudar
  useEffect(() => { setSelectedTime("") }, [selectedDate])

  const slots = getSlots(selectedDate)
  const today = new Date().toISOString().split("T")[0]

  // calcula data máxima (90 dias à frente)
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 90)
  const maxDateStr = maxDate.toISOString().split("T")[0]

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">Agendamento Confirmado!</h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm">{state.message}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
        >
          Fazer outro agendamento
        </button>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">

      {/* Erro global */}
      {state.status === "error" && (
        <div className="flex items-start gap-3 bg-destructive/10 border border-destructive/20 rounded-xl p-4">
          <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">{state.message}</p>
        </div>
      )}

      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1.5">
          Nome completo <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
        />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1.5">
          WhatsApp <span className="text-primary">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(15) 99999-9999"
          className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
        />
      </div>

      {/* Serviço */}
      <div>
        <label htmlFor="service" className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1.5">
          Serviço <span className="text-primary">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={preselectedService ?? ""}
          className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors appearance-none"
        >
          <option value="" disabled>Selecione um serviço</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Data */}
      <div>
        <label htmlFor="date" className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1.5">
          Data <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            id="date"
            name="date"
            type="date"
            required
            min={today}
            max={maxDateStr}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-input border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
        </div>
        {selectedDate && new Date(`${selectedDate}T12:00:00`).getDay() === 0 && (
          <p className="text-xs text-destructive mt-1.5">Domingos não há atendimento. Escolha outra data.</p>
        )}
      </div>

      {/* Horários */}
      {selectedDate && new Date(`${selectedDate}T12:00:00`).getDay() !== 0 && (
        <div>
          <label className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
            Horário <span className="text-primary">*</span>
          </label>

          {loadingSlots ? (
            <div className="flex items-center gap-2 text-muted-foreground text-sm py-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Verificando disponibilidade...
            </div>
          ) : slots.length === 0 ? (
            <p className="text-sm text-muted-foreground py-2">Nenhum horário disponível nesta data.</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {slots.map((slot) => {
                const taken = bookedSlots.includes(slot)
                const selected = selectedTime === slot
                return (
                  <label
                    key={slot}
                    className={`relative flex items-center justify-center py-2 px-1 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      taken
                        ? "bg-muted border-muted text-muted-foreground/40 cursor-not-allowed line-through"
                        : selected
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-input border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={slot}
                      required
                      disabled={taken}
                      checked={selected}
                      onChange={() => setSelectedTime(slot)}
                      className="sr-only"
                    />
                    <Clock className={`w-3 h-3 mr-1 shrink-0 ${taken ? "opacity-30" : ""}`} />
                    {slot}
                    {taken && (
                      <span className="sr-only">— indisponível</span>
                    )}
                  </label>
                )
              })}
            </div>
          )}

          {slots.length > 0 && !loadingSlots && (
            <p className="text-xs text-muted-foreground mt-2">
              Horários riscados já estão ocupados.
            </p>
          )}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!selectedDate || !selectedTime}
        className="w-full bg-primary text-primary-foreground py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        Confirmar Agendamento
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Após confirmar, entraremos em contato pelo WhatsApp para finalizar.
      </p>
    </form>
  )
}
