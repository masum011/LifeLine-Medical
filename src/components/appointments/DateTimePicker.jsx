import { Clock, Info } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { UI } from '../../i18n/ui'
import { getDayKey } from '../../utils/appointments'
import { INPUT_CLASS } from './BookingStep'

function todayLocal() {
  return new Date().toLocaleDateString('en-CA')
}

export default function DateTimePicker({ doctor, date, time, onDateChange, onTimeChange }) {
  const { tx } = useLanguage()
  const visitsOnDate = doctor && date ? doctor.days.includes(getDayKey(date)) : false

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-700">{tx(UI.appointments.date)}</span>
        <input
          type="date"
          min={todayLocal()}
          value={date}
          onChange={(event) => onDateChange(event.target.value)}
          className={`${INPUT_CLASS} sm:max-w-xs`}
        />
      </label>

      {!doctor || !date ? (
        <p className="flex items-start gap-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
          <Info size={18} className="mt-0.5 shrink-0 text-slate-400" />
          {tx(UI.appointments.pickDateFirst)}
        </p>
      ) : !visitsOnDate ? (
        <p className="flex items-start gap-2 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
          <Info size={18} className="mt-0.5 shrink-0" />
          {tx(UI.appointments.notAvailableDay)}
        </p>
      ) : (
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Clock size={16} className="text-teal-600" />
            {tx(UI.appointments.timeSlots)}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {doctor.slots.map((slot) => {
              const selected = slot === time
              return (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onTimeChange(slot)}
                  className={`rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all ${
                    selected
                      ? 'border-teal-600 bg-teal-600 text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-700'
                  }`}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
