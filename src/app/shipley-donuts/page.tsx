import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/ImageSlideshow";

export const metadata: Metadata = {
  title: "Shipley Donuts | Business Showcase",
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
    desc: "From hot to iced coffees and chocolate donuts are crafted with the same attention to detail.",
  },
];

const bullets = [
  "Served Hot Every Day.",
  "Fresh Daily at 5 AM.",
  "Fresh Quality Ingredients.",
];

export default function ShipleyPage() {
  return (
    <main className="bg-[#FFF8F0]">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#FFF8F0]/90 backdrop-blur-sm border-b border-amber-100/60">
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-amber-800/50 hover:text-amber-900 transition-colors duration-200"
        >
          Back to Portfolio
        </Link>
        {/* Item 16: Larger logo in nav */}
        <Image
          src="/shipley/shipley-cursive-logo.jpg"
          alt="Shipley Donuts"
          width={160}
          height={40}
          className="h-9 w-auto object-contain mix-blend-multiply"
        />
      </nav>

      {/* ─── SPLIT HERO ─── */}
      <section className="min-h-screen px-4 sm:px-6 md:px-16 flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center py-10 sm:py-16">
          {/* Item 18: Slideshow — first image replaced with Shipley outside pic.png */}
          <ImageSlideshow
            images={[
              { src: "/shipley/Shipley%20outside%20pic.png", alt: "Shipley Donuts Store" },
              { src: "/shipley/shipley-glazed%20donut.jpeg", alt: "Glazed Donut" },
              { src: "/shipley/fresh-kolaches.jpg", alt: "Fresh Kolaches" },
              { src: "/shipley/specialty-varieties.jpg", alt: "Specialty Varieties" },
              { src: "/shipley/original-glazed.jpg", alt: "Original Glazed" },
            ]}
            className="rounded-3xl shadow-2xl shadow-amber-100 h-[420px] md:h-[600px] order-2 md:order-1"
            objectFit="cover"
          />

          {/* Text */}
          <div className="order-1 md:order-2">
            {/* Item 16: Larger Shipley logo — uniform with Taco Bell */}
            <Image
              src="/shipley/shipley-cursive-logo.jpg"
              alt="Shipley Donuts"
              width={500}
              height={120}
              className="w-[240px] sm:w-[380px] md:w-[500px] h-auto object-contain mix-blend-multiply mb-4 sm:mb-6"
            />
            <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-5 font-medium">
              Since 1936
            </p>
            <h1
              className="font-black leading-none tracking-tight text-amber-950 mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Make Life
              <br />
              Delicious.
            </h1>
            <p className="text-amber-900/60 text-lg leading-relaxed mb-10 max-w-md">
              Handcrafted donuts and kolaches made fresh daily with the finest
              ingredients.
            </p>
            {/* Item 17: Shipley button — red theme */}
            <Link
              href="#products"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#CC2027] text-white rounded-full px-9 py-4 hover:bg-[#b01d22] transition-colors duration-300"
            >
              Glaze Craze
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PERFECTLY GLAZED ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-4 font-medium">
              Our Craft
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-amber-950 mb-6">
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
          {/* Item 20: Replace with donut-glazing.png */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg shadow-amber-100 h-[380px]">
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
      {/* Item 21: Center alignment for heading */}
      <section id="products" className="px-4 sm:px-6 md:px-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-3 font-medium">
            Our Selection
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-amber-950">
            Handcrafted Daily
          </h2>
        </div>

        {/* Item 22: Restored old card format — object-contain with cream background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/80"
            >
              <div className="relative h-56 overflow-hidden bg-[#FFF8F0]">
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
                <p className="text-slate-500 text-xs leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ORIGINAL RECIPE ─── */}
      <section className="px-6 md:px-16 py-24 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-4 font-medium">
            Our Heritage
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-amber-950 mb-6">
            Original Recipe
          </h2>
          <p className="text-amber-900/60 text-lg leading-relaxed">
            Recipes have been consistent through the years together with our
            master bakers.
          </p>
        </div>
      </section>

      {/* Item 23: Footer — © All rights reserved., centered */}
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
            © All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
