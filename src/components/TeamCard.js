
export default function TeamCard({ name, role, blurb, links = {} }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-sky-100" />
        <div>
          <div className="text-base font-semibold text-slate-900">{name}</div>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">{blurb}</p>
      <div className="mt-4 flex gap-3">
        {links.linkedin && (
          <a className="text-sm font-medium text-sky-700 hover:underline" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        )}
        {links.website && (
          <a className="text-sm font-medium text-sky-700 hover:underline" href={links.website} target="_blank" rel="noreferrer">
            Website ↗
          </a>
        )}
      </div>
    </div>
  );
}