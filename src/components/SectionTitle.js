import Pill from "./Pill";


export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && <Pill>{kicker}</Pill>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}