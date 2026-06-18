"use client";

import { useState } from "react";

type Step = "q1" | "q2" | "form" | "success";

export default function Booking() {
  const [step, setStep] = useState<Step>("q1");

  const [formData, setFormData] = useState({
    agencyName: "",
    fullName: "",
    email: "",
    phone: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const steps: Step[] = ["q1", "q2", "form"];
  const currentStep = steps.indexOf(step);

  const clientOptions = [
    "0 clients (just starting out)",
    "1–3 clients",
    "4–10 clients",
    "11–25 clients",
    "25+ clients",
  ];

  const fields = [
    {
      key: "agencyName",
      label: "Agency Name",
      type: "text",
      required: true,
    },
    {
      key: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      key: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
    },
    {
      key: "website",
      label: "Website (Optional)",
      type: "url",
      required: false,
    },
  ];

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStep("success");
      } else {
        alert("Failed to send booking.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-slate-50 px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Free Strategy Call
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Let's See If We're A Fit
          </h2>

          <p className="mt-4 text-slate-600">
            Takes less than 60 seconds.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-10">
          {step !== "success" && (
            <div className="mb-10 flex justify-center gap-3">
              {steps.map((s, index) => (
                <div
                  key={s}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${index <= currentStep
                    ? "scale-110 bg-blue-600"
                    : "bg-slate-200"
                    }`}
                />
              ))}
            </div>
          )}

          {step === "q1" && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Question 1 of 2
              </p>

              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                How many active clients do you currently have?
              </h3>

              <div className="grid gap-4">
                {clientOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setStep("q2")}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="font-semibold text-slate-900">
                      {option}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Continue →
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "q2" && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Question 2 of 2
              </p>

              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                Can you commit to a minimum of $270 per client each month?
              </h3>

              <div className="grid gap-4">
                <button
                  onClick={() => setStep("form")}
                  className="rounded-2xl border border-green-200 bg-green-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="font-semibold text-green-700">
                    ✓ Yes, I Can Commit
                  </div>
                </button>

                <button
                  onClick={() =>
                    alert(
                      "No problem. Reach out when you're ready."
                    )
                  }
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="font-semibold text-slate-600">
                    Not Right Now
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleSubmit}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Almost Done
              </p>

              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                Tell Us About Your Agency
              </h3>

              <div className="space-y-5">
                {fields.map((field) => (
                  <div key={field.key}>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      required={field.required}
                      value={
                        formData[
                        field.key as keyof typeof formData
                        ]
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.key]: e.target.value,
                        })
                      }
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-4
                        text-sm
                        outline-none
                        transition-all
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-600
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-700
                    hover:shadow-xl
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Book My Strategy Call →"}
                </button>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 text-4xl text-green-600 shadow-lg">
                ✓
              </div>

              <div className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                Application Received
              </div>

              <h3 className="text-4xl font-black tracking-tight text-slate-900">
                Thanks For Applying
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-lg text-slate-600">
                We've received your application and our team is reviewing it now.
                If it looks like we're a good fit, we'll reach out with the next
                steps and your strategy call invitation.
              </p>

              <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-6 text-left">
                <h4 className="mb-3 font-bold text-slate-900">
                  What Happens Next?
                </h4>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Our team reviews your application.</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>
                      If approved, we'll send you a booking link for your
                      strategy call.
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>
                      We'll map out a growth plan tailored to your agency.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                ⏰ Most applications are reviewed within 24 hours.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}