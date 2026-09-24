// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, phone, email, service, message } = await req.json();

//     // Basic Validation
//     if (!name || !phone || !email || !message) {
//       return NextResponse.json(
//         { error: "Please fill in all required fields." },
//         { status: 400 },
//       );
//     }

//     // Send formatted email to your inbox
//     const data = await resend.emails.send({
//       from: "Nilkanth Web Inquiry <nilkanth-industries-iota.vercel.app>", // Replace with your verified domain email (e.g. quote@nilkanthindustries.in) once configured
//       to: process.env.CONTACT_RECEIVER_EMAIL,
//       replyTo: email,
//       subject: `New Finishing Quote Request: ${name} (${service})`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
//           <div style="background-color: #090a0f; padding: 20px 24px; color: #ffffff;">
//             <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #f59e0b;">Nilkanth Industries</h2>
//             <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">New Part Feasibility & RFQ Inquiry</p>
//           </div>

//           <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
//             <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 140px;">Client Name:</td>
//                 <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
//                 <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #d97706; text-decoration: none;">${phone}</a></td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email Address:</td>
//                 <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service Required:</td>
//                 <td style="padding: 8px 0; color: #0f172a;"><span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${service}</span></td>
//               </tr>
//             </table>

//             <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
//               <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Component Specifications & Details:</h4>
//               <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${message}</p>
//             </div>
//           </div>

//           <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
//             Inquiry dispatched from nilkanth-industries web portal. Reply directly to this email to contact ${name}.
//           </div>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message || "Failed to dispatch email" },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Helper: Prevent HTML/Script injection into the email template
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 2. Helper: RFC standard email check
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

// Helper: Validates and standardizes Indian phone numbers to "+91 XXXXXXXXXX"
function formatAndValidatePhone(phone) {
  if (!phone || typeof phone !== "string") return null;

  // 1. Strip all non-digit characters (+, spaces, dashes, brackets)
  let digits = phone.replace(/\D/g, "");

  // 2. Remove leading '0' if entered (e.g. 09825906808 -> 9825906808)
  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  // 3. Remove country code '91' if already present (e.g. 919825906808 -> 9825906808)
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  // 4. Validate that exactly 10 digits remain (Indian mobile numbers start with 6, 7, 8, or 9)
  const isValid = /^[6-9]\d{9}$/.test(digits);

  if (!isValid) return null;

  // 5. Return standardized format with +91 prefix
  return `+91 ${digits}`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    // --- SANITIZE & TRIM INPUTS ---
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanService =
      typeof service === "string" ? service.trim() : "General Inquiry";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    // --- VALIDATION RULES ---

    // Name Validation
    if (!cleanName) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 },
      );
    }
    if (cleanName.length < 2 || cleanName.length > 70) {
      return NextResponse.json(
        { error: "Name must be between 2 and 70 characters." },
        { status: 400 },
      );
    }

    // Email Validation
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 },
      );
    }

    // Phone Number Validation
    const formattedPhone = formatAndValidatePhone(cleanPhone);
    if (!formattedPhone) {
      return NextResponse.json(
        {
          error: "Please provide a valid 10-digit mobile.",
        },
        { status: 400 },
      );
    }

    // Message Validation
    if (!cleanMessage) {
      return NextResponse.json(
        { error: "Please enter your component specifications or message." },
        { status: 400 },
      );
    }
    if (cleanMessage.length < 10) {
      return NextResponse.json(
        { error: "Please provide a bit more detail (minimum 10 characters)." },
        { status: 400 },
      );
    }
    if (cleanMessage.length > 2000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 2,000 characters)." },
        { status: 400 },
      );
    }

    // --- HTML ESCAPING FOR EMAIL BODY ---
    const safeName = escapeHtml(cleanName);
    const safePhone = escapeHtml(formattedPhone);
    const safeEmail = escapeHtml(cleanEmail);
    const safeService = escapeHtml(cleanService);
    const safeMessage = escapeHtml(cleanMessage);

    // --- DISPATCH EMAIL VIA RESEND ---
    const { data, error } = await resend.emails.send({
      from: "Nilkanth Web Inquiry <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: cleanEmail,
      subject: `New Finishing Quote Request: ${safeName} (${safeService})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #090a0f; padding: 20px 24px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #f59e0b;">Nilkanth Industries</h2>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">New Part Feasibility & RFQ Inquiry</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${safePhone.replace(/\s+/g, "")}" style="color: #d97706; text-decoration: none;">${safePhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email Address:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${safeEmail}" style="color: #d97706; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service Required:</td>
                <td style="padding: 8px 0; color: #0f172a;"><span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${safeService}</span></td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Component Specifications & Details:</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${safeMessage}</p>
            </div>
          </div>

          <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
            Inquiry dispatched from nilkanth-industries web portal. Reply directly to this email to contact ${safeName}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to dispatch email" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status:
      "Nilkanth Contact API is active. Submit inquiries via POST request.",
  });
}
