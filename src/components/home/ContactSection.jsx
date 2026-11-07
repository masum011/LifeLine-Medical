import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { CLINIC, WHATSAPP_NUMBER } from '../../data/clinic'
import { UI } from '../../i18n/ui'
import SectionHeading from '../SectionHeading'

const CHANNELS = [
  {
    icon: Phone,
    label: UI.contact.call,
    value: CLINIC.phone,
    href: CLINIC.phoneHref,
  },
  {
    icon: MessageCircle,
    label: UI.contact.whatsapp,
    value: CLINIC.phone,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
  },
  {
    icon: Mail,
    label: UI.contact.email,
    value: CLINIC.email,
    href: `mailto:${CLINIC.email}`,
  },
]

export default function ContactSection() {
  const { tx } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        id="contact"
        title={tx(UI.sections.contact)}
        subtitle={tx(UI.sections.contactSub)}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label.en}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white">
              <Icon size={20} />
            </span>
            <span>
              <span className="block text-sm font-medium text-slate-500">{tx(label)}</span>
              <span className="mt-1 block font-semibold text-slate-900">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 grid gap-6 rounded-2xl bg-slate-900 p-6 text-white md:grid-cols-2 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal-300">
            <MapPin size={20} />
          </span>
          <div>
            <p className="text-sm font-medium text-slate-300">{tx(UI.contact.visit)}</p>
            <p className="mt-1 font-semibold">{tx(CLINIC.address)}</p>
            <a
              href={CLINIC.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-teal-300 underline-offset-4 hover:underline"
            >
              {tx(UI.contact.directions)}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal-300">
            <Clock size={20} />
          </span>
          <div>
            <p className="text-sm font-medium text-slate-300">{tx(UI.pharmacy.hours)}</p>
            <p className="mt-1 font-semibold">{tx(CLINIC.hours)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
