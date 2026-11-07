import { ArrowRight, CalendarCheck, Pill } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { CLINIC } from '../../data/clinic'
import { UI } from '../../i18n/ui'

export default function Hero() {
  const { tx } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <img
        src="https://images.pexels.com/photos/8460095/pexels-photo-8460095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 md:py-28">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-teal-200 ring-1 ring-white/20">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {tx(UI.hero.badge)}
        </span>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {tx(UI.hero.title)}
        </h1>
        <p className="max-w-xl text-base text-slate-200 md:text-lg">{tx(UI.hero.subtitle)}</p>
        <p className="text-sm font-medium text-teal-200">{tx(CLINIC.owner)}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#/appointments"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-lg"
          >
            <CalendarCheck size={18} />
            {tx(UI.hero.bookCta)}
          </a>
          <a
            href="#/medicines"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Pill size={18} />
            {tx(UI.hero.medicinesCta)}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
