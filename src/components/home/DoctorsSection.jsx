import { CalendarCheck, GraduationCap } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { DAYS, DOCTORS } from '../../data/clinic'
import { UI } from '../../i18n/ui'
import SectionHeading from '../SectionHeading'

const AVATAR_TONES = ['bg-teal-600', 'bg-sky-600', 'bg-emerald-600', 'bg-amber-600']

function initials(name) {
  return name
    .replace(/^(ডা\.|Dr\.)\s*/, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export default function DoctorsSection() {
  const { tx } = useLanguage()

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="doctors"
          title={tx(UI.sections.doctors)}
          subtitle={tx(UI.sections.doctorsSub)}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((doctor, index) => {
            const dayLabels = DAYS.filter((day) => doctor.days.includes(day.key))
            return (
              <article
                key={doctor.id}
                className="flex flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${AVATAR_TONES[index % AVATAR_TONES.length]}`}
                  >
                    {initials(doctor.name.en)}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{tx(doctor.name)}</h3>
                    <p className="text-sm font-medium text-teal-700">{tx(doctor.specialty)}</p>
                  </div>
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <GraduationCap size={16} className="shrink-0 text-slate-400" />
                  {doctor.qualifications}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {tx(UI.doctors.experience)}: {doctor.experienceYears} {tx(UI.doctors.years)}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {dayLabels.map((day) => (
                    <span key={day.key} className="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                      {tx(day)}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-600">{tx(doctor.time)}</p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-200 mt-5 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">{tx(UI.doctors.fee)}</p>
                    <p className="text-base font-semibold text-slate-900">&#2547; {doctor.fee}</p>
                  </div>
                  <a
                    href="#/appointments"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    <CalendarCheck size={15} />
                    {tx(UI.doctors.bookNow)}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
