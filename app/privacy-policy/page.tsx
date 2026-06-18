export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden px-6 pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Legal
            </div>

            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Last updated: June 2026
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-12">
            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Introduction
                </h2>

                <p className="leading-8 text-slate-600">
                  SushiScale ("we", "our", or "us") respects your
                  privacy and is committed to protecting your
                  personal information. This Privacy Policy explains
                  how we collect, use, and safeguard information
                  when you visit our website or contact us about our
                  services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Information We Collect
                </h2>

                <p className="mb-4 leading-8 text-slate-600">
                  We may collect information that you voluntarily
                  provide through our forms, including:
                </p>

                <ul className="space-y-2 text-slate-600">
                  <li>• Full Name</li>
                  <li>• Email Address</li>
                  <li>• Phone Number</li>
                  <li>• Agency Name</li>
                  <li>• Website URL (if provided)</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  How We Use Your Information
                </h2>

                <p className="mb-4 leading-8 text-slate-600">
                  We use the information we collect to:
                </p>

                <ul className="space-y-2 text-slate-600">
                  <li>• Respond to inquiries</li>
                  <li>• Schedule strategy calls</li>
                  <li>• Deliver our services</li>
                  <li>• Improve our website and offerings</li>
                  <li>• Communicate important updates</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Cookies & Analytics
                </h2>

                <p className="leading-8 text-slate-600">
                  We may use cookies, analytics tools, and tracking
                  technologies to understand website usage,
                  improve performance, and measure marketing
                  effectiveness.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Data Sharing
                </h2>

                <p className="leading-8 text-slate-600">
                  We do not sell your personal information. We may
                  share information with trusted service providers
                  that help us operate our website, communicate with
                  customers, or deliver services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Data Security
                </h2>

                <p className="leading-8 text-slate-600">
                  We take reasonable measures to protect your
                  information from unauthorized access, disclosure,
                  alteration, or destruction. However, no internet
                  transmission can be guaranteed to be completely
                  secure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Your Rights
                </h2>

                <p className="leading-8 text-slate-600">
                  You may request access to, correction of, or
                  deletion of your personal information by
                  contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>

                <p className="leading-8 text-slate-600">
                  If you have questions about this Privacy Policy,
                  please contact us at:
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