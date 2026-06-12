import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components/nav";
import { FooterSimple } from "../components/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "The team, mission, and story behind Pulsa Health — Africa's AI-powered triage platform.",
  openGraph: {
    title: "About Pulsa Health",
    description: "The clinicians and engineers building Africa's AI triage layer.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const team = [
  {
    n: "Agu Kelechi",
    r: "Co-founder & CEO",
    b: "Entrepreneur and health-tech innovator focused on closing the healthcare access gap across Sub-Saharan Africa through AI-driven solutions. Founded Pulsa Health to ensure no patient loses time — or life — to a broken triage system.",
    img: "/ceo.jpg",
    initials: "AK",
    social: {
      linkedin:
        "https://www.linkedin.com/in/kelechi-agu-068365300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/agu.kelechi.399",
      twitter: "https://x.com/Moon_Whale1",
    },
  },
  {
    n: "Tunde Bakare",
    r: "Co-founder & CTO",
    b: "Built distributed systems serving millions of transactions daily. Led the technical team that scaled several AI and financial platforms.",
    img: "/cto.jpg",
    initials: "TB",
    social: {},
  },
];

const values = [
  {
    t: "Clinical honesty",
    d: "We never overstate what AI can do. Every triage output carries a confidence score and a recommendation to see a human. AI flags risk — clinicians make decisions.",
  },
  {
    t: "Language equity",
    d: "Healthcare in your first language isn't a premium feature. Pulsa ships every major feature in English, Pidgin, Yoruba, Hausa, Igbo, and Swahili simultaneously.",
  },
  {
    t: "Privacy by default",
    d: "Health data is not an asset to monetise. We collect the minimum necessary, encrypt everything, and give you full control. No data selling, ever.",
  },
  {
    t: "Speed as safety",
    d: "In triage, slowness is a clinical risk. Every engineering decision is measured against latency impact. Sub-60-second risk scoring is a product commitment.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section
          className="border-b border-border py-24"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">About us</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
              Clinicians and engineers,
              <br />
              <em className="not-italic text-primary">building together</em>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Pulsa Health was founded by a doctor who watched preventable outcomes happen in an
              emergency ward, and an engineer who believed software could stop them. That&apos;s
              still what drives every decision we make.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-primary">Our mission</p>
                <h2 className="font-display text-4xl font-medium md:text-5xl">
                  Connect every health seeker to the right care, in the right time, in their
                  language.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  We&apos;re building the triage layer that should have existed ten years ago — the
                  one that works in Yoruba, understands the difference between a headache and a
                  hypertensive crisis, and gets you to a verified clinician before the window
                  closes.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  We started in Lagos because it&apos;s where the need is sharpest and the
                  infrastructure is most ready. We&apos;re scaling because the problem is
                  everywhere.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { n: "2024", l: "Pulsa Health incorporated, Enugu, Nigeria" },
                  { n: "Jan 2025", l: "First clinical advisor board formed" },
                  { n: "Mar 2025", l: "Private beta launched with 12 pilot clinics" },
                  { n: "Jun 2025", l: "1,400+ demo requests received" },
                  { n: "Q1 2026", l: "Public beta opening — Lagos & Abuja" },
                ].map((e) => (
                  <div
                    key={e.n}
                    className="flex gap-6 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="shrink-0 font-display text-sm text-primary">{e.n}</div>
                    <div className="text-sm text-muted-foreground">{e.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-4 text-xs uppercase tracking-widest text-primary">Team</p>
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                The people building Pulsa.
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl gap-6 md:grid-cols-2">
              {team.map((m) => (
                <div
                  key={m.n}
                  className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center"
                >
                  <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 bg-primary/10 shadow-lg">
                    {m.img ? (
                      <Image
                        src={m.img}
                        alt={m.n}
                        width={128}
                        height={128}
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
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.b}</p>
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

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Values</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">
              What we believe.
            </h2>
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

        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Company</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">The basics.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Legal name",
                  d: "Pulsa Health Ltd\nIncorporated in Enugu, Nigeria\nRC Number: [pending]",
                },
                {
                  t: "Headquarters",
                  d: "24 Amechi Street, Enugu, Nigeria\nBuilding Africa's next generation of health-tech from the heart of the South-East.",
                },
                {
                  t: "Stage",
                  d: "Pre-seed. Private beta live.\nActively onboarding pilot clinics, HMO partners, and enterprise health benefit sponsors.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="font-display text-xl font-medium">{c.t}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Work with us.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re a small team building something that matters. If you&apos;re a clinician,
              engineer, HMO partner, or investor who wants to be part of it — reach out.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </main>
      <FooterSimple />
    </div>
  );
}
