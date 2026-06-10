import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Pulsa Health" },
      { name: "description", content: "Pulsa Health's mission to fix Africa's healthcare access crisis — the traction, the market, and the roadmap." },
      { property: "og:title", content: "Impact — Pulsa Health" },
      { property: "og:description", content: "Fixing healthcare access for 615 million Africans with AI triage." },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h3l2-6 4 12 2-6h7" />
            </svg>
          </span>
          Pulsa<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/solution" className="hover:text-foreground">Solution</Link>
          <Link to="/technology" className="hover:text-foreground">Technology</Link>
          <Link to="/impact" className="text-foreground">Impact</Link>
          <Link to="/about" className="hover:text-foreground">About</Link>
        </nav>
        <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Request Demo
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3l2-6 4 12 2-6h7" />
              </svg>
            </span>
            Pulsa<span className="text-primary">.</span>
          </Link>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pulsa Health Ltd. Lagos, Nigeria.</div>
        </div>
      </div>
    </footer>
  );
}

function Impact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border py-24" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Impact</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
              Fixing the <em className="not-italic text-primary">first 30 minutes</em>.<br />
              For everyone.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              The first 30 minutes after a symptom appears decide the cost, the outcome, and
              sometimes the life. In Africa, that window is almost always wasted. Pulsa closes it.
            </p>
          </div>
        </section>

        {/* The problem in numbers */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">The problem</p>
            <h2 className="max-w-3xl font-display text-4xl font-medium md:text-5xl">
              A healthcare crisis that costs lives and dollars every single day.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Millions of health seekers don't know where to go, who to trust, or when it's urgent.
              The result is avoidable deaths, wasted emergency capacity, and billions in misdirected spending.
            </p>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                { n: "615M", l: "Africans without reliable access to primary care" },
                { n: "8 hrs", l: "Average wait time for a non-emergency consultation in Lagos" },
                { n: "$1.2B", l: "Lost annually to misdirected health spending in Nigeria alone" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-10">
                  <div className="font-display text-6xl font-medium text-primary">{s.n}</div>
                  <p className="mt-4 text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Why now</p>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Africa's digital health window is open — and it won't stay that way.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Smartphone penetration crossed 50% in our launch markets in 2024. Health insurance
              schemes are digitizing claims. Generative AI is finally fluent in our languages. The
              gap between "I have a symptom" and "I see the right clinician" is now a software
              problem — and the team that closes it first defines the category.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Smartphone penetration", d: "Crossed 50% in Nigeria, Ghana, and Kenya in 2024. The device to deliver care is already in people's hands." },
              { t: "Digital health insurance", d: "HMOs and NHIS schemes are moving claims online — creating a data and integration layer Pulsa can sit on top of." },
              { t: "Multilingual AI", d: "LLMs are finally fluent in African languages at clinical quality. Two years ago this product wasn't technically possible." },
            ].map((w) => (
              <div key={w.t} className="rounded-2xl border border-border bg-background p-8">
                <h3 className="font-display text-xl font-medium">{w.t}</h3>
                <p className="mt-3 text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traction */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Traction</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">Early signal.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                { n: "1,400+", l: "Demo requests in 6 weeks" },
                { n: "12", l: "Pilot clinics in Lagos & Abuja" },
                { n: "3", l: "Letters of intent from HMOs" },
                { n: "MVP", l: "Live in private beta" },
              ].map((t) => (
                <div key={t.l} className="rounded-2xl border border-border bg-card p-8">
                  <div className="font-display text-5xl font-medium text-primary">{t.n}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{t.l}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-16 rounded-2xl border border-border bg-card/50 p-10">
              <p className="font-display text-2xl leading-snug">
                "Pulsa caught a hypertensive crisis my mum dismissed as a headache. The clinician
                was on the line in under three minutes. That alone justifies the entire product."
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">— Adaeze O., pilot user, Lagos</footer>
            </blockquote>
          </div>
        </section>

        {/* Market */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Market opportunity</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">Where we're starting. Where we're going.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { t: "Target users", d: "Urban health seekers aged 18–55, parents managing dependents, and SMEs offering staff health benefits. Initial focus on Nigeria's 220M population." },
                { t: "Launch markets", d: "Nigeria (Lagos, Abuja, Port Harcourt) at launch. Ghana, Kenya, Rwanda, South Africa in year two. Pan-African by 2027." },
                { t: "Revenue model", d: "Freemium consumer triage. Per-consultation revenue share with clinicians. Employer and HMO subscription plans. API licensing for health systems." },
              ].map((m) => (
                <div key={m.t} className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="font-display text-xl font-medium">{m.t}</h3>
                  <p className="mt-3 text-muted-foreground">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Roadmap</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">What's next.</h2>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              {[
                { p: "Phase 1", t: "Private beta", d: "Multilingual triage, 12 pilot clinics, NDPR compliance audit." },
                { p: "Phase 2", t: "Public launch", d: "Nigeria-wide rollout, full clinician marketplace, voice triage in three languages." },
                { p: "Phase 3", t: "Outcome models", d: "Weekly model retraining on confirmed diagnoses. CMO-reviewed deployment pipeline." },
                { p: "Phase 4", t: "GPU scaling", d: "NVIDIA Triton + Amazon Bedrock for sub-100ms inference at national scale." },
                { p: "Phase 5", t: "Insurer integrations", d: "HMO claim pre-authorization via triage signal. NHIS partnership in negotiation." },
                { p: "Phase 6", t: "Pan-African expansion", d: "Ghana, Kenya, Rwanda, South Africa. Regional language model fine-tuning." },
              ].map((p, i) => (
                <div key={p.p} className={`grid items-start gap-4 p-8 md:grid-cols-[120px_200px_1fr] ${i % 2 ? "bg-card/30" : "bg-background"}`}>
                  <div className="font-display text-sm uppercase tracking-widest text-primary">{p.p}</div>
                  <div className="font-display text-xl font-medium">{p.t}</div>
                  <div className="text-muted-foreground">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card/30 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Join the mission.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We're actively onboarding pilot clinics, HMO partners, and enterprise health benefit sponsors.
              If you want to bring Pulsa to your city or organization, let's talk.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
              Request a demo →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
