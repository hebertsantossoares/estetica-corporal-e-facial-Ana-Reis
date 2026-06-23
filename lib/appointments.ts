import fs from "fs"
import path from "path"

export type Appointment = {
  id: string
  name: string
  phone: string
  service: string
  date: string   // "YYYY-MM-DD"
  time: string   // "HH:MM"
  createdAt: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "appointments.json")

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8")
}

export function readAppointments(): Appointment[] {
  ensureFile()
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) as Appointment[]
  } catch {
    return []
  }
}

function writeAppointments(list: Appointment[]) {
  ensureFile()
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf-8")
}

export function isSlotTaken(date: string, time: string): boolean {
  const list = readAppointments()
  return list.some((a) => a.date === date && a.time === time)
}

export function getBookedSlots(date: string): string[] {
  const list = readAppointments()
  return list.filter((a) => a.date === date).map((a) => a.time)
}

export function addAppointment(
  data: Omit<Appointment, "id" | "createdAt">
): { ok: true; appointment: Appointment } | { ok: false; error: string } {
  if (isSlotTaken(data.date, data.time)) {
    return { ok: false, error: "Este horário já foi reservado por outra pessoa. Por favor, escolha outro." }
  }
  const appointment: Appointment = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  }
  const list = readAppointments()
  list.push(appointment)
  writeAppointments(list)
  return { ok: true, appointment }
}
