import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safe = {
      agencyName: escapeHtml(data.agencyName),
      fullName: escapeHtml(data.fullName),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      website: data.website ? escapeHtml(data.website) : "Not provided",
      activeClients: escapeHtml(data.activeClients || "Not answered"),
      canCommit270: escapeHtml(data.canCommit270 || "Not answered"),
    };

    const qaRows = [
      ["How many active clients do you currently have?", safe.activeClients],
      [
        "Can you commit to a minimum of $270 per client each month?",
        safe.canCommit270,
      ],
    ];

    const contactRows: [string, string, string, boolean][] = [
      ["🏢", "Agency name", safe.agencyName, false],
      ["👤", "Full name", safe.fullName, false],
      ["✉️", "Email", safe.email, true],
      ["📞", "Phone", safe.phone, false],
      ["🌐", "Website", safe.website, !!data.website],
    ];

    // Plain-text version (improves deliverability and works in any mail client)
    const text = `New strategy call application

QUALIFICATION ANSWERS
Q1. How many active clients do you currently have?
${data.activeClients || "Not answered"}

Q2. Can you commit to a minimum of $270 per client each month?
${data.canCommit270 || "Not answered"}

CONTACT DETAILS
Agency name: ${data.agencyName}
Full name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Website: ${data.website || "Not provided"}

Received: ${new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}`;

    await transporter.sendMail({
      from: `"Booking System" <${process.env.EMAIL_USER}>`,
      to: "sushiscale@gmail.com",
      replyTo: data.email,
      subject: `New Strategy Call Booking - ${data.agencyName}`,
      text,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;padding:0;background:#f4f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
        <tr><td align="center">
          <table width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e3;">

            <!-- Header -->
            <tr><td style="background:#1a1a2e;padding:32px;">
              <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(94,191,143,0.18);color:#5ebf8f;font-size:11px;font-weight:500;border-radius:100px;padding:4px 10px;margin-bottom:16px;">
                ✓ New booking received
              </div>
              <div style="width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:22px;">
                📅
              </div>
              <h1 style="margin:0 0 4px;font-size:20px;font-weight:500;color:#ffffff;letter-spacing:-0.02em;">Strategy Call Booking</h1>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.55);">Someone just scheduled a call through your website</p>
            </td></tr>

            <!-- Body -->
            <tr><td style="padding:28px 32px;">
              <p style="margin:0 0 24px;font-size:12px;color:#888;">
                🕐 Received · ${new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}
              </p>

              <!-- Qualification answers -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:500;color:#aaa;text-transform:uppercase;letter-spacing:0.08em;">Qualification answers</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e3;border-radius:8px;overflow:hidden;margin-bottom:28px;">
                ${qaRows
                  .map(
                    ([question, answer], i, arr) => `
                  <tr style="border-bottom:${i < arr.length - 1 ? "1px solid #e5e5e3" : "none"};">
                    <td style="padding:14px;">
                      <div style="font-size:12px;color:#777;margin-bottom:4px;">Q${i + 1}. ${question}</div>
                      <div style="font-size:14px;font-weight:600;color:#1a1a1a;">${answer}</div>
                    </td>
                  </tr>`
                  )
                  .join("")}
              </table>

              <!-- Contact details -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:500;color:#aaa;text-transform:uppercase;letter-spacing:0.08em;">Contact details</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e3;border-radius:8px;overflow:hidden;">
                ${contactRows
                  .map(
                    ([icon, label, value, isLink], i, arr) => `
                  <tr style="border-bottom:${i < arr.length - 1 ? "1px solid #e5e5e3" : "none"};">
                    <td style="padding:11px 14px;font-size:13px;color:#777;white-space:nowrap;">
                      ${icon} ${label}
                    </td>
                    <td style="padding:11px 14px;font-size:13px;font-weight:500;color:${isLink ? "#4a7fe5" : "#1a1a1a"};text-align:right;">
                      ${value}
                    </td>
                  </tr>`
                  )
                  .join("")}
              </table>
            </td></tr>

            <!-- Footer -->
            <tr><td style="padding:16px 32px;background:#f9f9f7;border-top:1px solid #e5e5e3;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#aaa;">Sent by your booking system</td>
                  <td align="right">
                    <a href="mailto:${safe.email}" style="font-size:12px;font-weight:500;color:#4a7fe5;text-decoration:none;">
                      Reply to lead →
                    </a>
                  </td>
                </tr>
              </table>
            </td></tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
