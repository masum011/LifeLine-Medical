import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { CLINIC } from '../data/clinic'
import { UI } from '../i18n/ui'

const LINKS = [
  { href: '#/', label: UI.nav.home },
  { href: '#/appointments', label: UI.nav.appointments },
  { href: '#/medicines', label: UI.nav.medicines },
]

export default function Navbar({ currentPath }) {
  const { tx, toggleLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      currentPath === href
        ? 'bg-teal-50 text-teal-700'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Phone size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-slate-900">{tx(CLINIC.name)}</span>
            <span className="block text-xs text-slate-500">{tx(CLINIC.owner)}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {tx(link.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-700"
          >
            {tx(UI.nav.switchLanguage)}
          </button>
          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700 sm:inline-flex"
          >
            <Phone size={16} />
            {tx(UI.nav.callNow)}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={tx(menuOpen ? UI.nav.closeMenu : UI.nav.openMenu)}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={linkClass(link.href)}
              >
                {tx(link.label)}
              </a>
            ))}
            <a
              href={CLINIC.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              {tx(UI.nav.callNow)}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
