import { useLanguage } from '../../context/LanguageContext'
import { UI } from '../../i18n/ui'
import { INPUT_CLASS } from './BookingStep'

export default function PatientDetailsForm({ values, onChange }) {
  const { tx } = useLanguage()

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-700">{tx(UI.appointments.name)}</span>
        <input
          type="text"
          value={values.name}
          onChange={(event) => onChange('name', event.target.value)}
          className={INPUT_CLASS}
          autoComplete="name"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-700">{tx(UI.appointments.phone)}</span>
        <input
          type="tel"
          value={values.phone}
          onChange={(event) => onChange('phone', event.target.value)}
          className={INPUT_CLASS}
          autoComplete="tel"
          placeholder="+91 9083827894"
        />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-sm font-medium text-slate-700">{tx(UI.appointments.reason)}</span>
        <textarea
          rows={3}
          value={values.reason}
          onChange={(event) => onChange('reason', event.target.value)}
          className={INPUT_CLASS}
        />
      </label>
    </div>
  )
}
