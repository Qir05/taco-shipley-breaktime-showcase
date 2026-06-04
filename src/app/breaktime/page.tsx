import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Breaktime | Business Showcase",
  description:
    "Breaktime — premium fuel, fresh food, and everything you need 24/7.",
};

// Item 30: Premium Fuel card image updated to Breaktime1.png
const storeCards = [
  {
    src: "/breaktime/Breaktime1.png",
    name: "Premium Fuel",
    desc: "Top-tier gasoline and diesel for every vehicle. Quality fuel that keeps you moving forward.",
    objectPosition: "center center",
  },
  {
    src: "/breaktime/breaktime-store2.jpg",
    name: "Fresh Food",
    desc: "Made-to-order meals and fresh grab-and-go options prepared daily for your convenience.",
    objectPosition: "center center",
  },
  {
    src: "/breaktime/breaktime-store3.jpg",
    name: "Convenience Store",
    desc: "Everything you need for the road ahead. Travel essentials stocked and ready around the clock.",
    objectPosition: "center center",
  },
];

export default function BreaktimePage() {
  return (
    <main className="bg-[#F0F5FF]">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#F0F5FF]/90 backdrop-blur-sm border-b border-blue-200/40">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-[#1B3A6B]/50 hover:text-[#1B3A6B] transition-colors duration-200"
        >
          Back to Portfolio
        </Link>
        <Image
          src="/breaktime/breaktime-logo1.jpg"
          alt="Breaktime"
          width={120}
          height={50}
          className="h-7 w-auto object-contain mix-blend-multiply"
        />
      </nav>

      {/* ─── SPLIT HERO ─── */}
      <section className="min-h-screen px-4 sm:px-6 md:px-16 flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center py-10 sm:py-16">
          {/* Text */}
          <div className="flex flex-col items-start">
            <Image
              src="/breaktime/breaktime-logo1.jpg"
              alt="Breaktime"
              width={900}
              height={350}
              className="w-[240px] sm:w-[360px] md:w-[520px] max-w-full h-auto object-contain object-left mix-blend-multiply"
            />
            <div className="mt-[-20px] sm:mt-[-35px] md:mt-[-65px]">
              <p className="mb-4 text-xs tracking-[0.4em] uppercase text-[#1B3A6B] font-medium">
                24/7 Service&nbsp;&nbsp;•&nbsp;&nbsp;Dependable&nbsp;&nbsp;•&nbsp;&nbsp;Accessible
              </p>
              <h1
                className="font-black leading-none tracking-tight text-[#0D2044] mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Fuel Your
                <br />
                Journey
              </h1>
              <p className="text-[#1B3A6B]/60 text-lg leading-relaxed mb-10 max-w-md">
                Premium destination, fresh food and everything you need to
                recharge your vehicle and yourself.
              </p>
              {/* Items 8 & 25: Breaktime button — dark blue */}
              <Link
                href="#community"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#1B3A6B] text-white rounded-full px-9 py-4 hover:bg-[#142e58] transition-colors duration-300"
              >
                Fuel Your Journey
              </Link>
            </div>
          </div>

          {/* Items 24, 26, 27: Updated slideshow — new first image, removed old 2nd, replaced with Breaktime1.png */}
          <ImageSlideshow
            images={[
              { src: "/breaktime/breaktime%20landing%20page.png", alt: "Breaktime" },
              { src: "/breaktime/Breaktime1.png", alt: "Breaktime Store" },
              { src: "/breaktime/breaktime-store2.jpg", alt: "Breaktime Store" },
              { src: "/breaktime/breaktime-store3.jpg", alt: "Breaktime Store" },
            ]}
            className="rounded-3xl shadow-2xl shadow-blue-100 h-[300px] sm:h-[420px] md:h-[600px]"
          />
        </div>
      </section>

      {/* ─── FOR THE COMMUNITY ─── */}
      <section id="community" className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        {/* Item 28: Removed "OUR MISSION" label */}
        {/* Item 29: Rewritten heading, centered alignment */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0D2044] max-w-2xl leading-tight mx-auto">
            For the community, food and everything in between.
          </h2>
        </div>

        {/* Item 31: Restored old format — larger images, no card box wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storeCards.map((card) => (
            <div key={card.name} className="group">
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl mb-4">
                <Image
                  src={card.src}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: card.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-1">
                <h3 className="text-base font-bold text-[#1B3A6B] mb-2">
                  {card.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── READY TO SERVE ─── */}
      <section className="px-6 md:px-16 py-24 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#1B3A6B] mb-4 font-medium">
            Always Here
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2044] mb-6">
            Ready to Serve
          </h2>
          <p className="text-[#1B3A6B]/70 text-lg leading-relaxed">
            Open 24 hours, 7 days a week. Breaktime is here whenever you need
            to refuel, refresh, and recharge.
          </p>
        </div>
      </section>

      {/* Item 32: Footer — © All rights reserved., centered */}
      <footer className="border-t border-blue-100 px-4 sm:px-8 py-8 sm:py-10 bg-[#F0F5FF]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
          <Link
            href="/"
            className="inline-block text-xs tracking-widest uppercase font-medium text-[#1B3A6B] border border-[#1B3A6B]/25 rounded-full px-6 py-3 hover:bg-[#1B3A6B] hover:text-white transition-all duration-300"
          >
            Back to Portfolio
          </Link>
          <Image
            src="/breaktime/breaktime-logo1.jpg"
            alt="Breaktime"
            width={120}
            height={50}
            className="h-7 w-auto object-contain mix-blend-multiply opacity-50"
          />
          <p className="text-[#1B3A6B]/40 text-xs">
            © All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
