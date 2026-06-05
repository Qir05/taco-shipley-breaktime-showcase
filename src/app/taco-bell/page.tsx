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
    src: "/taco/Luxe%20Cravings%20Box.png",
    name: "Luxe Cravings Box",
    desc: "Build your own Luxe Cravings Box. We turned up the Luxe in this lineup with the new options, including vegetarian faves.",
  },
  {
    src: "/taco/Crunchwrap%20Supreme.png",
    name: "Crunchwrap Supreme",
    desc: "A warm flour tortilla filled with seasoned beef, warm Nacho Cheese sauce, a crispy tostada shell, lettuce, diced tomatoes and reduced-fat sour cream that is grilled to go.",
  },
  {
    src: "/taco/Burrito-1.png",
    name: "Signature Tacos",
    desc: "Crispy or soft shells loaded with premium ingredients and the bold flavors Taco Bell is known for.",
  },
];

export default function TacoBellPage() {
  return (
    <main className="bg-[#F2FAFF] overflow-x-hidden">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#F2FAFF]/90 backdrop-blur-sm border-b border-slate-200/40">
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

      {/* ─── SPLIT HERO ─── */}
      {/* Mobile: stacked with padding. md+: full-viewport centered. */}
      <section className="px-4 sm:px-6 md:px-16 pt-20 pb-12 sm:pt-24 sm:pb-16 md:min-h-screen md:flex md:items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-24 items-center md:py-16">
          {/* Text */}
          <div className="flex flex-col items-start">
            <Image
              src="/taco/tacobell-logo2.jpg"
              alt="Taco Bell"
              width={900}
              height={300}
              className="w-[200px] sm:w-[320px] md:w-[480px] max-w-full h-auto object-contain object-left mix-blend-multiply"
              style={{ mixBlendMode: "multiply" }}
            />
            <div className="mt-[-12px] sm:mt-[-28px] md:mt-[-60px]">
              <p className="mb-3 text-xs tracking-[0.4em] uppercase text-[#702082] font-medium">
                Since 1962
              </p>
              <h1
                className="font-black leading-none tracking-tight text-slate-900 mb-5"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
              >
                Think Outside
                <br />
                The Bun.
              </h1>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Bold flavors. Legendary menu. Cravings answered every hour of
                every day.
              </p>
              <Link
                href="#menu"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#702082] text-white rounded-full px-8 py-3.5 sm:px-9 sm:py-4 hover:bg-[#5a1a6a] transition-colors duration-300"
              >
                Live More
              </Link>
            </div>
          </div>

          {/* Slideshow — side-view first */}
          <ImageSlideshow
            images={[
              { src: "/taco/tacobell%20store%20side-view.png", alt: "Taco Bell Store" },
              { src: "/taco/tacobell%20landing%20page.png", alt: "Taco Bell" },
              { src: "/taco/Luxe%20Cravings%20Box.png", alt: "Luxe Cravings Box" },
              { src: "/taco/Crunchwrap%20Supreme.png", alt: "Crunchwrap Supreme" },
              { src: "/taco/Burrito-1.png", alt: "Seasoned Burrito" },
            ]}
            className="rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-200 h-[240px] sm:h-[380px] md:h-[560px]"
          />
        </div>
      </section>

      {/* ─── SIGNATURE FLAVORS GRID ─── */}
      <section id="menu" className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ color: "#702082" }}
          >
            Signature Flavors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {foodItems.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5">
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

      {/* Footer — violet background, centered */}
      <footer className="px-4 sm:px-8 py-8 sm:py-12 bg-[#702082]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
          <Link
            href="/"
            className="inline-block text-xs tracking-widest uppercase font-medium text-white/80 border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-[#702082] transition-all duration-300"
          >
            Back to Portfolio
          </Link>
          <p className="text-white/70 text-xs">
            © 2026 All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
