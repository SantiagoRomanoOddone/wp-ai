import Icon from "./Icon";


export default function ServiceCard({ icon, title, points }) {
  return (
    <div className="group rounded-2xl border border-slate-200 p-6 transition hover:border-sky-200 hover:shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name={icon} /></div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

