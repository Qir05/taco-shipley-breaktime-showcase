import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#EEF7FF]">
      {/* Nav — right-aligned only, no left text */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-end bg-[#EEF7FF]/90 backdrop-blur-sm">
        <div className="flex gap-1">
          <Link
            href="/taco-bell"
            className="text-xs tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            Taco Bell
          </Link>
          <Link
            href="/shipley-donuts"
            className="text-xs tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            Shipley Donuts
          </Link>
          <Link
            href="/breaktime"
            className="text-xs tracking-widest uppercase text-[#50627A] hover:text-[#111827] hover:bg-white/55 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            Breaktime
          </Link>
        </div>
      </nav>

      {/* ─── HERO — full viewport, centered ─── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mb-8">
          Taco Bell&nbsp;&nbsp;•&nbsp;&nbsp;Shipley Donuts&nbsp;&nbsp;•&nbsp;&nbsp;Breaktime
        </p>
        <h1
          className="font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          <span className="block text-slate-900">Where Soul</span>
          <span className="energy-gradient-text block bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Meets Energy
          </span>
        </h1>
      </section>

      {/* ─── TACO BELL SECTION — text left, image right ─── */}
      <section className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mb-5">
              Est. 1962
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none mb-5">
              Taco Bell
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
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
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[420px] md:h-[520px]">
            <Image
              src="/taco/taco-building.jpg"
              alt="Taco Bell"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── SHIPLEY SECTION — image left, text right ─── */}
      <section className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[420px] md:h-[520px] order-2 md:order-1">
            <Image
              src="/shipley/shipley-landing-page.jpg"
              alt="Shipley Donuts"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-16 w-[230px] md:w-[330px] mb-5">
              <Image
                src="/shipley/shipley-cursive-logo.jpg"
                alt="Shipley Donuts"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mb-5">
              Since 1936
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none mb-5">
              Hot. Fresh. Iconic.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
              Handcrafted donuts and kolaches made fresh daily with the finest
              ingredients.
            </p>
            <Link
              href="/shipley-donuts"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-amber-500 text-white rounded-full px-9 py-4 hover:bg-amber-400 transition-colors duration-300"
            >
              Glaze Craze
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BREAKTIME SECTION — text left, image right ─── */}
      <section className="px-6 md:px-16 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="relative h-16 w-[230px] md:w-[330px] mb-5">
              <Image
                src="/breaktime/breaktimelogo.jpg"
                alt="Breaktime"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mb-5">
              24/7 Service
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none mb-5">
              Fuel Your Journey
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
              Premium destination, fresh food and everything you need to
              recharge your vehicle and yourself.
            </p>
            <Link
              href="/breaktime"
              className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-teal-600 text-white rounded-full px-9 py-4 hover:bg-teal-500 transition-colors duration-300"
            >
              Fuel Your Journey
            </Link>
          </div>
          <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 h-[420px] md:h-[520px]">
            <Image
              src="/breaktime/breaktime-hero1.jpg"
              alt="Breaktime"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 px-8 py-10 bg-[#EEF7FF]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            {/* Taco Bell — styled text to match logo visual height */}
            <Link
              href="/taco-bell"
              className="text-sm font-bold tracking-wide uppercase text-[#702082] hover:opacity-75 transition-opacity duration-200 leading-none"
            >
              Taco Bell
            </Link>
            {/* Shipley cursive logo */}
            <Link
              href="/shipley-donuts"
              className="relative h-8 w-36 opacity-70 hover:opacity-100 transition-opacity duration-200 block flex-shrink-0"
            >
              <Image
                src="/shipley/shipley-cursive-logo.jpg"
                alt="Shipley Donuts"
                fill
                className="object-contain"
              />
            </Link>
            {/* Breaktime logo */}
            <Link
              href="/breaktime"
              className="relative h-8 w-28 opacity-70 hover:opacity-100 transition-opacity duration-200 block flex-shrink-0"
            >
              <Image
                src="/breaktime/breaktimelogo.jpg"
                alt="Breaktime"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-[#6B7A90] text-xs">
            © 2026 Taco Bell&nbsp;•&nbsp;Shipley Donuts&nbsp;•&nbsp;Breaktime
          </p>
        </div>
      </footer>
    </main>
  );
}
