import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Shipley Donuts | Break Time Retail",
  description: "Shipley Do-Nuts — hot, fresh, and iconic since 1936.",
};

const products = [
  {
    src: "/shipley/shipley-glazed%20donut.jpeg",
    name: "Original Glazed",
    desc: "Light, fluffy, and golden — our signature glaze recipe unchanged since 1936.",
  },
  {
    src: "/shipley/fresh-kolaches.jpg",
    name: "Fresh Kolaches",
    desc: "Savory pastries filled with premium sausage, cheese and other savory delights.",
  },
  {
    src: "/shipley/specialty-varieties.jpg",
    name: "Specialty Varieties",
    desc: "From our hot and iced coffees to our chocolate donuts, everything is crafted with the same attention to detail.",
  },
];

const bullets = [
  "Served Hot Every Day.",
  "Fresh Daily at 5 AM.",
  "Crafted with the Finest Ingredients",
];

export default function ShipleyPage() {
  return (
    <main className="bg-[#FFF8F0] overflow-x-hidden">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#FFF8F0]/90 backdrop-blur-sm border-b border-amber-100/60">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-amber-800/50 hover:text-amber-900 transition-colors duration-200"
        >
          Back to Portfolio
        </Link>
        <Image
          src="/shipley/shipley-cursive-logo.jpg"
          alt="Shipley Donuts"
          width={160}
          height={40}
          className="h-9 w-auto object-contain mix-blend-multiply"
        />
      </nav>

      {/* ─── SPLIT HERO ─── */}
      {/* Mobile: stacked with padding. md+: full-viewport centered. */}
      <section className="px-4 sm:px-6 md:px-16 pt-16 pb-12 sm:pt-24 sm:pb-16 md:min-h-screen md:flex md:items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-24 items-center md:py-16">
          {/* Slideshow — original-glazed.jpg removed */}
          <ImageSlideshow
            images={[
              { src: "/shipley/Shipley%20outside%20pic.png", alt: "Shipley Donuts Store" },
              { src: "/shipley/shipley-glazed%20donut.jpeg", alt: "Glazed Donut" },
              { src: "/shipley/fresh-kolaches.jpg", alt: "Fresh Kolaches" },
              { src: "/shipley/specialty-varieties.jpg", alt: "Specialty Varieties" },
            ]}
            className="rounded-2xl sm:rounded-3xl shadow-2xl shadow-amber-100 h-[220px] sm:h-[340px] md:h-[520px] order-2 md:order-1"
            objectFit="cover"
          />

          {/* Text */}
          <div className="order-1 md:order-2 flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/shipley/shipley-cursive-logo.jpg"
              alt="Shipley Donuts"
              width={500}
              height={120}
              className="w-[200px] sm:w-[320px] md:w-[460px] max-w-full h-auto object-contain mix-blend-multiply mb-3 sm:mb-5 mx-auto md:mx-0"
            />
            <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-4 font-medium">
              Since 1936
            </p>
            <h1
              className="font-black leading-none tracking-tight text-amber-950 mb-5"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
            >
              Make Life
              <br />
              Delicious.
            </h1>
            <p className="text-amber-900/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Handcrafted donuts and kolaches made fresh daily with the finest
              ingredients.
            </p>
            <Link
              href="#products"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#CC2027] text-white rounded-full px-8 py-3.5 sm:px-9 sm:py-4 hover:bg-[#b01d22] transition-colors duration-300"
            >
              Glaze Craze
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PERFECTLY GLAZED ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-24 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-4 font-medium">
              Our Craft
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 mb-5">
              Perfectly Glazed
            </h2>
            <p className="text-amber-900/60 leading-relaxed mb-8 max-w-md">
              Nearly 90 years of handcrafted recipes made fresh daily using
              premium ingredients and time-honored techniques.
            </p>
            <ul className="space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-amber-900/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC2027] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile-aware height */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-amber-100 h-[220px] sm:h-[300px] md:h-[380px]">
            <Image
              src="/shipley/donut-glazing.png"
              alt="Glazed Donuts"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── HANDCRAFTED DAILY ─── */}
      <section id="products" className="px-4 sm:px-6 md:px-16 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-3 font-medium">
            Our Selection
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950">
            Handcrafted Daily
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/80"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-[#FFF8F0]">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#CC2027] mb-1.5">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ORIGINAL RECIPE ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-4 font-medium">
            Our Heritage
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 mb-5">
            Original Recipe
          </h2>
          <p className="text-amber-900/60 text-base sm:text-lg leading-relaxed">
            Recipes have been consistent through the years together with our
            master bakers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-100 px-4 sm:px-8 py-8 sm:py-10 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
          <Link
            href="/"
            className="inline-block text-xs tracking-widest uppercase font-medium text-amber-800 border border-amber-800/25 rounded-full px-6 py-3 hover:bg-amber-800 hover:text-white transition-all duration-300"
          >
            Back to Portfolio
          </Link>
          <Image
            src="/shipley/shipley-cursive-logo.jpg"
            alt="Shipley Donuts"
            width={160}
            height={40}
            className="h-7 w-auto object-contain mix-blend-multiply opacity-50"
          />
          <p className="text-amber-800/40 text-xs">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
