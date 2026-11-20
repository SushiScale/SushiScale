<div align="center">

# 🚀 White-Label Meta Ads Agency

### A high-converting landing page that qualifies agency owners and delivers every lead straight to your inbox.

<br />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=gmail&logoColor=white)

<br />

[✨ Features](#-features) •
[🧰 Tech Stack](#-tech-stack) •
[⚡ Quick Start](#-quick-start) •
[🔄 Booking Flow](#-how-the-booking-flow-works) •
[🎨 Customize](#-customization) •
[🛠 Troubleshooting](#-troubleshooting)

</div>

---

## 📖 About

This project is a landing page for a **white-label lead-generation service** for agency owners. It covers Meta Ads, funnels, GoHighLevel, landing pages, automations and tracking, all delivered under the agency's own brand.

Visitors answer two quick qualification questions, then submit their details. Every application lands in your inbox in a clean, branded email, with the qualification answers included.

> 💡 **Offer:** from **$270/month per client** · GHL setup **$80–$300**

---

## ✨ Features

| | Feature | Description |
| :-: | --- | --- |
| 🎯 | **Hero section** | Bold headline, offer cards, CTAs and service pills |
| 🧩 | **Multi-step booking form** | Client count → commitment → contact details |
| ✅ | **Lead qualification** | Both question answers are sent with every application |
| 📬 | **Email notifications** | HTML email plus plain-text fallback through Gmail SMTP |
| ↩️ | **One-click reply** | Replying to the email goes straight to the lead |
| 🔒 | **Safe by default** | All user input is HTML-escaped before it enters the email |
| 📱 | **Responsive design** | Looks great on mobile, tablet and desktop |

---

## 🧰 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router) + React
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Email:** [Nodemailer](https://nodemailer.com/) via Gmail SMTP

---

## 🗂 Project Structure

```
app/
├── api/
│   └── booking/
│       └── route.ts        # 📬 POST endpoint, sends the booking email
└── components/
    ├── Hero.tsx            # 🎯 Hero section (#home)
    └── Booking.tsx         # 🧩 Multi-step booking form (#booking)
```

> The Hero's second button links to `#services`, so add a section with `id="services"` for it to scroll to.

---

## ⚡ Quick Start

### 1️⃣ Prerequisites

- Node.js **18+**
- A Gmail account with **2-Step Verification** turned on (needed for an App Password)

### 2️⃣ Install

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
```

### 3️⃣ Configure environment variables

Create a `.env.local` file in the project root:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your16characterapppassword
```

| Variable | What it is |
| --- | --- |
| `EMAIL_USER` | The Gmail address that sends the notification emails |
| `EMAIL_PASS` | A Gmail **App Password**, not your normal password |

> 🔑 Create an App Password at **Google Account → Security → 2-Step Verification → App passwords**.
> Use no quotes or spaces, and never commit `.env.local` to Git.

### 4️⃣ Run it

```bash
npm run dev
```

Open **http://localhost:3000** 🎉

### 5️⃣ Build for production

```bash
npm run build
npm start
```

---

## 🔄 How the Booking Flow Works

```
 ┌────────────┐     ┌────────────┐     ┌────────────┐     ┌────────────┐
 │ Question 1 │ ──▶ │ Question 2 │ ──▶ │ Contact    │ ──▶ │ Email sent │
 │ # clients  │     │ $270 / mo  │     │ form       │     │ + success  │
 └────────────┘     └────────────┘     └────────────┘     └────────────┘
```

1. **Question 1:** the visitor picks how many active clients they have.
2. **Question 2:** the visitor confirms they can commit to at least $270 per client per month. "Not Right Now" ends the flow.
3. **Form:** agency name, full name, email, phone and an optional website.
4. **Submit:** `Booking.tsx` sends a `POST` to `/api/booking`:

```json
{
  "agencyName": "",
  "fullName": "",
  "email": "",
  "phone": "",
  "website": "",
  "activeClients": "",
  "canCommit270": ""
}
```

5. **Email:** `route.ts` builds the email and sends it. The API returns `{ "success": true }`, or `{ "success": false }` with status 500 on failure.

---

## 🎨 Customization

| I want to change... | Edit this |
| --- | --- |
| 📧 Recipient address | `to` in `app/api/booking/route.ts` |
| ❓ Questions and options | `clientOptions` and the Q2 text in `Booking.tsx` (and `qaRows` in `route.ts`) |
| 💰 Pricing and copy | Offer cards and text in `Hero.tsx` |
| 🎨 Colors | Tailwind classes (`blue-600`, `slate-900`, etc.) in each component |

---

## 🛠 Troubleshooting

<details>
<summary><b>❌ "Failed to send booking."</b></summary>

<br />

Check the terminal running `npm run dev` for the actual error. This is usually wrong Gmail credentials.

</details>

<details>
<summary><b>🔐 <code>Invalid login</code> / <code>535</code> error</b></summary>

<br />

Use a Gmail **App Password** in `EMAIL_PASS`, not your normal password. Restart the dev server after editing `.env.local`.

</details>

<details>
<summary><b>📥 Emails land in spam</b></summary>

<br />

Open one, click **Report not spam**, then create a Gmail filter for the subject with **Never send it to Spam**. The email already includes a plain-text version and a clean subject line to help.

</details>

<details>
<summary><b>⚙️ Environment variables not picked up</b></summary>

<br />

Make sure the file is named exactly `.env.local` and sits in the project root, then restart the server.

</details>

---

## 📝 Notes

Gmail SMTP works well for a low-volume lead form that emails you. If you later email customers or other addresses, switch to a transactional service such as **Resend** with your own domain and SPF/DKIM set up.

---

<div align="center">

### 📄 License

Add your license here.

<br />

**Built to turn clicks into clients.** ⚡

</div>
