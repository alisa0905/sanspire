import type { Metadata } from "next";
import { ContactFAQ } from "@/components/sandspire/ContactFAQ";
import { SandspireHeader } from "@/components/sandspire/SandspireHeader";
import { SiteFooter } from "@/components/sandspire/SiteFooter";

export const metadata: Metadata = {
  title: "Contact — Sandspire",
  description:
    "Start a project with Sandspire—brand, web, social, and automation. Send a message or read answers to common questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#faf3e8]">
      <SandspireHeader ctaHref="#contact" />

      <main>
        <ContactFAQ className="rounded-none pt-14 lg:pt-20" />
      </main>

      <SiteFooter />
    </div>
  );
}
