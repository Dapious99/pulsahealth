"use client";

import Link from "next/link";
import { useState } from "react";
import { Nav } from "../components/nav";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section
          className="border-b border-border py-20"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">
              Request a demo
            </p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-6xl">
              See Pulsa in action.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a 30-minute session with a founder. We&apos;ll walk through a
              live triage demonstration, discuss your use case, and answer every
              technical question you have.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-medium">
                  Send us a message
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Every message reaches a founder within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-10 text-center">
                    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/20 text-2xl text-primary">
                      ✓
                    </div>
                    <h3 className="font-display text-2xl font-medium">
                      Message received.
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      We&apos;ll send a calendar link to your email within 24
                      hours. If it&apos;s urgent, email us directly at{" "}
                      <a
                        href="mailto:founders@pulsahealth.co"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        founders@pulsahealth.co
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/founders@pulsahealth.co"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                    className="mt-8 space-y-5"
                  >
                    <input type="hidden" name="_subject" value="Demo request — Pulsa Health" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://pulsahealth.co/contact" />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Full name <span className="text-primary">*</span>
                        </label>
                        <input id="name" name="name" type="text" required placeholder="Dr. Amara Okeke"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email address <span className="text-primary">*</span>
                        </label>
                        <input id="email" name="email" type="email" required placeholder="you@company.com"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="organization" className="mb-2 block text-sm font-medium">Organisation</label>
                        <input id="organization" name="organization" type="text" placeholder="Hospital, HMO, company..."
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                      </div>
                      <div>
                        <label htmlFor="role" className="mb-2 block text-sm font-medium">Your role</label>
                        <select id="role" name="role"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                          <option value="">Select a role</option>
                          <option>Clinician / Healthcare provider</option>
                          <option>HMO / Insurer</option>
                          <option>Hospital / Clinic administrator</option>
                          <option>Employer / HR</option>
                          <option>Investor</option>
                          <option>Press / Media</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="mb-2 block text-sm font-medium">
                        Type of inquiry <span className="text-primary">*</span>
                      </label>
                      <select id="inquiry" name="inquiry" required
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                        <option value="">Select inquiry type</option>
                        <option>Product demo</option>
                        <option>Clinic / hospital partnership</option>
                        <option>HMO / insurer partnership</option>
                        <option>Enterprise health benefits</option>
                        <option>Investment</option>
                        <option>Press / media</option>
                        <option>General question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea id="message" name="message" required rows={5}
                        placeholder="Tell us a bit about what you're looking to do — we'll tailor the demo to your use case."
                        className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                    </div>

                    <button type="submit"
                      className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90 sm:w-auto sm:px-10">
                      Send message →
                    </button>
                  </form>
                )}
              </div>

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
                  <strong className="block font-medium text-foreground">Pulsa Health Ltd</strong>
                  <span className="mt-1 block">24 Amechi Street, Enugu, Nigeria</span>
                  <a href="tel:+2348148949929" className="mt-2 block hover:text-primary">+234 814 894 9929</a>
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
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h3l2-6 4 12 2-6h7" />
                </svg>
              </span>
              Pulsa<span className="text-primary">.</span>
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">Privacy</Link>
              <Link href="/terms" className="hover:text-primary">Terms</Link>
            </div>
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pulsa Health Ltd. Enugu, Nigeria.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
