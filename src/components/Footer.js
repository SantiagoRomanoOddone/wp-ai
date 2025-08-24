import Container from "./Container";

const brandGradient = "bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400";

export default function Footer({ onNavigate, t }) {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded-xl ${brandGradient}`} />
            <div className="text-lg font-semibold text-slate-900">SimpleCode</div>
          </div>
          <p className="mt-3 text-sm text-slate-600">{t.footer.description}</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{t.footer.companyTitle}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><button onClick={() => onNavigate("home")} className="hover:text-sky-700">{t.footer.home}</button></li>
            <li><button onClick={() => onNavigate("services")} className="hover:text-sky-700">{t.footer.services}</button></li>
            <li><button onClick={() => onNavigate("team")} className="hover:text-sky-700">{t.footer.team}</button></li>
            <li><button onClick={() => onNavigate("contact")} className="hover:text-sky-700">{t.footer.contact}</button></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{t.footer.contactTitle}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{t.footer.emailLabel}: <a className="text-sky-700 hover:underline" href="mailto:contact@simplecode.ai">contact@simplecode.ai</a></li>
            <li>{t.footer.location}</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{t.footer.followTitle}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-sky-700" href="https://www.linkedin.com/in/santiagoromanooddone/" target="_blank" rel="noreferrer">{t.footer.linkedin}</a></li>
            <li><a className="hover:text-sky-700" href="https://www.santiagoro.com" target="_blank" rel="noreferrer">{t.footer.website}</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} SimpleCode. {t.footer.rights}
      </Container>
    </footer>
  );
}
