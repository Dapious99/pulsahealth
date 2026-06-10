import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Our Solution — Pulsa Health" },
      { name: "description", content: "How Pulsa Health's AI triage platform works — from symptom intake to verified clinician match in under five minutes." },
      { property: "og:title", content: "Our Solution — Pulsa Health" },
      { property: "og:description", content: "AI triage that routes you to the right clinician in under five minutes." },
      { property: "og:url", content: "/solution" },
    ],
    links: [{ rel: "canonical", href: "/solution" }],
  }),
  component: Solution,
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
          <Link to="/solution" className="text-foreground">Solution</Link>
          <Link to="/technology" className="hover:text-foreground">Technology</Link>
          <Link to="/impact" className="hover:text-foreground">Impact</Link>
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

const steps = [
  {
    n: "01",
    t: "Describe what you feel",
    d: "Open Pulsa and type or speak your symptoms in any language — English, Pidgin, Yoruba, Hausa, Igbo, or Swahili. The AI responds like a triage nurse: asking the right follow-up questions to build a complete clinical picture.",
    detail: "Our conversational engine is built on a multilingual LLM fine-tuned on de-identified consultation transcripts and WHO clinical guidelines. It knows which questions matter — chief complaint, onset, duration, severity, red flags — and asks only those.",
  },
  {
    n: "02",
    t: "Receive a risk tier in seconds",
    d: "Within 60 seconds of your last answer, Pulsa assigns a risk tier: Self-care, Primary, Urgent, or Emergency. Each tier comes with a plain-language explanation you can share with family or a pharmacist.",
    detail: "A gradient-boosted ensemble model scores severity across 14 clinical axes — including 23 red-flag patterns that most consumer health chatbots miss entirely. The model is reviewed and signed off by our CMO before any user-facing output.",
  },
  {
    n: "03",
    t: "Get matched to a verified clinician",
    d: "Pulsa searches its verified practitioner network using vector similarity — matching on specialty, language, real-time availability, and historical patient outcomes — then presents a ranked shortlist.",
    detail: "Clinician embeddings are updated daily. Matching latency is under 200ms. Every clinician on the platform has passed license verification, a background check, and a monthly active-status review.",
  },
  {
    n: "04",
    t: "Continue care safely",
    d: "Connect via secure chat, voice call, or schedule an in-person visit. Your encrypted health record — symptom history, triage outputs, clinician notes — travels with you to every future consultation.",
    detail: "Records are encrypted at rest (AES-256 + AWS KMS) and in transit (TLS 1.3). You own your data. You can export, share, or delete it at any time.",
  },
];

const differentiators = [
  { t: "Language-first", d: "Built for African languages from day one — not retrofitted. Pidgin, Yoruba, Hausa, Igbo, Swahili alongside English." },
  { t: "Clinical depth", d: "Not a symptom checker. A triage system trained on real consultation data and reviewed by licensed clinicians." },
  { t: "Speed guarantee", d: "Risk tier in under 60 seconds. Clinician matched and on the line in under five minutes." },
  { t: "Privacy-by-design", d: "NDPR and HIPAA-aligned. De-identified training data. Field-level encryption. No data selling, ever." },
  { t: "Human in the loop", d: "AI flags risk; humans make clinical decisions. Every triage output is reviewed before action." },
  { t: "Portable records", d: "One encrypted health record across every Pulsa consultation — no more retelling your history." },
];

function Solution() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border py-24" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Our solution</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
              One conversation.<br />
              The <em className="not-italic text-primary">right clinician</em>.<br />
              Under five minutes.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Pulsa's AI triage engine listens to your symptoms, scores your risk across 14 clinical
              axes, and routes you to a verified practitioner who speaks your language — all before
              you'd finish filling out a hospital registration form.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
                Request a demo →
              </Link>
              <Link to="/technology" className="rounded-full border border-border px-8 py-3.5 text-sm font-medium hover:bg-card">
                See the technology
              </Link>
            </div>
          </div>
        </section>

        {/* How it works step-by-step */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">How it works</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">Four steps, built for the real world.</h2>
            <div className="mt-16 space-y-16">
              {steps.map((s, i) => (
                <div key={s.n} className={`grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="font-display text-6xl font-medium text-primary/40">{s.n}</div>
                    <h3 className="mt-4 font-display text-3xl font-medium">{s.t}</h3>
                    <p className="mt-4 text-lg text-muted-foreground">{s.d}</p>
                  </div>
                  <div className={`rounded-2xl border border-border bg-card/50 p-8 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="mb-3 text-xs uppercase tracking-widest text-primary">Under the hood</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Why Pulsa is different</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">
              Built for Africa. Rigorous enough for anywhere.
            </h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.t} className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="font-display text-xl font-medium">{d.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Who it's for</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">One platform, three entry points.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { t: "Health seekers", d: "Urban adults aged 18–55, parents managing dependents, and anyone who's ever Googled symptoms at 2am and still didn't know what to do." },
                { t: "Clinicians", d: "Verified nurses and doctors who want more patients, less paperwork, and a pre-triaged context before every consultation." },
                { t: "Employers & HMOs", d: "Companies offering staff health benefits and insurers looking to reduce avoidable emergency claims through earlier intervention." },
              ].map((u) => (
                <div key={u.t} className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-2xl font-medium">{u.t}</h3>
                  <p className="mt-4 text-muted-foreground">{u.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card/30 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Ready to see it in action?</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a 30-minute demo with a founder. We'll walk through a live triage session and answer your questions.
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
