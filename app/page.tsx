import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import dashboard from "@/assets/dashboard.png";
import mobile from "@/assets/mobile.png";
import pulse from "@/assets/pulse.png";

export const metadata: Metadata = {
  title: "Pulsa Health — AI triage that gets you to the right care, faster",
  description:
    "AI symptom triage that routes patients to verified nurses and clinicians in minutes. Built for Africa, scaling globally.",
  openGraph: {
    title: "Pulsa Health — AI triage for faster, safer care",
    description: "AI symptom triage that routes patients to verified clinicians in minutes.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image src={pulse} alt="" aria-hidden className="absolute -right-20 top-20 w-[700px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Beta access opening Q1 — Lagos &amp; Abuja
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] md:text-7xl">
              AI triage that gets you to the <em className="not-italic text-primary">right care</em>
              , faster.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Pulsa Health is an AI-powered triage layer that listens to your symptoms, flags risk
              in seconds, and routes you to a verified nurse or clinician — without the queue, the
              guesswork, or the cost of a wasted visit.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
              >
                Request a demo
              </Link>
              <Link
                href="/solution"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card"
              >
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
            <Image
              src={dashboard}
              alt="Pulsa Health triage dashboard with AI conversation and matched clinician"
              width={1024}
              height={1024}
              className="w-full rounded-2xl shadow-2xl"
              style={{ boxShadow: "var(--shadow-soft)" }}
              priority
            />
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
    {
      n: "$1.2B",
      l: "Lost annually to misdirected health spending in Nigeria alone",
    },
  ];
  return (
    <section id="problem" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">The problem</p>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">
          Millions of health seekers don&apos;t know{" "}
          <em className="not-italic text-primary">where to go</em>,{" "}
          <em className="not-italic text-primary">who to trust</em>, or{" "}
          <em className="not-italic text-primary">when it&apos;s urgent</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The first 30 minutes of a symptom decide the cost, the outcome, and sometimes the life.
          Today that window is wasted on Google searches, WhatsApp voice notes, and crowded waiting
          rooms.
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

function SolutionSection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Image
          src={mobile}
          alt="Pulsa Health mobile triage chat"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full max-w-md justify-self-center rounded-2xl"
        />
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-primary">The solution</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            One conversation. The right clinician. Under five minutes.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Pulsa&apos;s AI assistant asks the questions a triage nurse would, weighs your answers
            against millions of clinical patterns, then routes you to a verified human practitioner
            with the specialty, language, and availability that fits.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Conversational symptom intake in English, Pidgin, Yoruba, Hausa, Igbo, Swahili",
              "Risk-tier scoring (self-care, primary, urgent, emergency) in under 60 seconds",
              "Verified clinician marketplace with response time and license guarantees",
              "Encrypted health record that travels with you between providers",
            ].map((f) => (
              <li key={f} className="flex gap-3 text-foreground">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                  ✓
                </span>
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
    {
      t: "Symptom understanding",
      d: "Fine-tuned multilingual LLM trained on de-identified consultation transcripts and WHO clinical guidelines.",
    },
    {
      t: "Risk stratification",
      d: "Gradient-boosted ensemble scores severity across 14 axes — including red-flag symptoms most chatbots miss.",
    },
    {
      t: "Clinician matching",
      d: "Vector-search over practitioner embeddings (specialty, language, availability, patient outcomes) returns a ranked shortlist.",
    },
    {
      t: "Continuous learning",
      d: "Every confirmed diagnosis closes the loop — models retrain weekly on outcome data with full audit trails.",
    },
  ];
  return (
    <section id="ai" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-primary">AI technology</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            AI isn&apos;t a feature here. It&apos;s the entire{" "}
            <em className="not-italic text-primary">care pathway</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Four models work in concert — symptom understanding, risk stratification, clinician
            matching, and outcome learning — to deliver triage decisions that a board-certified
            doctor reviews before any user-facing action.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <div
              key={c.t}
              className="group rounded-2xl border border-border bg-background p-8 transition hover:border-primary/50"
            >
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
    {
      t: "Verified clinician network",
      d: "Licenses re-checked monthly. Patient ratings public.",
    },
    {
      t: "Risk alerts",
      d: "Real-time push when symptoms cross emergency thresholds.",
    },
    {
      t: "Portable health record",
      d: "Your history follows you, encrypted and consented.",
    },
    {
      t: "Family circles",
      d: "Triage for kids, parents, and dependents from one account.",
    },
    {
      t: "Provider dashboard",
      d: "Pre-triaged context for clinicians — no wasted appointment minutes.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Product</p>
        <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">
          What you get on day one.
        </h2>
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
    {
      n: "01",
      t: "Describe what you feel",
      d: "Type or speak symptoms in your language. The AI asks follow-ups like a triage nurse.",
    },
    {
      n: "02",
      t: "Get a risk tier",
      d: "Self-care, primary, urgent, or emergency — with a plain-language explanation.",
    },
    {
      n: "03",
      t: "Match a clinician",
      d: "Verified nurses and doctors ranked by fit, response time, and outcomes.",
    },
    {
      n: "04",
      t: "Continue safely",
      d: "Chat, call, or book in-person. Your record stays with you across visits.",
    },
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
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">
          Technology &amp; infrastructure
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Built on infrastructure clinicians can trust.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-10">
            <div className="mb-6 font-display text-sm uppercase tracking-widest text-primary">
              Cloud — AWS
            </div>
            <h3 className="font-display text-2xl font-medium">
              Secure, scalable healthcare backbone
            </h3>
            <p className="mt-4 text-muted-foreground">
              Backend APIs run on AWS Fargate behind CloudFront. Patient records live in encrypted
              RDS Postgres with field-level KMS. Amazon Bedrock powers LLM inference; S3 stores
              de-identified training data; CloudWatch and GuardDuty handle observability and
              intrusion detection.
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
            <div className="mb-6 font-display text-sm uppercase tracking-widest text-primary">
              AI acceleration — NVIDIA
            </div>
            <h3 className="font-display text-2xl font-medium">Real-time inference at the edge</h3>
            <p className="mt-4 text-muted-foreground">
              Triage decisions need to feel instant. We use NVIDIA Triton Inference Server on GPU
              instances for low-latency symptom-model serving, TensorRT for compressed on-device
              inference, and the MONAI framework for imaging features on our roadmap.
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
          Africa&apos;s digital health window is open — and it won&apos;t stay that way.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Smartphone penetration crossed 50% in our launch markets in 2024. Health insurance schemes
          are digitizing claims. Generative AI is finally fluent in our languages. The gap between
          &ldquo;I have a symptom&rdquo; and &ldquo;I see the right clinician&rdquo; is now a
          software problem — and the team that closes it first defines the category.
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
        <h2 className="font-display text-4xl font-medium md:text-5xl">
          Where we&apos;re starting.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Target users",
              d: "Urban health seekers aged 18–55, parents managing dependents, SMEs offering staff health benefits.",
            },
            {
              t: "Launch markets",
              d: "Nigeria (Lagos, Abuja, Port Harcourt) at launch. Ghana, Kenya, Rwanda, South Africa in year two.",
            },
            {
              t: "Revenue model",
              d: "Freemium consumer triage. Per-consultation revenue share with clinicians. Employer and insurer subscriptions.",
            },
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
            &ldquo;Pulsa caught a hypertensive crisis my mum dismissed as a headache. The clinician
            was on the line in under three minutes. That alone justifies the entire product.&rdquo;
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">
            — Adaeze O., pilot user, Lagos
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {
      p: "Phase 1",
      t: "Private beta",
      d: "Multilingual triage, 12 pilot clinics, NDPR audit.",
    },
    {
      p: "Phase 2",
      t: "Public launch",
      d: "Nigeria-wide rollout, clinician marketplace, voice triage.",
    },
    {
      p: "Phase 3",
      t: "Outcome models",
      d: "Weekly model retraining on confirmed diagnoses.",
    },
    {
      p: "Phase 4",
      t: "GPU scaling",
      d: "NVIDIA Triton + Bedrock for sub-100ms inference at peak.",
    },
    {
      p: "Phase 5",
      t: "Insurer integrations",
      d: "HMO claim pre-authorization via triage signal.",
    },
    {
      p: "Phase 6",
      t: "Pan-African expansion",
      d: "Ghana, Kenya, Rwanda, South Africa.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-primary">Roadmap</p>
        <h2 className="font-display text-4xl font-medium md:text-5xl">What&apos;s next.</h2>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {phases.map((p, i) => (
            <div
              key={p.p}
              className={`grid items-start gap-4 p-8 md:grid-cols-[120px_200px_1fr] ${i % 2 ? "bg-card/30" : "bg-background"}`}
            >
              <div className="font-display text-sm uppercase tracking-widest text-primary">
                {p.p}
              </div>
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
    {
      n: "Agu Kelechi",
      r: "Co-founder & CEO",
      b: "Entrepreneur and health-tech innovator building Africa's AI triage layer.",
      img: "/ceo.jpg",
      initials: "AK",
      social: {
        linkedin:
          "https://www.linkedin.com/in/kelechi-agu-068365300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/Moon_Whale1",
        facebook: "https://www.facebook.com/agu.kelechi.399",
      },
    },
    {
      n: "Tunde Bakare",
      r: "Co-founder & CTO",
      b: "Ex-Paystack, Andela. Built ML platforms at scale.",
      img: "/cto.jpg",
      initials: "TB",
      social: {},
    },
  ];
  return (
    <section id="team" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-primary">Team</p>
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Clinicians and engineers, building together.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl gap-6 md:grid-cols-2">
          {team.map((m) => (
            <div
              key={m.n}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center"
            >
              <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 bg-primary/10 shadow-lg">
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.n}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-display text-2xl font-medium text-primary">
                    {m.initials}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-medium">{m.n}</h3>
              <div className="mt-1 text-xs uppercase tracking-widest text-primary">{m.r}</div>
              <p className="mt-3 text-sm text-muted-foreground">{m.b}</p>
              {Object.keys(m.social).length > 0 && (
                <div className="mt-5 flex justify-center gap-3">
                  {m.social.linkedin && (
                    <a
                      href={m.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {m.social.twitter && (
                    <a
                      href={m.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
                      aria-label="X / Twitter"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {m.social.facebook && (
                    <a
                      href={m.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
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
          Book a 30-minute demo with a founder. We&apos;ll walk through a live triage session
          tailored to your use case — clinic, HMO, or enterprise.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
          >
            Request a demo →
          </Link>
          <Link
            href="/solution"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium hover:bg-card"
          >
            How it works
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer email?{" "}
          <a
            href="mailto:founders@pulsahealth.co"
            className="text-primary underline-offset-4 hover:underline"
          >
            founders@pulsahealth.co
          </a>
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <SolutionSection />
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
