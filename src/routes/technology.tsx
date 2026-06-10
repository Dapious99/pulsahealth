import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology & Infrastructure — Pulsa Health" },
      { name: "description", content: "The AI models, cloud infrastructure, and NVIDIA GPU stack powering Pulsa Health's real-time triage engine." },
      { property: "og:title", content: "Technology & Infrastructure — Pulsa Health" },
      { property: "og:description", content: "AWS, NVIDIA, and multilingual AI powering healthcare triage at scale." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
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
          <Link to="/technology" className="text-foreground">Technology</Link>
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

const aiModels = [
  {
    n: "01",
    t: "Multilingual symptom understanding",
    d: "A fine-tuned large language model trained on de-identified consultation transcripts from African clinical settings and WHO clinical guidelines. The model conducts structured symptom intake in English, Pidgin, Yoruba, Hausa, Igbo, and Swahili — adapting follow-up questions based on prior answers.",
    tags: ["Amazon Bedrock", "Fine-tuned LLM", "NLP", "Multilingual"],
  },
  {
    n: "02",
    t: "Risk stratification engine",
    d: "A gradient-boosted ensemble model that scores symptom severity across 14 clinical axes — including 23 red-flag patterns associated with cardiac events, stroke, sepsis, and obstetric emergencies. Output is a four-tier risk classification reviewed by a CMO-approved decision framework.",
    tags: ["Gradient boosting", "Clinical decision support", "14-axis scoring"],
  },
  {
    n: "03",
    t: "Clinician matching via vector search",
    d: "Practitioner embeddings encode specialty, sub-specialty, languages spoken, real-time availability, and aggregated patient outcome scores. FAISS-powered vector similarity search returns a ranked shortlist in under 200ms — updated daily as clinician availability changes.",
    tags: ["Vector search", "FAISS", "Embeddings", "Real-time matching"],
  },
  {
    n: "04",
    t: "Continuous outcome learning",
    d: "Every confirmed diagnosis and clinician note is fed back into the training pipeline — de-identified and consented. Models are retrained weekly. Each retraining cycle is audited against a held-out clinical benchmark before deployment.",
    tags: ["Feedback loop", "Weekly retraining", "Audit trail", "NDPR compliant"],
  },
];

const awsStack = [
  { s: "Amazon Bedrock", d: "Managed LLM inference with no model weights leaving the VPC. Powers symptom understanding and multilingual response generation." },
  { s: "AWS Fargate (ECS)", d: "Containerized backend APIs — autoscaling, no server management, isolated per-service security boundaries." },
  { s: "Amazon RDS (PostgreSQL)", d: "Encrypted relational store for patient records. Field-level KMS encryption. PITR backups with 35-day retention." },
  { s: "AWS Lambda", d: "Async clinical workflows: risk-score post-processing, notification dispatch, model feedback ingestion." },
  { s: "Amazon S3 + KMS", d: "De-identified training data storage with server-side encryption and object-level access logging." },
  { s: "Amazon CloudFront + WAF", d: "Global CDN edge delivery with managed WAF rules — rate limiting, bot detection, SQL injection and XSS protection." },
  { s: "Amazon Cognito", d: "MFA-enforced authentication with PKCE OAuth flows. No passwords stored in application code." },
  { s: "AWS CloudWatch + GuardDuty", d: "Full audit logging on every API call. GuardDuty detects anomalous access patterns and potential data exfiltration." },
];

const nvidiaStack = [
  { s: "NVIDIA Triton Inference Server", d: "Multi-model GPU serving for concurrent inference requests. Supports TensorRT, ONNX, and PyTorch backends on a single server fleet." },
  { s: "TensorRT", d: "Quantized and optimized model graphs for sub-100ms triage inference at peak load — even on single-GPU instances." },
  { s: "NVIDIA NeMo", d: "Multilingual speech recognition for Pulsa's voice triage channel. Fine-tuned on West African English and Pidgin phoneme datasets." },
  { s: "NVIDIA MONAI", d: "Medical imaging AI framework on the roadmap for radiology report summarization and imaging-informed triage." },
  { s: "NVIDIA NIM Microservices", d: "Portable, secure model deployment containers that keep inference workloads cloud-agnostic and reproducible across regions." },
];

function Technology() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border py-24" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Technology & infrastructure</p>
            <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
              AI infrastructure<br />
              built for <em className="not-italic text-primary">clinical trust</em>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Four AI models, AWS healthcare-grade infrastructure, and NVIDIA GPU acceleration —
              working together to deliver triage decisions clinicians can rely on and patients can trust.
            </p>
          </div>
        </section>

        {/* AI Models */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">AI technology</p>
            <h2 className="max-w-3xl font-display text-4xl font-medium md:text-5xl">
              AI isn't a feature here. It's the entire care pathway.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Four models work in concert — each audited, each with a human reviewer in the loop, each
              improving weekly on confirmed outcome data.
            </p>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {aiModels.map((m) => (
                <div key={m.t} className="rounded-2xl border border-border bg-card p-8">
                  <div className="mb-3 font-display text-sm text-primary">{m.n}</div>
                  <h3 className="font-display text-2xl font-medium">{m.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AWS */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-primary">Cloud — AWS</p>
              <h2 className="font-display text-4xl font-medium md:text-5xl">Healthcare-grade cloud backbone.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Every AWS service in our stack was chosen specifically for healthcare compliance —
                HIPAA-eligible, NDPR-compatible, with audit trails on every access event.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {awsStack.map((s) => (
                <div key={s.s} className="rounded-2xl border border-border bg-background p-6">
                  <div className="font-display text-base font-medium text-primary">{s.s}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NVIDIA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-primary">AI acceleration — NVIDIA</p>
              <h2 className="font-display text-4xl font-medium md:text-5xl">Real-time inference. No queue.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Triage decisions need to feel instant. NVIDIA's inference stack lets us serve multiple
                concurrent AI models with sub-100ms latency — at the scale Africa demands.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {nvidiaStack.map((s) => (
                <div key={s.s} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-base font-medium text-primary">{s.s}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & compliance */}
        <section className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Security & compliance</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium md:text-5xl">Data protection is the product.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "AES-256 at rest", d: "Field-level KMS encryption on all patient records. Keys rotated annually." },
                { t: "TLS 1.3 in transit", d: "All API calls encrypted end-to-end. No cleartext health data on the wire." },
                { t: "NDPR aligned", d: "Nigeria Data Protection Regulation compliant. Data subjects can export or delete at any time." },
                { t: "HIPAA-equivalent", d: "Controls mapped to HIPAA Security Rule. Annual third-party audit planned for Series A." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-background p-6">
                  <div className="font-display text-lg font-medium">{c.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">Want a technical deep-dive?</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We run 60-minute technical sessions for engineering and security teams.
              Request one and we'll send a calendar link within 24 hours.
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
