import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/nav";
import { FooterSimple } from "../components/footer";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Pulsa Health's mission to fix Africa's healthcare access crisis — the traction, the market, and the roadmap.",
  openGraph: {
    title: "Impact — Pulsa Health",
    description: "Fixing healthcare access for 615 million Africans with AI triage.",
    url: "/impact",
  },
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
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

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">The problem</p>
            <h2 className="max-w-3xl font-display text-4xl font-medium md:text-5xl">
              A healthcare crisis that costs lives and dollars every single day.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Millions of health seekers don&apos;t know where to go, who to trust, or when it&apos;s
              urgent. The result is avoidable deaths, wasted emergency capacity, and billions in
              misdirected spending.
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

        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Why now</p>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Africa&apos;s digital health window is open — and it won&apos;t stay that way.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Smartphone penetration crossed 50% in our launch markets in 2024. Health insurance
              schemes are digitizing claims. Generative AI is finally fluent in our languages. The
              gap between &ldquo;I have a symptom&rdquo; and &ldquo;I see the right clinician&rdquo;
              is now a software problem — and the team that closes it first defines the category.
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
                &ldquo;Pulsa caught a hypertensive crisis my mum dismissed as a headache. The
                clinician was on the line in under three minutes. That alone justifies the entire
                product.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">— Adaeze O., pilot user, Lagos</footer>
            </blockquote>
          </div>
        </section>

        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Market opportunity</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Where we&apos;re starting. Where we&apos;re going.
            </h2>
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

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Roadmap</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">What&apos;s next.</h2>
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

        <section className="border-t border-border bg-card/30 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Join the mission.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re actively onboarding pilot clinics, HMO partners, and enterprise health
              benefit sponsors. If you want to bring Pulsa to your city or organization, let&apos;s talk.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90">
              Request a demo →
            </Link>
          </div>
        </section>
      </main>
      <FooterSimple />
    </div>
  );
}
