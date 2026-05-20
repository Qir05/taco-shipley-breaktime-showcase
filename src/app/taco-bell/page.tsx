import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Taco Bell | Business Showcase",
  description: "Taco Bell — bold flavors, legendary menu since 1962.",
};

const foodItems = [
  {
    src: "/taco/taco-food-1.jpg",
    name: "Crunchwrap Supreme",
    desc: "Layers of seasoned beef, nacho cheese sauce, crispy tostada, and fresh lettuce wrapped in a warm tortilla.",
  },
  {
    src: "/taco/taco-food-2.jpg",
    name: "Seasoned Burrito",
    desc: "A perfectly grilled flour tortilla packed with bold seasoned beef, rice, and signature sauces.",
  },
  {
    src: "/taco/taco-food-3.jpg",
    name: "Signature Tacos",
    desc: "Crispy or soft shells loaded with premium ingredients and the bold flavors Taco Bell is known for.",
  },
];

export default function TacoBellPage() {
  return (
    <main className="bg-[#F2FAFF]">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#F2FAFF]/90 backdrop-blur-sm border-b border-slate-200/40">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-slate-400 hover:text-slate-800 transition-colors duration-200"
        >
          Back to Portfolio
        </Link>
        <span className="text-xs tracking-[0.4em] uppercase text-slate-400">
          Taco Bell
        </span>
      </nav>

      {/* ─── SPLIT HERO — text left, large rounded image right ─── */}
      <section className="min-h-screen px-6 md:px-16 flex items-center pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center py-16">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#702082] mb-5 font-medium">
              Est. 1962
            </p>
            <h1
              className="font-black leading-none tracking-tight text-slate-900 mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Think Outside
              <br />
              The Bun
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
              Bold flavors. Legendary menu. Cravings answered every hour of
              every day.
            </p>
            <Link
              href="#menu"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#702082] text-white rounded-full px-9 py-4 hover:bg-[#5a1a6a] transition-colors duration-300"
            >
              Live More
            </Link>
          </div>

          {/* Hero Slideshow */}
          <ImageSlideshow
            images={[
              { src: "/taco/taco-building.jpg", alt: "Taco Bell" },
              { src: "/taco/taco-station.jpg", alt: "Taco Bell Station" },
              { src: "/taco/taco-food-1.jpg", alt: "Taco Bell Food" },
              { src: "/taco/taco-food-2.jpg", alt: "Taco Bell Food" },
              { src: "/taco/taco-food-3.jpg", alt: "Taco Bell Food" },
            ]}
            className="rounded-3xl shadow-2xl shadow-slate-200 h-[420px] md:h-[600px]"
          />
        </div>
      </section>

      {/* ─── STATION — full-width rounded image with text overlay ─── */}
      <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="group relative rounded-3xl overflow-hidden shadow-lg shadow-slate-200 h-[50vh]">
          <Image
            src="/taco/taco-station.jpg"
            alt="Taco Bell Station"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.4em] uppercase text-purple-300 mb-3 font-medium">
                Fresh Every Time
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Made to Order
              </h2>
              <p className="text-white/75 leading-relaxed">
                Every item crafted fresh to your order. Bold ingredients,
                precise assembly, maximum flavor — every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOD MENU GRID ─── */}
      <section id="menu" className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-[#702082] mb-3 font-medium">
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Fan Favorites
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 px-8 py-10 bg-[#F2FAFF]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-block text-xs tracking-widest uppercase font-medium text-[#702082] border border-[#702082]/30 rounded-full px-6 py-3 hover:bg-[#702082] hover:text-white transition-all duration-300"
          >
            Back to Portfolio
          </Link>
          <p className="text-slate-400 text-xs">
            © 1962 Taco Bell. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
