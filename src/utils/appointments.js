import { DAYS, WHATSAPP_NUMBER } from '../data/clinic'

export function getDayKey(dateString) {
  const jsIndex = new Date(`${dateString}T00:00:00`).getDay()
  return DAYS.find((day) => day.jsIndex === jsIndex).key
}

export function isValidPhone(value) {
  return /^\+?[0-9][0-9\s-]{6,}$/.test(value.trim())
}

export function buildWhatsappUrl({ doctorName, date, time, patientName, phone, reason }) {
  const lines = [
    'Appointment request - LifeLine Medical',
    `Doctor: ${doctorName}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Patient name: ${patientName.trim()}`,
    `Phone: ${phone.trim()}`,
  ]
  if (reason.trim()) lines.push(`Reason: ${reason.trim()}`)

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}
