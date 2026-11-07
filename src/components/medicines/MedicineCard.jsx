import { AlertTriangle, CheckCircle2, Pill, XCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { MEDICINE_CATEGORIES } from '../../data/medicines'
import { UI } from '../../i18n/ui'

export const STOCK_META = {
  in: {
    label: UI.medicines.inStock,
    Icon: CheckCircle2,
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  low: {
    label: UI.medicines.lowStock,
    Icon: AlertTriangle,
    badge: 'bg-amber-50 text-amber-800 ring-amber-200',
  },
  out: {
    label: UI.medicines.outOfStock,
    Icon: XCircle,
    badge: 'bg-rose-50 text-rose-700 ring-rose-200',
  },
}

export default function MedicineCard({ medicine }) {
  const { tx, lang } = useLanguage()
  const category = MEDICINE_CATEGORIES.find((item) => item.id === medicine.category)
  const stock = STOCK_META[medicine.stock]
  const StockIcon = stock.Icon

  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Pill size={20} />
        </span>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${stock.badge}`}>
          <StockIcon size={13} />
          {tx(stock.label)}
        </span>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-teal-700">{tx(category)}</p>
      <h3 className="mt-1 text-base font-semibold leading-snug text-slate-900">{medicine.name}</h3>
      <p className="mt-1 text-sm text-slate-600">
        {tx(UI.medicines.generic)}: {medicine.generic}
      </p>
      <p className="mt-1 text-sm text-slate-500">
        {tx(UI.medicines.pack)}: {tx(medicine.pack)}
      </p>

      <div className="mt-auto flex items-end justify-between border-t border-slate-200 pt-4 mt-5">
        <div>
          <p className="text-xs text-slate-500">{tx(UI.medicines.price)}</p>
          <p className="text-xl font-bold text-slate-900">
            &#2547; {medicine.price.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')}
          </p>
        </div>
      </div>
    </article>
  )
}
