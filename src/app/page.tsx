import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#EEF7FF] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-3 sm:py-4 flex items-center justify-end bg-[#EEF7FF]/90 backdrop-blur-sm">
        <div className="flex gap-0.5">
          <Link href="/taco-bell" className="text-[10px] sm:text-xs tracking-wide sm:tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap">
            Taco Bell
          </Link>
          <Link href="/shipley-donuts" className="text-[10px] sm:text-xs tracking-wide sm:tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap">
            Shipley Donuts
          </Link>
          <Link href="/breaktime" className="text-[10px] sm:text-xs tracking-wide sm:tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap">
            Breaktime
          </Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      {/* Item 1: Reduced top space — min-h-[55vh] instead of min-h-screen */}
      <section className="sm:min-h-[70vh] flex flex-col items-center sm:justify-center px-4 sm:px-6 text-center pt-20 sm:pt-16 pb-8 sm:pb-0">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-slate-400 mb-6 sm:mb-8">
          Taco Bell&nbsp;&nbsp;•&nbsp;&nbsp;Shipley Donuts&nbsp;&nbsp;•&nbsp;&nbsp;Breaktime
        </p>
        <h1
          className="font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
        >
          <span className="block text-slate-900">Where Soul</span>
          <span className="block bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Meets Energy
          </span>
        </h1>
      </section>

      {/* ─── TACO BELL SECTION ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="flex flex-col items-start">
            {/* Item 2: Uniform logo size across all three sections */}
            <Image
              src="/taco/tacobell-logo2.jpg"
              alt="Taco Bell"
              width={900}
              height={300}
              className="w-[200px] sm:w-[300px] md:w-[400px] max-w-full h-auto object-contain object-left mix-blend-multiply"
              style={{ mixBlendMode: "multiply" }}
            />
            <div className="mt-[-15px] sm:mt-[-28px] md:mt-[-50px]">
              {/* Item 3: Since 1962 */}
              <p className="mb-3 text-xs tracking-[0.4em] uppercase text-slate-400">
                Since 1962
              </p>
              {/* Item 5: Uniform heading size — text-4xl sm:text-5xl md:text-6xl */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-none mb-4 sm:mb-5">
                Think Outside The Bun.
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
                Bold flavors that defy the ordinary. A legendary menu built for
                every craving, every hour of the day.
              </p>
              <Link
                href="/taco-bell"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#702082] text-white rounded-full px-9 py-4 hover:bg-[#5a1a6a] transition-colors duration-300"
              >
                Live More
              </Link>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[300px] sm:h-[420px] md:h-[520px]">
            <Image
              src="/taco/tacobell%20landing%20page.png"
              alt="Taco Bell"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── SHIPLEY SECTION ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Item 19: Replace shipley-landing-page.jpg with Shipley landing page.png */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[300px] sm:h-[420px] md:h-[520px] order-2 md:order-1">
            <Image
              src="/shipley/Shipley%20landing%20page.png"
              alt="Shipley Donuts"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            {/* Item 2: Uniform logo size */}
            <Image
              src="/shipley/shipley-cursive-logo.jpg"
              alt="Shipley Donuts"
              width={500}
              height={120}
              className="w-[200px] sm:w-[300px] md:w-[400px] h-auto object-contain mix-blend-multiply mb-4 sm:mb-5"
            />
            <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mb-4 sm:mb-5">
              Since 1936
            </p>
            {/* Item 5: Uniform heading size */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-none mb-4 sm:mb-5">
              Make Life Delicious.
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
              Handcrafted donuts and kolaches made fresh daily with the finest
              ingredients.
            </p>
            {/* Item 7: Shipley button — Shipley red */}
            <Link
              href="/shipley-donuts"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#CC2027] text-white rounded-full px-9 py-4 hover:bg-[#b01d22] transition-colors duration-300"
            >
              Glaze Craze
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BREAKTIME SECTION ─── */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="flex flex-col items-start">
            {/* Item 2: Uniform logo size */}
            <Image
              src="/breaktime/breaktime-logo1.jpg"
              alt="Breaktime"
              width={900}
              height={350}
              className="w-[200px] sm:w-[300px] md:w-[400px] max-w-full h-auto object-contain object-left mix-blend-multiply"
            />
            <div className="mt-[-12px] sm:mt-[-22px] md:mt-[-42px]">
              <p className="mb-3 text-xs tracking-[0.4em] uppercase text-slate-400">
                24/7 Service
              </p>
              {/* Item 5: Uniform heading size */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-none mb-4 sm:mb-5">
                Fuel Your Journey
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
                Premium destination, fresh food and everything you need to
                recharge your vehicle and yourself.
              </p>
              {/* Item 8: Breaktime button — dark blue */}
              <Link
                href="/breaktime"
                className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-[#1B3A6B] text-white rounded-full px-9 py-4 hover:bg-[#142e58] transition-colors duration-300"
              >
                Fuel Your Journey
              </Link>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[300px] sm:h-[420px] md:h-[520px]">
            <Image
              src="/breaktime/B71A4840-HDR-Edit%20-%20front%20page.jpg"
              alt="Breaktime"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Item 9: Footer — white bg, centered, copyright on top, logos below */}
      <footer className="border-t border-slate-200/60 px-4 sm:px-8 py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
          {/* Item 6: © All rights reserved */}
          <p className="text-[#6B7A90] text-xs">© 2026 All rights reserved</p>
          <div className="flex items-center gap-6 sm:gap-10">
            <Link href="/taco-bell" className="opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
              <Image
                src="/taco/tacobell-logo2.jpg"
                alt="Taco Bell"
                width={100}
                height={67}
                className="h-8 w-auto object-contain mix-blend-multiply"
                style={{ mixBlendMode: "multiply" }}
              />
            </Link>
            <Link href="/shipley-donuts" className="opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
              <Image
                src="/shipley/shipley-cursive-logo.jpg"
                alt="Shipley Donuts"
                width={160}
                height={40}
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <Link href="/breaktime" className="opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
              <Image
                src="/breaktime/breaktime-logo1.jpg"
                alt="Breaktime"
                width={120}
                height={50}
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
