"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 pt-24 pb-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* CTA Banner */}
        <div className="mb-20 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
                Ready To Scale?
              </p>

              <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white md:text-4xl">
                Keep the clients.
                <br />
                Let us handle the fulfillment.
              </h2>
            </div>

            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
            >
              Book A Free Strategy Call
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black tracking-tight text-white">
              <span className="text-blue-500">Sushi</span>Scale
            </h3>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              We help business owners create consistent leads using
              Meta Ads, GHL, high-converting funnels, landing pages,
              and automated follow-up systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </h4>

            <div className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </h4>

            <div className="space-y-3">
              {legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="mailto:sushiscale@gmail.com"
                className="block pt-4 text-blue-400 transition-colors hover:text-blue-300"
              >
                sushiscale@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-sm text-slate-500">
              © {year} SushiScale. All rights reserved.
            </p>

            <p className="text-sm text-slate-600">
              Results may vary. Past performance does not guarantee
              future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}