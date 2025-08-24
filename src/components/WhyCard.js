import Icon from "./Icon";

export default function WhyCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="shield" /></div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
    </div>
  );
}