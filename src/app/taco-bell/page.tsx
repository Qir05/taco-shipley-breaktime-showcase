import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Taco Bell | Business Showcase",
  description: "Taco Bell — bold flavors, legendary menu since 1962.",
};

// Item 14: Updated food card images
const foodItems = [
  {
    src: "/taco/Luxe%20cravings%20box%202.png",
    name: "Luxe Cravings Box",
    desc: "Build your own Luxe Cravings Box. We turned up the Luxe in this lineup with the new options, including vegetarian faves.",
  },
  {
    src: "/taco/Crunchwrap%20Supreme.png",
    name: "Crunchwrap Supreme",
    desc: "A warm flour tortilla filled with seasoned beef, warm Nacho Cheese sauce, a crispy tostada shell, lettuce, diced tomatoes and reduced-fat sour cream that is grilled to go.",
  },
  {
    src: "/taco/Burrito-2.png",
    name: "Signature Tacos",
    desc: "Crispy or soft shells loaded with premium ingredients and the bold flavors Taco Bell is known for.",
  },
];

export default function TacoBellPage() {
  return (
    <main className="bg-[#F2FAFF]">
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
      <section className="min-h-screen px-4 sm:px-6 md:px-16 flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center py-10 sm:py-16">
          {/* Text */}
          <div className="flex flex-col items-start">
            <Image
              src="/taco/tacobell-logo2.jpg"
              alt="Taco Bell"
              width={900}
              height={300}
              className="w-[280px] sm:w-[420px] md:w-[560px] max-w-full h-auto object-contain object-left mix-blend-multiply"
              style={{ mixBlendMode: "multiply" }}
            />
            <div className="mt-[-25px] sm:mt-[-40px] md:mt-[-70px]">
              {/* Item 10: Since 1962 */}
              <p className="mb-3 text-xs tracking-[0.4em] uppercase text-[#702082] font-medium">
                Since 1962
              </p>
              <h1
                className="font-black leading-none tracking-tight text-slate-900 mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Think Outside
                <br />
                The Bun.
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
          </div>

          {/* Item 11: Updated slideshow images */}
          <ImageSlideshow
            images={[
              { src: "/taco/tacobell%20landing%20page.png", alt: "Taco Bell" },
              { src: "/taco/tacobell%20store%20side-view.png", alt: "Taco Bell Store" },
              { src: "/taco/Luxe%20cravings%20box%202.png", alt: "Luxe Cravings Box" },
              { src: "/taco/Crunchwrap%20Supreme.png", alt: "Crunchwrap Supreme" },
              { src: "/taco/Burrito-2.png", alt: "Seasoned Burrito" },
            ]}
            className="rounded-3xl shadow-2xl shadow-slate-200 h-[300px] sm:h-[420px] md:h-[600px]"
          />
        </div>
      </section>

      {/* Item 12: Removed "Made to Order" section */}

      {/* ─── SIGNATURE FLAVORS GRID ─── */}
      {/* Item 13: Renamed to "Signature Flavors", centered, violet color */}
      <section id="menu" className="px-4 sm:px-6 md:px-16 py-14 sm:py-20 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "#702082" }}
          >
            Signature Flavors
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
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
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

      {/* Item 15: Footer — violet background, centered layout */}
      <footer className="px-4 sm:px-8 py-10 sm:py-14 bg-[#702082]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
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
