import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SushiScale",
  description: "Terms of Service for SushiScale",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden px-6 pt-36 pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Legal
            </div>

            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content Card */}
          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-12">
            <div className="space-y-10">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Agreement To Terms
                </h2>

                <p className="leading-8 text-slate-600">
                  By accessing or using the SushiScale website and
                  services, you agree to be bound by these Terms of
                  Service. If you do not agree with these terms,
                  please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Services
                </h2>

                <p className="leading-8 text-slate-600">
                  SushiScale provides white-label marketing
                  fulfillment services including Meta Ads
                  management, GoHighLevel setup, funnel creation,
                  landing pages, tracking systems, CRM automation,
                  and related marketing services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Client Responsibilities
                </h2>

                <p className="leading-8 text-slate-600">
                  Clients are responsible for providing accurate
                  information, timely communication, access to
                  required platforms, and payment of all agreed
                  fees. Marketing results depend on many factors,
                  including offer quality, competition, market
                  conditions, and advertising budgets.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Payments & Billing
                </h2>

                <p className="leading-8 text-slate-600">
                  Services are billed according to the agreed
                  pricing structure. Unless otherwise stated,
                  monthly fees are due in advance. Pricing may be
                  updated with reasonable notice to active clients.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  No Guarantees
                </h2>

                <p className="leading-8 text-slate-600">
                  We do not guarantee specific marketing results,
                  lead volume, revenue, return on ad spend, or
                  business outcomes. While we use proven strategies
                  and best practices, results vary based on
                  numerous factors outside our control.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Intellectual Property
                </h2>

                <p className="leading-8 text-slate-600">
                  Clients retain ownership of their brands,
                  trademarks, and business assets. SushiScale
                  retains ownership of proprietary systems,
                  processes, templates, and methodologies unless
                  otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Limitation of Liability
                </h2>

                <p className="leading-8 text-slate-600">
                  To the fullest extent permitted by law,
                  SushiScale shall not be liable for any indirect,
                  incidental, special, consequential, or punitive
                  damages arising from the use of our services or
                  website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Changes To These Terms
                </h2>

                <p className="leading-8 text-slate-600">
                  We may update these Terms of Service from time to
                  time. Continued use of our services after any
                  updates constitutes acceptance of the revised
                  terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>

                <p className="leading-8 text-slate-600">
                  If you have questions regarding these Terms of
                  Service, please contact us at:
                </p>

                <p className="mt-4 font-semibold text-blue-600">
                  sushiscale@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}