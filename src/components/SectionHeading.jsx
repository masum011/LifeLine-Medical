export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-slate-600">{subtitle}</p>
    </div>
  )
}
