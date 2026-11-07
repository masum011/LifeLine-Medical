import { useLanguage } from '../context/LanguageContext'
import { CLINIC } from '../data/clinic'
import { UI } from '../i18n/ui'

const QUICK_LINKS = [
  { href: '#/', label: UI.nav.home },
  { href: '#/appointments', label: UI.nav.appointments },
  { href: '#/medicines', label: UI.nav.medicines },
]

export default function Footer() {
  const { tx } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-slate-900">{tx(CLINIC.name)}</p>
          <p className="mt-1 text-sm text-slate-500">{tx(UI.footer.tagline)}</p>
          <p className="mt-3 text-sm font-medium text-teal-700">{tx(CLINIC.owner)}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">{tx(UI.footer.quickLinks)}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-teal-700">
                  {tx(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">{tx(UI.contact.call)}</p>
          <a href={CLINIC.phoneHref} className="mt-3 block text-sm text-slate-600 hover:text-teal-700">
            {CLINIC.phone}
          </a>
          <p className="mt-2 text-sm text-slate-600">{tx(CLINIC.address)}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {tx(CLINIC.name)}. {tx(UI.footer.rights)}
      </div>
    </footer>
  )
}
