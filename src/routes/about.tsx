import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pulsa Health" },
      { name: "description", content: "The team, mission, and story behind Pulsa Health — Africa's AI-powered triage platform." },
      { property: "og:title", content: "About Pulsa Health" },
      { property: "og:description", content: "The clinicians and engineers building Africa's AI triage layer." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
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
          <Link to="/impact" className="hover:text-foreground">Impact</Link>
          <Link to="/about" className="text-foreground">About</Link>
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

const team = [
  {
    n: "Dr. Amara Okeke",
    r: "Co-founder & CEO",
    b: "Former lead physician at Reddington Hospital, Lagos. MBBS, University of Lagos. 11 years in clinical emergency medicine before founding Pulsa. Saw hundreds of preventable outcomes caused by delayed triage decisions.",
    i: "AO",
  },
  {
    n: "Tunde Bakare",
    r: "Co-founder & CTO",
    b: "Former principal engineer at Paystack and Andela. Built distributed systems serving millions of transactions daily. Led the technical team that scaled Andela's engineering assessment platform to 40,000+ developers.",
    i: "TB",
  },
  {
    n: "Dr. Ifeoma Eze",
    r: "Chief Medical Officer",
    b: "10 years in WHO digital-health policy. PhD from LSHTM. Advised on NDPR health data framework. Oversees Pulsa's clinical review board and ensures every AI output is medically defensible.",
    i: "IE",
  },
  {
    n: "Samuel Adeyemi",
    r: "Head of AI",
    b: "Former ML engineer at Google Health. Specialty in NLP for low-resource languages. Published research on Yoruba and Hausa clinical NLP at ACL 2023. Leads Pulsa's model development and training pipeline.",
    i: "SA",
  },
  {
    n: "Ngozi Okonkwo",
    r: "Head of Partnerships",
    b: "Former head of provider relations at Hygeia HMO. Deep relationships across Nigeria's HMO, hospital, and NHIS landscape. Leads Pulsa's clinician onboarding and insurer partnership programme.",
    i: "NO",
  },
  {
    n: "Emeka Nwosu",
    r: "Lead Engineer",
    b: "Full-stack engineer with 8 years building healthcare SaaS. Former CTO of MedTrack Nigeria. Owns Pulsa's AWS infrastructure, security architecture, and API platform.",
    i: "EN",
  },
];

const values = [
  { t: "Clinical honesty", d: "We never overstate what AI can do. Every triage output carries a confidence score and a recommendation to see a human. AI flags risk — clinicians make decisions." },
  { t: "Language equity", d: "Healthcare in your first language isn't a premium feature. Pulsa ships every major feature in English, Pidgin, Yoruba, Hausa, Igbo, and Swahili simultaneously." },
  { t: "Privacy by default", d: "Health data is not an asset to monetise. We collect the minimum necessary, encrypt everything, and give you full control. No data selling, ever." },
  { t: "Speed as safety", d: "In triage, slowness is a clinical risk. Every engineering decision is measured against latency impact. Sub-60-second risk scoring is a product commitment." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border py-24" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">About us</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
              Clinicians and engineers,<br />
              <em className="not-italic text-primary">building together</em>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Pulsa Health was founded by a doctor who watched preventable outcomes happen in an
              emergency ward, and an engineer who believed software could stop them. That's still
              what drives every decision we make.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-primary">Our mission</p>
                <h2 className="font-display text-4xl font-medium md:text-5xl">
                  Connect every health seeker to the right care, in the right time, in their language.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  We're building the triage layer that should have existed ten years ago — the one
                  that works in Yoruba, understands the difference between a headache and a hypertensive
                  crisis, and gets you to a verified clinician before the window closes.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  We started in Lagos because it's where the need is sharpest and the infrastructure
                  is most ready. We're scaling because the problem is everywhere.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { n: "2024", l: "Pulsa Health incorporated, Lagos, Nigeria" },
                  { n: "Jan 2025", l: "First clinical advisor board formed" },
                  { n: "Mar 2025", l: "Private beta launched with 12 pilot clinics" },
                  { n: "Jun 2025", l: "1,400+ demo requests received" },
                  { n: "Q1 2026", l: "Public beta opening — Lagos & Abuja" },
                ].map((e) => (
                  <div key={e.n} className="flex gap-6 rounded-2xl border border-border bg-card p-6">
                    <div className="shrink-0 font-display text-sm text-primary">{e.n}</div>
                    <div className="text-sm text-muted-foreground">{e.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Team</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">
              The people building Pulsa.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <div key={m.n} className="rounded-2xl border border-border bg-background p-8">
                  <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary/20 font-display text-xl font-medium text-primary">
                    {m.i}
                  </div>
                  <h3 className="font-display text-xl font-medium">{m.n}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-primary">{m.r}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Values</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">What we believe.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-2xl font-medium">{v.t}</h3>
                  <p className="mt-4 text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Company</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">The basics.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { t: "Legal name", d: "Pulsa Health Ltd\nIncorporated in Lagos, Nigeria\nRC Number: [pending]" },
                { t: "Headquarters", d: "Yaba, Lagos, Nigeria\nAfrican silicon valley — home to Paystack, Flutterwave, and the next generation of African tech." },
                { t: "Stage", d: "Pre-seed. Private beta live.\nActively onboarding pilot clinics, HMO partners, and enterprise health benefit sponsors." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="font-display text-xl font-medium">{c.t}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Work with us.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We're a small team building something that matters. If you're a clinician, engineer,
              HMO partner, or investor who wants to be part of it — reach out.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
              Get in touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
