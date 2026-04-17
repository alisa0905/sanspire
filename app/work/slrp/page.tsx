import { ContactFAQ } from "@/components/sandspire/ContactFAQ";
import { SiteFooter } from "@/components/sandspire/SiteFooter";

const navLinks: { label: string; href: string }[] = [
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Use Cases", href: "/#who" },
];

const categories = ["Branding", "Web Development"];

const challengePoints = [
  "The original website looked static and didn't reflect the speed and energy of SLRP's in-store experience.",
  "Navigation and content hierarchy felt fragmented, making it harder for customers to discover what to order first.",
  "Visual identity assets were inconsistent across social and web touchpoints, reducing brand recall.",
];

const solutionPoints = [
  "We rebuilt the experience around clear product categories, a stronger visual rhythm, and conversion-first sections.",
  "A high-contrast design system and bold typography were introduced to mirror the Tokyo-inspired brand personality.",
  "Reusable visual blocks made campaign launches and menu updates faster without losing consistency.",
];

const resultStats = [
  { label: "Average Session Time", value: "+52%" },
  { label: "Online Orders", value: "+37%" },
  { label: "Instagram Click-through", value: "+41%" },
];

export default function SlrpWorkPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FAF3E8]">
      <header className="sticky top-0 z-30 h-[54px] bg-gradient-to-b from-[#141414]/75 to-[#0d0d0d]/65 px-5 backdrop-blur-[6px] lg:px-7">
        <div className="mx-auto flex h-full w-full max-w-[1220px] items-center justify-between gap-5">
          <a href="/" aria-label="Go to homepage">
            <img src="/logos/sandspire.svg" alt="Sandspire" className="h-7 w-auto" />
          </a>

          <nav className="hidden items-center justify-center gap-[38px] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium capitalize tracking-[0.12px] text-white/90 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="inline-flex h-9 items-center rounded-full bg-[var(--background)] px-5 text-[13px] font-semibold text-[var(--foreground)]"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 pb-0 pt-14">
          <div className="mx-auto w-full max-w-[1220px] px-6 lg:px-10">
            <div className="mx-auto max-w-[760px]">
              <h1 className="text-center font-[family-name:var(--font-display)] text-[44px] font-light leading-[1.05] text-[#FAF3E8] lg:text-[52px]">
                SLRP Ramen
              </h1>
              <p className="mt-4 text-center text-[18px] leading-[1.4] text-[#B7AEA3]">
                A full digital refresh for a fast-moving ramen concept, crafted to
                make the brand feel sharper, faster, and easier to explore.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#3A3A3A] bg-[#1B1B1B] px-5 py-2 text-[12px] font-medium tracking-[0.02em] text-[#ECE2D6]"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="-mx-6 mt-12 grid gap-0 lg:-mx-10 lg:grid-cols-[1fr_330px] lg:items-stretch">
              <article className="overflow-hidden rounded-t-[20px] rounded-b-none border border-white/20 bg-[#181818] px-3 pb-0 pt-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:rounded-r-none">
                <img
                  src="/images/projects/slrp/slrp_img.png"
                  alt="SLRP website visual"
                  className="-mb-3 h-auto w-full rounded-t-[14px] rounded-b-none object-cover"
                />
              </article>

              <div className="space-y-4 rounded-t-[18px] rounded-b-none p-6 lg:rounded-l-none">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8C847A]">
                    Industry
                  </p>
                  <p className="mt-1 text-[15px] text-[#F0E7DB]">Restaurant</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8C847A]">
                    Location
                  </p>
                  <p className="mt-1 text-[15px] text-[#F0E7DB]">
                    United Arab Emirates
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8C847A]">
                    About
                  </p>
                  <p className="mt-1 text-[15px] leading-[1.45] text-[#F0E7DB]">
                    High-energy ramen and rolls inspired by Tokyo street culture,
                    built for busy malls, bold flavors, and fast-moving crowds.
                  </p>
                </div>
                <a
                  href="https://slrpramen.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#4B3D34] bg-[#1D1D1D] px-5 py-2.5 text-[12px] font-medium text-[#F4EBDD] transition hover:border-[#FF7A2D] hover:text-white"
                >
                  Visit Website
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FBF3E8] py-24 text-[#0D0D0D]">
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-20 px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-[240px_1fr]">
              <h2 className="font-[family-name:var(--font-display)] text-[42px] font-light leading-[1.04]">
                The challenge
              </h2>
              <div className="space-y-4 text-[18px] leading-[1.55] text-[#2F2B26]">
                {challengePoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-[240px_1fr]">
              <h2 className="font-[family-name:var(--font-display)] text-[42px] font-light leading-[1.04]">
                The solution
              </h2>
              <div className="space-y-4 text-[18px] leading-[1.55] text-[#2F2B26]">
                {solutionPoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[260px_1fr]">
              <h2 className="font-[family-name:var(--font-display)] text-[42px] font-light leading-[1.04]">
                The result
              </h2>
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {resultStats.map((stat) => (
                    <article
                      key={stat.label}
                      className="rounded-[16px] border border-[#E5D9CA] bg-white p-5"
                    >
                      <p className="text-[28px] font-semibold leading-none text-[#0D0D0D]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[13px] text-[#5C564E]">{stat.label}</p>
                    </article>
                  ))}
                </div>

                <article className="overflow-hidden rounded-[18px] border border-[#E0D3C3] bg-[#111] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
                  <img
                    src="/images/projects/slrp/slrpBento1.png"
                    alt="SLRP campaign visuals collage"
                    className="h-auto w-full rounded-[12px] object-cover"
                  />
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[16px] border border-[#E0D3C3] bg-white p-2">
                    <img
                      src="/images/projects/slrp/slrpBento2.png"
                      alt="SLRP secondary visual"
                      className="h-auto w-full rounded-[10px] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[16px] border border-[#E0D3C3] bg-white p-2">
                    <img
                      src="/images/projects/slrp/slrpBento3.png"
                      alt="SLRP third visual"
                      className="h-auto w-full rounded-[10px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-[#0D0D0D] pb-14 pt-14">
        <div className="mx-auto grid w-full max-w-[1040px] gap-5 px-6 lg:px-10 md:grid-cols-2">
          {[
            "/images/projects/3fils/3fils_img.png",
            "/images/projects/brixjourney/brixjourney_img.png",
            "/images/projects/bordomavi/bordomavi_img.png",
            "/images/projects/brixcafe/brix_img.png",
          ].map((imagePath) => (
            <article
              key={imagePath}
              className="overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.04] p-2"
            >
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={imagePath}
                  alt="Project showcase tile"
                  className="h-auto w-full object-cover transition duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactFAQ />
      <SiteFooter />
    </div>
  );
}
