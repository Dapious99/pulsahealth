import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of Pulsa Health.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link href="/" className="text-sm text-primary hover:underline">
          ← Back home
        </Link>
        <h1 className="mt-8 font-display text-5xl font-medium">Terms of use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 2026</p>
        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            <strong className="text-foreground">Not medical advice.</strong> Pulsa Health provides
            decision support and clinician routing. It is not a substitute for professional
            diagnosis, treatment, or emergency care. In emergencies, dial your local emergency
            number.
          </p>
          <h2 className="font-display text-2xl text-foreground">Eligibility</h2>
          <p>
            You must be 18+ or have a parent/guardian&apos;s consent. By using Pulsa, you confirm
            the information you provide is accurate to the best of your knowledge.
          </p>
          <h2 className="font-display text-2xl text-foreground">Clinician relationships</h2>
          <p>
            Clinicians on Pulsa are independent licensed practitioners. Pulsa verifies licenses but
            is not the provider of medical services and accepts no liability for clinical decisions.
          </p>
          <h2 className="font-display text-2xl text-foreground">Acceptable use</h2>
          <p>
            Do not impersonate others, submit false symptoms, or attempt to disrupt the service. We
            may suspend accounts that violate these terms.
          </p>
          <h2 className="font-display text-2xl text-foreground">Liability</h2>
          <p>
            Pulsa Health Ltd&apos;s liability is limited to fees paid in the 12 months preceding any
            claim, to the maximum extent permitted by law.
          </p>
          <h2 className="font-display text-2xl text-foreground">Contact</h2>
          <p>
            <a href="mailto:legal@pulsahealth.co" className="text-primary">
              legal@pulsahealth.co
            </a>{" "}
            · Pulsa Health Ltd, Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
}
