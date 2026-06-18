"use client";

import {
  Megaphone,
  LayoutTemplate,
  BarChart3,
  MessageSquare,
  PenTool,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Campaign setup, optimization, targeting, testing, and ongoing management.",
  },
  {
    icon: Workflow,
    title: "GoHighLevel",
    description:
      "CRM setup, automations, pipelines, lead routing, and account management.",
  },
  {
    icon: LayoutTemplate,
    title: "Funnels & Landing Pages",
    description:
      "High-converting funnels built to turn traffic into booked appointments.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "SMS, email, and automation sequences that engage leads instantly.",
  },
  {
    icon: PenTool,
    title: "Creatives & Copy",
    description:
      "Ad creatives and messaging tailored to each niche, offer, and audience.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    description:
      "Conversion tracking, attribution, dashboards, and client reporting.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

      <div className="absolute left-0 top-32 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            What We Handle
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Everything Your Clients Need.
            <br />
            <span className="text-blue-600">
              Nothing You Have To Touch.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We become your fulfillment team behind the scenes.
            Your clients see your brand. We do the work.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  <Icon
                    size={26}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                White-Label Fulfillment
              </p>

              <h3 className="text-3xl font-black tracking-tight text-slate-900">
                Keep The Client.
                <br />
                We Handle The Delivery.
              </h3>

              <p className="mt-4 max-w-2xl text-slate-600">
                No hiring. No training. No managing freelancers.
                Just a complete lead generation system delivered
                under your brand.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}