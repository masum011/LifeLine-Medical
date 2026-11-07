import { useMemo, useState } from 'react'
import MedicineCard from '../components/medicines/MedicineCard'
import MedicineFilters from '../components/medicines/MedicineFilters'
import { useLanguage } from '../context/LanguageContext'
import { MEDICINES } from '../data/medicines'
import { UI } from '../i18n/ui'

const DEFAULT_FILTERS = { query: '', category: 'all', stock: 'all', sort: 'default' }

function applyFilters(medicines, { query, category, stock, sort }) {
  const term = query.trim().toLowerCase()
  const matches = medicines.filter(
    (medicine) =>
      (category === 'all' || medicine.category === category) &&
      (stock === 'all' || medicine.stock === stock) &&
      (term === '' || `${medicine.name} ${medicine.generic}`.toLowerCase().includes(term)),
  )

  if (sort === 'price-asc') return [...matches].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') return [...matches].sort((a, b) => b.price - a.price)
  return matches
}

export default function MedicinesPage() {
  const { tx } = useLanguage()
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const results = useMemo(() => applyFilters(MEDICINES, filters), [filters])
  const filtersActive = JSON.stringify(filters) !== JSON.stringify(DEFAULT_FILTERS)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {tx(UI.medicines.title)}
        </h1>
        <p className="mt-3 text-base text-slate-600">{tx(UI.medicines.subtitle)}</p>
      </div>

      <MedicineFilters filters={filters} onChange={setFilters} />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{results.length}</span> {tx(UI.medicines.resultCount)}
        </p>
        {filtersActive && (
          <button
            type="button"
            onClick={() => setFilters(DEFAULT_FILTERS)}
            className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
          >
            {tx(UI.medicines.clearFilters)}
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
          {tx(UI.medicines.noResults)}
        </div>
      )}

      <p className="mt-10 rounded-lg bg-slate-100 p-4 text-sm text-slate-600">{tx(UI.medicines.priceNote)}</p>
    </div>
  )
}
