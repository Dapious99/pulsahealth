import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Pulsa Health" },
      { name: "description", content: "Book a demo with the Pulsa Health team. See AI triage in action and discuss partnerships, pilots, and enterprise plans." },
      { property: "og:title", content: "Request a Demo — Pulsa Health" },
      { property: "og:description", content: "Book a demo or get in touch with the Pulsa Health team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
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
          <Link to="/about" className="hover:text-foreground">About</Link>
        </nav>
        <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Request Demo
        </Link>
      </div>
    </header>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Request a demo</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-6xl">
              See Pulsa in action.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a 30-minute session with a founder. We'll walk through a live triage demonstration,
              discuss your use case, and answer every technical question you have.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">

              {/* Form */}
              <div>
                <h2 className="font-display text-3xl font-medium">Send us a message</h2>
                <p className="mt-3 text-muted-foreground">Every message reaches a founder within 24 hours.</p>

                {submitted ? (
                  <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-10 text-center">
                    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/20 text-2xl text-primary">✓</div>
                    <h3 className="font-display text-2xl font-medium">Message received.</h3>
                    <p className="mt-3 text-muted-foreground">We'll send a calendar link to your email within 24 hours. If it's urgent, email us directly at <a href="mailto:founders@pulsahealth.co" className="text-primary underline-offset-4 hover:underline">founders@pulsahealth.co</a>.</p>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/founders@pulsahealth.co"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                    className="mt-8 space-y-5"
                  >
                    {/* FormSubmit config */}
                    <input type="hidden" name="_subject" value="Demo request — Pulsa Health" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://pulsahealth.co/contact" />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Full name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Dr. Amara Okeke"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email address <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="organization" className="mb-2 block text-sm font-medium">
                          Organisation
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          placeholder="Hospital, HMO, company..."
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="mb-2 block text-sm font-medium">
                          Your role
                        </label>
                        <select
                          id="role"
                          name="role"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select a role</option>
                          <option value="Clinician / Healthcare provider">Clinician / Healthcare provider</option>
                          <option value="HMO / Insurer">HMO / Insurer</option>
                          <option value="Hospital / Clinic administrator">Hospital / Clinic administrator</option>
                          <option value="Employer / HR">Employer / HR</option>
                          <option value="Investor">Investor</option>
                          <option value="Press / Media">Press / Media</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="mb-2 block text-sm font-medium">
                        Type of inquiry <span className="text-primary">*</span>
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Product demo">Product demo</option>
                        <option value="Clinic / hospital partnership">Clinic / hospital partnership</option>
                        <option value="HMO / insurer partnership">HMO / insurer partnership</option>
                        <option value="Enterprise health benefits">Enterprise health benefits</option>
                        <option value="Investment">Investment</option>
                        <option value="Press / media">Press / media</option>
                        <option value="General question">General question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us a bit about what you're looking to do — we'll tailor the demo to your use case."
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90 sm:w-auto sm:px-10"
                    >
                      Send message →
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl font-medium">What to expect</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Reply within 24 hours on business days",
                      "30-minute live demo with a founder",
                      "Real triage session in your language",
                      "Technical Q&A — no sales pressure",
                      "Custom proposal for your use case",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl font-medium">Prefer email?</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { t: "General", e: "hello@pulsahealth.co" },
                      { t: "Demos & partnerships", e: "founders@pulsahealth.co" },
                      { t: "Press", e: "press@pulsahealth.co" },
                      { t: "Privacy & legal", e: "privacy@pulsahealth.co" },
                    ].map((c) => (
                      <div key={c.e}>
                        <div className="text-xs uppercase tracking-widest text-primary">{c.t}</div>
                        <a href={`mailto:${c.e}`} className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{c.e}</a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground">
                  <strong className="block text-foreground font-medium">Pulsa Health Ltd</strong>
                  <span className="mt-1 block">Yaba, Lagos, Nigeria</span>
                  <span className="mt-3 block text-xs">
                    Pulsa Health does not replace professional medical advice. In emergencies, call your local emergency number.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
            </div>
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pulsa Health Ltd. Lagos, Nigeria.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
