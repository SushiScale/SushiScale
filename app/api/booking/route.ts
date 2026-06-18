import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "chiragkumar2199@gmail.com",
      subject: "📅 New Strategy Call Booking",
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
              <p style="margin:0 0 16px;font-size:12px;color:#888;display:flex;align-items:center;gap:6px;">
                🕐 Received · ${new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}
              </p>

              <p style="margin:0 0 12px;font-size:11px;font-weight:500;color:#aaa;text-transform:uppercase;letter-spacing:0.08em;">Contact details</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e3;border-radius:8px;overflow:hidden;">
                ${[
          ["🏢", "Agency name", data.agencyName, false],
          ["👤", "Full name", data.fullName, false],
          ["✉️", "Email", data.email, true],
          ["📞", "Phone", data.phone, false],
          ["🌐", "Website", data.website || "Not provided", !!data.website],
        ]
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
                    <a href="mailto:${data.email}" style="font-size:12px;font-weight:500;color:#4a7fe5;text-decoration:none;">
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