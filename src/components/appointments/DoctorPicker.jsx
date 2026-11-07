import { Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { UI } from '../../i18n/ui'

export default function DoctorPicker({ doctors, selectedId, onSelect }) {
  const { tx } = useLanguage()

  return (
    <div role="radiogroup" aria-label={tx(UI.appointments.step1)} className="grid gap-4 sm:grid-cols-2">
      {doctors.map((doctor) => {
        const selected = doctor.id === selectedId
        return (
          <button
            key={doctor.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onSelect(doctor.id)}
            className={`relative flex flex-col rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
              selected ? 'border-teal-600 bg-teal-50' : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            {selected && (
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white">
                <Check size={14} />
              </span>
            )}
            <span className="text-base font-semibold text-slate-900">{tx(doctor.name)}</span>
            <span className="mt-1 text-sm font-medium text-teal-700">{tx(doctor.specialty)}</span>
            <span className="mt-3 text-sm text-slate-600">{tx(doctor.time)}</span>
          </button>
        )
      })}
    </div>
  )
}
