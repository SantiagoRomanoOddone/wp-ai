import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Icon from "../components/Icon";



export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = encodeURIComponent(`Inquiry from ${data.name || "Website"}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`);
    window.location.href = `mailto:contact@simplecode.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          kicker="Contact"
          title="Let’s talk about your project"
          subtitle="Tell us what you’re trying to achieve. We’ll reply within 1 business day."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="mail" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <a href="mailto:contact@simplecode.ai" className="text-sm text-sky-700 hover:underline">contact@simplecode.ai</a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="phone" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Phone</div>
                <span className="text-sm text-slate-600">+54 (11) 0000‑0000</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="map" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Based in</div>
                <span className="text-sm text-slate-600">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Budget (optional)</label>
                <select name="budget" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring">
                  <option value="">Select…</option>
                  <option>Under $2,000</option>
                  <option>$2,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-slate-700">Message</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" placeholder="Tell us about your goals and timeline…" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-slate-500">By submitting, you agree to our processing of your information for the purpose of responding.</p>
              <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
                Send message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}