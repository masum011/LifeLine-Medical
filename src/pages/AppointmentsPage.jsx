import { useState } from 'react'
import BookingStep from '../components/appointments/BookingStep'
import BookingSummary from '../components/appointments/BookingSummary'
import DateTimePicker from '../components/appointments/DateTimePicker'
import DoctorPicker from '../components/appointments/DoctorPicker'
import PatientDetailsForm from '../components/appointments/PatientDetailsForm'
import { useLanguage } from '../context/LanguageContext'
import { DOCTORS } from '../data/clinic'
import { UI } from '../i18n/ui'
import { buildWhatsappUrl, getDayKey, isValidPhone } from '../utils/appointments'

const EMPTY_DETAILS = { name: '', phone: '', reason: '' }

export default function AppointmentsPage() {
  const { tx } = useLanguage()
  const [doctorId, setDoctorId] = useState(null)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [details, setDetails] = useState(EMPTY_DETAILS)

  const doctor = DOCTORS.find((item) => item.id === doctorId) ?? null
  const visitsOnDate = doctor && date ? doctor.days.includes(getDayKey(date)) : false
  const detailsComplete = details.name.trim() !== '' && isValidPhone(details.phone)

  const bookingUrl =
    doctor && visitsOnDate && time && detailsComplete
      ? buildWhatsappUrl({
          doctorName: doctor.name.en,
          date,
          time,
          patientName: details.name,
          phone: details.phone,
          reason: details.reason,
        })
      : null

  const selectDoctor = (id) => {
    setDoctorId(id)
    setTime('')
  }

  const updateDetail = (field, value) => setDetails((current) => ({ ...current, [field]: value }))

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {tx(UI.appointments.title)}
        </h1>
        <p className="mt-3 text-base text-slate-600">{tx(UI.appointments.subtitle)}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <BookingStep number={1} title={tx(UI.appointments.step1)}>
            <DoctorPicker doctors={DOCTORS} selectedId={doctorId} onSelect={selectDoctor} />
          </BookingStep>

          <BookingStep number={2} title={tx(UI.appointments.step2)}>
            <DateTimePicker
              doctor={doctor}
              date={date}
              time={time}
              onDateChange={setDate}
              onTimeChange={setTime}
            />
          </BookingStep>

          <BookingStep number={3} title={tx(UI.appointments.step3)}>
            <PatientDetailsForm values={details} onChange={updateDetail} />
          </BookingStep>
        </div>

        <BookingSummary doctor={doctor} date={date} time={time} bookingUrl={bookingUrl} />
      </div>
    </div>
  )
}
