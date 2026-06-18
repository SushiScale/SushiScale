"use client";

const problems = [
  "Ads that don't convert and waste budget",
  "Lead costs so high the margins disappear",
  "Poor follow-up causing missed opportunities",
  "Too much time spent on client delivery",
  "No predictable lead generation system",
];

const benefits = [
  "White-labeled under your brand",
  "Flat monthly pricing",
  "48-hour onboarding",
  "No long-term contracts",
];

export default function Problem() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              The Real Problem
            </div>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Most Businesses Don't Need More Traffic.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              They need more qualified leads and a system that
              consistently turns clicks into conversations.
            </p>

            <div className="mt-10 space-y-4">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-red-500" />

                  <p className="text-slate-700">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[32px] bg-blue-600 p-8 text-white shadow-2xl">
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                The SushiScale Promise
              </div>

              <h3 className="text-3xl font-black tracking-tight">
                We Build The Entire Lead Generation System.
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                Most agencies only focus on ads.
                <br />
                We build the complete machine:
                ads, funnels, landing pages, CRM,
                automation, tracking, and follow-up.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
              <h4 className="mb-6 font-bold text-slate-900">
                Included With Every Client
              </h4>

              <div className="space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
            >
              Book A Free Strategy Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}