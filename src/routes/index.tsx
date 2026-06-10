import { createFileRoute, Link } from "@tanstack/react-router";
import dashboard from "@/assets/dashboard.png";
import mobile from "@/assets/mobile.png";
import pulse from "@/assets/pulse.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulsa Health — AI triage that gets you to the right care, faster" },
      { name: "description", content: "AI symptom triage that routes patients to verified nurses and clinicians in minutes. Built for Africa, scaling globally." },
      { property: "og:title", content: "Pulsa Health — AI triage for faster, safer care" },
      { property: "og:description", content: "AI symptom triage that routes patients to verified clinicians in minutes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pulsa Health",
        url: "/",
        description: "AI-powered health triage and clinician matching.",
      }),
    }],
  }),
  component: Index,
});

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h3l2-6 4 12 2-6h7" />
        </svg>
      </span>
      Pulsa<span className="text-primary">.</span>
    </Link>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/solution" className="hover:text-foreground">Solution</Link>
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

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <img src={pulse} alt="" className="absolute -right-20 top-20 w-[700px]" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Beta access opening Q1 — Lagos & Abuja
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] md:text-7xl">
              AI triage that gets you to the <em className="text-primary not-italic">right care</em>, faster.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Pulsa Health is an AI-powered triage layer that listens to your symptoms,
              flags risk in seconds, and routes you to a verified nurse or clinician — without
              the queue, the guesswork, or the cost of a wasted visit.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
                Request a demo
              </Link>
              <Link to="/solution" className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card">
                See how it works →
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span>HIPAA-aligned</span>
              <span>·</span>
              <span>NDPR compliant</span>
              <span>·</span>
              <span>Built on AWS</span>
              <span>·</span>
              <span>Powered by NVIDIA</span>
            </div>
          </div>
          <div className="relative">
            <img src={dashboard} alt="Pulsa Health triage dashboard with AI conversation and matched clinician" width={1024} height={1024} className="w-full rounded-2xl shadow-2xl" style={{ boxShadow: "var(--shadow-soft)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const stats = [
    { n: "615M", l: "Africans without reliable primary care access" },
    { n: "8 hrs", l: "Average wait for non-emergency consultation" },
    { n: "$1.2B", l: "Lost annually to misdirected health spending in Nigeria alone" },
  ];
  return (
    <section id="problem" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">The problem</p>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">
          Millions of health seekers don't know <em className="not-italic text-primary">where to go</em>, <em className="not-italic text-primary">who to trust</em>, or <em className="not-italic text-primary">when it's urgent</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The first 30 minutes of a symptom decide the cost, the outcome, and sometimes the life.
          Today that window is wasted on Google searches, WhatsApp voice notes, and crowded waiting rooms.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-background p-8">
              <div className="font-display text-5xl font-medium text-primary">{s.n}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <img src={mobile} alt="Pulsa Health mobile triage chat" width={1024} height={1024} loading="lazy" className="w-full max-w-md justify-self-center rounded-2xl" />
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-primary">The solution</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            One conversation. The right clinician. Under five minutes.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Pulsa's AI assistant asks the questions a triage nurse would, weighs your answers against
            millions of clinical patterns, then routes you to a verified human practitioner with the
            specialty, language, and availability that fits.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Conversational symptom intake in English, Pidgin, Yoruba, Hausa, Igbo, Swahili",
              "Risk-tier scoring (self-care, primary, urgent, emergency) in under 60 seconds",
              "Verified clinician marketplace with response time and license guarantees",
              "Encrypted health record that travels with you between providers",
            ].map((f) => (
              <li key={f} className="flex gap-3 text-foreground">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AI() {
  const cards = [
    { t: "Symptom understanding", d: "Fine-tuned multilingual LLM trained on de-identified consultation transcripts and WHO clinical guidelines." },
    { t: "Risk stratification", d: "Gradient-boosted ensemble scores severity across 14 axes — including red-flag symptoms most chatbots miss." },
    { t: "Clinician matching", d: "Vector-search over practitioner embeddings (specialty, language, availability, patient outcomes) returns a ranked shortlist." },
    { t: "Continuous learning", d: "Every confirmed diagnosis closes the loop — models retrain weekly on outcome data with full audit trails." },
  ];
  return (
    <section id="ai" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-primary">AI technology</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            AI isn't a feature here. It's the entire <em className="not-italic text-primary">care pathway</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Four models work in concert — symptom understanding, risk stratification, clinician
            matching, and outcome learning — to deliver triage decisions that a board-certified
            doctor reviews before any user-facing action.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={c.t} className="group rounded-2xl border border-border bg-background p-8 transition hover:border-primary/50">
              <div className="mb-4 font-display text-sm text-primary">0{i + 1}</div>
              <h3 className="font-display text-2xl font-medium">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { t: "24/7 AI triage", d: "Available any hour, any device, any language." },
    { t: "Verified clinician network", d: "Licenses re-checked monthly. Patient ratings public." },
    { t: "Risk alerts", d: "Real-time push when symptoms cross emergency thresholds." },
    { t: "Portable health record", d: "Your history follows you, encrypted and consented." },
    { t: "Family circles", d: "Triage for kids, parents, and dependents from one account." },
    { t: "Provider dashboard", d: "Pre-triaged context for clinicians — no wasted appointment minutes." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Product</p>
        <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">What you get on day one.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {items.map((f) => (
            <div key={f.t} className="bg-background p-8">
              <h3 className="font-display text-xl font-medium">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Describe what you feel", d: "Type or speak symptoms in your language. The AI asks follow-ups like a triage nurse." },
    { n: "02", t: "Get a risk tier", d: "Self-care, primary, urgent, or emergency — with a plain-language explanation." },
    { n: "03", t: "Match a clinician", d: "Verified nurses and doctors ranked by fit, response time, and outcomes." },
    { n: "04", t: "Continue safely", d: "Chat, call, or book in-person. Your record stays with you across visits." },
  ];
  return (
    <section id="how" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">How it works</p>
        <h2 className="font-display text-4xl font-medium md:text-5xl">Four steps. Five minutes.</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-display text-5xl font-medium text-primary">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section id="tech" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Technology & infrastructure</p>
        <h2 className="max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Built on infrastructure clinicians can trust.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-10">
            <div className="mb-6 font-display text-sm uppercase tracking-widest text-primary">Cloud — AWS</div>
            <h3 className="font-display text-2xl font-medium">Secure, scalable healthcare backbone</h3>
            <p className="mt-4 text-muted-foreground">
              Backend APIs run on AWS Fargate behind CloudFront. Patient records live in encrypted
              RDS Postgres with field-level KMS. Amazon Bedrock powers LLM inference; S3 stores
              de-identified training data; CloudWatch and GuardDuty handle observability and
              intrusion detection. Authentication is via Cognito with MFA.
            </p>
            <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
              <li>• Bedrock — managed LLM inference</li>
              <li>• RDS + KMS — encrypted patient data</li>
              <li>• Lambda + ECS — async clinical workflows</li>
              <li>• CloudFront + WAF — global edge delivery</li>
              <li>• CloudWatch — full audit logging</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10">
            <div className="mb-6 font-display text-sm uppercase tracking-widest text-primary">AI acceleration — NVIDIA</div>
            <h3 className="font-display text-2xl font-medium">Real-time inference at the edge</h3>
            <p className="mt-4 text-muted-foreground">
              Triage decisions need to feel instant. We use NVIDIA Triton Inference Server on
              GPU instances for low-latency symptom-model serving, TensorRT for compressed
              on-device inference, and the MONAI framework for any imaging features on our
              roadmap. NIM microservices keep deployment portable across clouds.
            </p>
            <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
              <li>• Triton — multi-model GPU serving</li>
              <li>• TensorRT — sub-100ms inference</li>
              <li>• NeMo — multilingual speech for voice triage</li>
              <li>• MONAI — clinical imaging (roadmap)</li>
              <li>• NIM — portable, secure model deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
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
    </section>
  );
}

function Market() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Market</p>
        <h2 className="font-display text-4xl font-medium md:text-5xl">Where we're starting.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Target users", d: "Urban health seekers aged 18–55, parents managing dependents, SMEs offering staff health benefits." },
            { t: "Launch markets", d: "Nigeria (Lagos, Abuja, Port Harcourt) at launch. Ghana, Kenya, Rwanda, South Africa in year two." },
            { t: "Revenue model", d: "Freemium consumer triage. Per-consultation revenue share with clinicians. Employer and insurer subscriptions." },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-medium">{m.t}</h3>
              <p className="mt-3 text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Traction() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Traction</p>
        <h2 className="font-display text-4xl font-medium md:text-5xl">Early signal.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "1,400+", l: "Waitlist signups in 6 weeks" },
            { n: "12", l: "Pilot clinics in Lagos & Abuja" },
            { n: "3", l: "Letters of intent from HMOs" },
            { n: "MVP", l: "Live in private beta" },
          ].map((t) => (
            <div key={t.l} className="rounded-2xl border border-border bg-background p-8">
              <div className="font-display text-4xl font-medium text-primary">{t.n}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t.l}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 rounded-2xl border border-border bg-background p-10">
          <p className="font-display text-2xl leading-snug">
            "Pulsa caught a hypertensive crisis my mum dismissed as a headache. The clinician
            was on the line in under three minutes. That alone justifies the entire product."
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">— Adaeze O., pilot user, Lagos</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    { p: "Phase 1", t: "Private beta", d: "Multilingual triage, 12 pilot clinics, NDPR audit." },
    { p: "Phase 2", t: "Public launch", d: "Nigeria-wide rollout, clinician marketplace, voice triage." },
    { p: "Phase 3", t: "Outcome models", d: "Weekly model retraining on confirmed diagnoses." },
    { p: "Phase 4", t: "GPU scaling", d: "NVIDIA Triton + Bedrock for sub-100ms inference at peak." },
    { p: "Phase 5", t: "Insurer integrations", d: "HMO claim pre-authorization via triage signal." },
    { p: "Phase 6", t: "Pan-African expansion", d: "Ghana, Kenya, Rwanda, South Africa." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Roadmap</p>
        <h2 className="font-display text-4xl font-medium md:text-5xl">What's next.</h2>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {phases.map((p, i) => (
            <div key={p.p} className={`grid items-start gap-4 p-8 md:grid-cols-[120px_200px_1fr] ${i % 2 ? "bg-card/30" : "bg-background"}`}>
              <div className="font-display text-sm uppercase tracking-widest text-primary">{p.p}</div>
              <div className="font-display text-xl font-medium">{p.t}</div>
              <div className="text-muted-foreground">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { n: "Dr. Amara Okeke", r: "Co-founder & CEO", b: "Former lead physician, Reddington Hospital. MBBS, Lagos.", i: "AO" },
    { n: "Tunde Bakare", r: "Co-founder & CTO", b: "Ex-Paystack, Andela. Built ML platforms at scale.", i: "TB" },
    { n: "Dr. Ifeoma Eze", r: "Chief Medical Officer", b: "10 years in WHO digital-health policy. PhD, LSHTM.", i: "IE" },
    { n: "Samuel Adeyemi", r: "Head of AI", b: "Former Google Health. NLP for low-resource languages.", i: "SA" },
  ];
  return (
    <section id="team" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Team</p>
        <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">
          Clinicians and engineers, building together.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.n} className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-primary/20 font-display text-xl text-primary">{m.i}</div>
              <h3 className="font-display text-lg font-medium">{m.n}</h3>
              <div className="text-xs uppercase tracking-widest text-primary">{m.r}</div>
              <p className="mt-3 text-sm text-muted-foreground">{m.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Get started</p>
        <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
          Ready to see Pulsa in action?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Book a 30-minute demo with a founder. We'll walk through a live triage session
          tailored to your use case — clinic, HMO, or enterprise.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
            Request a demo →
          </Link>
          <Link to="/solution" className="rounded-full border border-border px-8 py-3.5 text-sm font-medium hover:bg-card">
            How it works
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer email? <a href="mailto:founders@pulsahealth.co" className="text-primary underline-offset-4 hover:underline">founders@pulsahealth.co</a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI triage and care navigation for the next billion health seekers.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Product</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solution" className="hover:text-primary">Solution</Link></li>
              <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
              <li><Link to="/impact" className="hover:text-primary">Impact</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><a href="mailto:hello@pulsahealth.co" className="hover:text-primary">hello@pulsahealth.co</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-primary">Privacy policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms of use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Pulsa Health Ltd. Registered in Lagos, Nigeria.</div>
          <div>Pulsa Health does not replace professional medical advice. In emergencies, call your local emergency number.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <AI />
        <Features />
        <HowItWorks />
        <Tech />
        <WhyNow />
        <Market />
        <Traction />
        <Roadmap />
        <Team />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
