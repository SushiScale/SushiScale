"use client";

const highlights = [
  {
    title: "Meta Ads",
    description:
      "Campaign setup, optimization, creative testing, and reporting.",
  },
  {
    title: "Funnels & Landing Pages",
    description:
      "Conversion-focused pages designed to generate qualified leads.",
  },
  {
    title: "GoHighLevel",
    description:
      "CRM setup, automations, pipelines, and lead management.",
  },
  {
    title: "Tracking & Attribution",
    description:
      "Pixel setup, event tracking, and accurate reporting.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-slate-50 px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            What You Get
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Everything Needed To Generate Leads
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            We don't just run ads.
            We build the entire lead generation system from
            traffic to follow-up.
          </p>
        </div>



        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <div className="h-3 w-3 rounded-full bg-blue-600" />
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[32px] border border-slate-200 bg-white/80 p-8 text-center shadow-lg backdrop-blur-xl">
          <h3 className="text-2xl font-black text-slate-900">
            Ready To Scale Without Hiring?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We handle the fulfillment.
            You focus on getting clients and growing your agency.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Book A Free Strategy Call →
          </a>
        </div>
      </div>
    </section>
  );
}