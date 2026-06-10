import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pulsa Health" },
      { name: "description", content: "How Pulsa Health collects, uses, and protects your health data." },
      { property: "og:title", content: "Privacy Policy — Pulsa Health" },
      { property: "og:description", content: "How we handle your health data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-primary hover:underline">← Back home</Link>
        <h1 className="mt-8 font-display text-5xl font-medium">Privacy policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 2026</p>
        <div className="prose prose-invert mt-10 space-y-6 text-muted-foreground">
          <p>Pulsa Health Ltd ("Pulsa", "we") provides AI-powered health triage. Protecting your health data is core to our product. This policy explains what we collect, why, and your rights under the Nigeria Data Protection Regulation (NDPR), GDPR, and HIPAA-equivalent standards.</p>
          <h2 className="font-display text-2xl text-foreground">What we collect</h2>
          <p>Account details (name, email, phone), symptom inputs you submit, device metadata, and — only with explicit consent — voice recordings for transcription. We never sell personal data.</p>
          <h2 className="font-display text-2xl text-foreground">How we use it</h2>
          <p>To provide triage, match you to clinicians, improve our models (using de-identified data only), and meet legal obligations. AI model training uses only data you've consented to share for that purpose.</p>
          <h2 className="font-display text-2xl text-foreground">Storage and security</h2>
          <p>Data is encrypted at rest (AES-256, AWS KMS) and in transit (TLS 1.3). Access is logged and reviewed monthly. Records are stored on AWS infrastructure in eu-west-1 and af-south-1.</p>
          <h2 className="font-display text-2xl text-foreground">Your rights</h2>
          <p>You may export, correct, or delete your data at any time by emailing <a href="mailto:privacy@pulsahealth.co" className="text-primary">privacy@pulsahealth.co</a>. We respond within 30 days.</p>
          <h2 className="font-display text-2xl text-foreground">Contact</h2>
          <p>Data Protection Officer — privacy@pulsahealth.co · Pulsa Health Ltd, Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
  );
}