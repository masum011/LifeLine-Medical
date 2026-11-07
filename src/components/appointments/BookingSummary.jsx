import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { UI } from '../../i18n/ui'

function formatDate(dateString, lang) {
  if (!dateString) return null
  return new Date(`${dateString}T00:00:00`).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function SummaryRow({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className={`mt-1 text-sm font-semibold ${value ? 'text-slate-900' : 'text-slate-400'}`}>
        {value || null}
      </dd>
    </div>
  )
}

export default function BookingSummary({ doctor, date, time, bookingUrl }) {
  const { tx, lang } = useLanguage()
  const notSelected = tx(UI.appointments.notSelected)

  return (
    <aside className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg md:p-8 lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold">{tx(UI.appointments.summary)}</h2>
      <dl className="mt-6 flex flex-col gap-5">
        <SummaryRow label={tx(UI.appointments.doctor)} value={doctor ? tx(doctor.name) : notSelected} />
        <SummaryRow
          label={tx(UI.appointments.when)}
          value={date ? [formatDate(date, lang), time].filter(Boolean).join(' · ') : notSelected}
        />
      </dl>

      {bookingUrl ? (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg"
        >
          <MessageCircle size={18} />
          {tx(UI.appointments.bookWhatsapp)}
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-8 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-slate-400"
        >
          <MessageCircle size={18} />
          {tx(UI.appointments.bookWhatsapp)}
        </button>
      )}
      <p className="mt-4 text-center text-xs leading-relaxed text-slate-400">
        {bookingUrl ? tx(UI.appointments.note) : tx(UI.appointments.missingDetails)}
      </p>
    </aside>
  )
}
