import { Search } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { MEDICINE_CATEGORIES } from '../../data/medicines'
import { UI } from '../../i18n/ui'
import { INPUT_CLASS } from '../appointments/BookingStep'

const STOCK_OPTIONS = [
  { value: 'all', label: UI.medicines.allStock },
  { value: 'in', label: UI.medicines.inStock },
  { value: 'low', label: UI.medicines.lowStock },
  { value: 'out', label: UI.medicines.outOfStock },
]

const SORT_OPTIONS = [
  { value: 'default', label: UI.medicines.sortDefault },
  { value: 'price-asc', label: UI.medicines.sortPriceAsc },
  { value: 'price-desc', label: UI.medicines.sortPriceDesc },
]

function chipClass(active) {
  return `shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    active
      ? 'bg-teal-600 text-white shadow-sm'
      : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-teal-50 hover:text-teal-700'
  }`
}

export default function MedicineFilters({ filters, onChange }) {
  const { tx } = useLanguage()
  const set = (field) => (value) => onChange({ ...filters, [field]: value })

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
        <label className="relative">
          <span className="sr-only">{tx(UI.medicines.search)}</span>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={filters.query}
            onChange={(event) => set('query')(event.target.value)}
            placeholder={tx(UI.medicines.search)}
            className={`${INPUT_CLASS} pl-11`}
          />
        </label>

        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          {tx(UI.medicines.stock)}
          <select
            value={filters.stock}
            onChange={(event) => set('stock')(event.target.value)}
            className={`${INPUT_CLASS} py-3`}
          >
            {STOCK_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {tx(option.label)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          {tx(UI.medicines.sort)}
          <select
            value={filters.sort}
            onChange={(event) => set('sort')(event.target.value)}
            className={`${INPUT_CLASS} py-3`}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {tx(option.label)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-slate-700">{tx(UI.medicines.categories)}</p>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          <button type="button" onClick={() => set('category')('all')} className={chipClass(filters.category === 'all')}>
            {tx(UI.medicines.allCategories)}
          </button>
          {MEDICINE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => set('category')(category.id)}
              className={chipClass(filters.category === category.id)}
            >
              {tx(category)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
