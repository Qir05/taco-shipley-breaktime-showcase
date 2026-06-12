import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Breaktime | Business Showcase",
  description:
    "Breaktime — premium fuel, fresh food, and everything you need 24/7.",
};

const storeCards = [
  {
    src: "/breaktime/B71A4807-HDR-Edit%20-%20inside.jpg",
    name: "Premium Fuel",
    desc: "Top-tier gasoline and diesel for every vehicle. Quality fuel that keeps you moving forward.",
    objectPosition: "center center",
  },
  {
    src: "/breaktime/Breaktime%20inside%203%20-%20middle-.png",
    name: "Your Every Day, Made Better",
    objectPosition: "center center",
  },
  {
    src: "/breaktime/Breaktime1%20-.png",
    name: "Convenience Store",
    desc: "Everything you need for the road ahead. Travel essentials stocked and ready around the clock.",
    objectPosition: "center center",
  },
];

export default function BreaktimePage() {
  return (
    <main className="bg-[#F0F5FF] overflow-x-hidden">
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
      <section className="px-4 sm:px-6 md:px-16 pt-16 pb-10 sm:pt-24 sm:pb-16 md:min-h-screen md:flex md:items-center overflow-hidden">
        {/*
          grid-cols-1 is explicit so mobile never defaults to an
          implicit auto-sized column that can overflow.
          min-w-0 on each child prevents grid blowout.
        */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-24 items-center md:py-16">

          {/* Text — centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left min-w-0 w-full">
            <Image
              src="/breaktime/breaktime-logo1.jpg"
              alt="Breaktime"
              width={900}
              height={350}
              className="w-[160px] sm:w-[280px] md:w-[480px] max-w-full h-auto object-contain mx-auto md:mx-0 mix-blend-multiply"
            />
            {/* Negative margin only on md+ to avoid overlap quirks when centered */}
            <div className="mt-3 sm:mt-1 md:mt-[-55px] w-full">
              {/* Mobile: smaller text + tight tracking so it never overflows; wrap-safe separators */}
              <p className="mb-3 text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#1B3A6B] font-medium leading-snug">
                24/7 Service&nbsp;•&nbsp;Dependable&nbsp;•&nbsp;Accessible
              </p>
              <h1
                className="font-black leading-none tracking-tight text-[#0D2044] mb-5"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
              >
                Fuel Your
                <br />
                Journey
              </h1>
              <p className="text-[#1B3A6B]/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
                Premium destination, fresh food and everything you need to
                recharge your vehicle and yourself.
              </p>
              <Link
                href="#community"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#1B3A6B] text-white rounded-full px-8 py-3.5 sm:px-9 sm:py-4 hover:bg-[#142e58] transition-colors duration-300"
              >
                Fuel Your Journey
              </Link>
            </div>
          </div>

          {/* Slideshow — w-full + min-w-0 prevents overflow on mobile */}
          <ImageSlideshow
            images={[
              { src: "/breaktime/B71A4807-HDR-Edit%20-%20inside.jpg", alt: "Breaktime Store" },
              { src: "/breaktime/Breaktime1%20-.png", alt: "Breaktime" },
              { src: "/breaktime/Breaktime%20inside%203%20-%20middle-.png", alt: "Breaktime Inside" },
              { src: "/breaktime/B71A4864-HDR%20-%20inside2.png", alt: "Breaktime Store" },
            ]}
            className="w-full min-w-0 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-100 h-[300px] sm:h-[420px] md:h-[560px]"
          />
        </div>
      </section>

      {/* ─── FOR THE COMMUNITY ─── */}
      <section id="community" className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0D2044] max-w-2xl leading-tight mx-auto">
            For the community, food and everything in between
          </h2>
          <p className="text-[#1B3A6B]/60 text-base sm:text-lg leading-relaxed mt-4 max-w-xl mx-auto">
            Your one-stop neighborhood stop for fresh snacks, cold drinks and everyday essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {storeCards.map((card) => (
            <div key={card.name} className="group">
              <div className="relative h-52 sm:h-60 md:h-72 overflow-hidden rounded-2xl mb-4">
                <Image
                  src={card.src}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: card.objectPosition }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
      <section className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#1B3A6B] mb-4 font-medium">
            Always Here
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D2044] mb-5">
            Ready to Serve
          </h2>
          <p className="text-[#1B3A6B]/70 text-base sm:text-lg leading-relaxed">
            Open 24 hours, 7 days a week. Breaktime is here whenever you need
            to refuel, refresh, and recharge.
          </p>
        </div>
      </section>

      {/* Footer */}
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
            © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
