import type { Metadata } from "next";
import { SandspireHeader } from "@/components/sandspire/SandspireHeader";
import { ScrollReveal } from "@/components/sandspire/ScrollReveal";
import { SiteFooter } from "@/components/sandspire/SiteFooter";

export const metadata: Metadata = {
  title: "About — Sandspire",
  description:
    "Sandspire is a creative studio for brand strategy, web design, social, and automation—built for teams that want clarity and craft.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SandspireHeader />

      <main className="mx-auto max-w-[1180px] px-6 pb-24 pt-14 lg:px-8 lg:pb-32 lg:pt-20">
        <ScrollReveal>
          <p className="text-xs font-normal uppercase tracking-[0.14px] text-[var(--accent)]">
            About
          </p>
          <h1 className="mt-3 max-w-[720px] font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,2.75rem)] font-light leading-[1.05] tracking-[-0.02em]">
            A studio for brands that want to feel effortless
          </h1>
          <p className="mt-6 max-w-[640px] text-[17px] font-normal leading-[1.55] text-[var(--foreground)]/85 lg:text-[18px]">
            We&apos;re Sandspire—a creative team helping businesses go from first impression to daily
            operations without friction. Strategy, design, content, and automation sit together so
            your story, site, and workflows stay in sync.
          </p>
        </ScrollReveal>

        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.08}>
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[28px] font-light leading-[1.08] tracking-[-0.02em] lg:text-[30px]">
                How we work
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[1.55] text-[var(--foreground)]/80">
                We start with goals and audience, then shape identity and UX so every touchpoint
                reinforces the same idea. Small teams get senior attention; larger orgs get systems
                they can grow into—not one-off files nobody can maintain.
              </p>
            </section>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[28px] font-light leading-[1.08] tracking-[-0.02em] lg:text-[30px]">
                What we care about
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[1.55] text-[var(--foreground)]/80">
                Clarity over noise, craft over trends, and outcomes you can point to. Whether
                it&apos;s a launch, a refresh, or tooling that saves your team hours each week, we
                build for longevity—not just the screenshot.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20 lg:mt-24" delay={0.06}>
          <p className="text-[15px] font-normal leading-[1.5] text-[var(--muted)]">
            Ready to talk?{" "}
            <a href="/contact" className="text-[var(--accent)] underline decoration-solid underline-offset-4">
              Get in touch
            </a>
            .
          </p>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
