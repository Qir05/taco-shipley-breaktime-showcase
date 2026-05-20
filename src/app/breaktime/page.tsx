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
    src: "/breaktime/breaktime-store1.jpg",
    name: "Premium Fuel",
    desc: "Top-tier gasoline and diesel for every vehicle. Quality fuel that keeps you moving forward.",
  },
  {
    src: "/breaktime/breaktime-store2.jpg",
    name: "Fresh Food",
    desc: "Made-to-order meals and fresh grab-and-go options prepared daily for your convenience.",
  },
  {
    src: "/breaktime/breaktime-store3.jpg",
    name: "Convenience Store",
    desc: "Everything you need for the road ahead. Travel essentials stocked and ready around the clock.",
  },
];

export default function BreaktimePage() {
  return (
    <main className="bg-[#F0FAFA]">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#F0FAFA]/90 backdrop-blur-sm border-b border-teal-100/60">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-teal-700/50 hover:text-teal-900 transition-colors duration-200"
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

      {/* ─── SPLIT HERO — text left, large rounded image right ─── */}
      <section className="min-h-screen px-6 md:px-16 flex items-center pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center py-16">
          {/* Text — left */}
          <div className="flex flex-col items-start">
            <Image
              src="/breaktime/breaktime-logo1.jpg"
              alt="Breaktime"
              width={900}
              height={350}
              className="w-[360px] sm:w-[440px] md:w-[520px] max-w-full h-auto object-contain object-left mix-blend-multiply"
            />
            <div className="mt-[-35px] sm:mt-[-50px] md:mt-[-65px]">
              <p className="mb-4 text-xs tracking-[0.4em] uppercase text-teal-600 font-medium">
                24/7 Service&nbsp;&nbsp;•&nbsp;&nbsp;Dependable&nbsp;&nbsp;•&nbsp;&nbsp;Accessible
              </p>
              <h1
                className="font-black leading-none tracking-tight text-teal-950 mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Fuel Your
                <br />
                Journey
              </h1>
              <p className="text-teal-800/60 text-lg leading-relaxed mb-10 max-w-md">
                Premium destination, fresh food and everything you need to
                recharge your vehicle and yourself.
              </p>
              <Link
                href="#community"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-teal-600 text-white rounded-full px-9 py-4 hover:bg-teal-500 transition-colors duration-300"
              >
                Fuel Your Journey
              </Link>
            </div>
          </div>

          {/* Hero Slideshow — right */}
          <ImageSlideshow
            images={[
              { src: "/breaktime/breaktime-hero1.jpg", alt: "Breaktime" },
              { src: "/breaktime/breaktime-store1.jpg", alt: "Breaktime Store" },
              { src: "/breaktime/breaktime-store2.jpg", alt: "Breaktime Store" },
              { src: "/breaktime/breaktime-store3.jpg", alt: "Breaktime Store" },
            ]}
            className="rounded-3xl shadow-2xl shadow-teal-100 h-[420px] md:h-[600px]"
          />
        </div>
      </section>

      {/* ─── FOR THE COMMUNITY ─── */}
      <section id="community" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-teal-600 mb-4 font-medium">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-teal-950 max-w-2xl leading-tight">
            For the Community, food and everything in between
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storeCards.map((card) => (
            <div
              key={card.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100/80"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 mb-2">
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
      <section className="px-6 md:px-16 py-24 bg-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-teal-600 mb-4 font-medium">
            Always Here
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-teal-900 mb-6">
            Ready to Serve
          </h2>
          <p className="text-teal-700/70 text-lg leading-relaxed">
            Open 24 hours, 7 days a week. Breaktime is here whenever you need
            to refuel, refresh, and recharge.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-100 px-8 py-10 bg-[#F0FAFA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-block text-xs tracking-widest uppercase font-medium text-teal-800 border border-teal-800/25 rounded-full px-6 py-3 hover:bg-teal-800 hover:text-white transition-all duration-300"
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
          <p className="text-teal-800/40 text-xs">
            © 2024 Breaktime. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
