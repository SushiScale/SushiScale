"use client";

import { ArrowRight, CheckCircle, Tag } from "lucide-react";

const benefits = [
  "Meta Ads",
  "GoHighLevel",
  "Funnels",
  "Landing Pages",
  "Automations",
  "Tracking",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-36 pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-0 top-32 h-[300px] w-[300px] rounded-full bg-sky-400/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Attention Agency Owners
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          We Help Businesses
          <span className="text-blue-600">
            {" "}
            Generate Consistent Leads
          </span>
          <br />
          Using Meta Ads, Funnels & Automation.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600">
          We'll handle all your Facebook ads, funnels,
          GoHighLevel, creatives, tracking, and follow-up
          systems.
          <br />
          You keep the client, mark up the service, and stay
          focused on sales.
        </p>

        {/* Offer Cards */}
        <div className="mt-10 flex flex-wrap items-stretch gap-4">
          {/* Main Offer */}
          <div className="inline-flex items-center rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
            <span className="font-semibold text-slate-900">
              Starting at
            </span>
            <span className="ml-2 text-xl font-black text-blue-600">
              $270/month per client
            </span>
          </div>

          {/* GHL Setup — same style as main offer */}
          <div className="inline-flex items-center rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
            <span className="font-semibold text-slate-900">
              GHL Setup:
            </span>
            <span className="ml-2 text-xl font-black text-blue-600">
              $150–$400
            </span>
          </div>

          {/* Discount Badge — inline card matching the row */}
          <div className="inline-flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
              <Tag size={18} className="text-green-600" />
            </div>
            <div>
              <div className="text-xl font-black text-green-600">20% OFF</div>
              <div className="text-xs font-medium text-green-700">
                Until Jan 1, 2027
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#booking"
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            Book Free Strategy Call
            <ArrowRight size={18} />
          </a>

          <a
            href="#services"
            className="
              inline-flex
              items-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-7
              py-4
              font-semibold
              text-slate-700
              transition-all
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            See What's Included
          </a>
        </div>

        {/* Service Pills */}
        <div className="mt-16 flex flex-wrap gap-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                text-slate-700
                shadow-sm
              "
            >
              <CheckCircle
                size={16}
                className="text-green-600"
              />
              {item}
            </div>
          ))}
        </div>

        {/* Trust Card */}
        <div className="mt-16 max-w-4xl rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <span className="text-2xl">🚀</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                White-Label Fulfillment
              </h3>

              <p className="mt-2 text-slate-600">
                Your clients never know we're involved.
                Everything is delivered under your agency's
                brand while you focus on growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}