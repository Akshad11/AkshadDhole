const transporter = require("../config/mail.config");
const resend = require("../config/resend.config");

exports.sendContactMail = async ({ name, email, message }) => {
  if (process.env.RESEND_API_KEY) {
    try {
      const { data, error } = await resend.emails.send({
        from: `Website Contact <${process.env.EMAIL_USER}>`,
        to: process.env.MY_EMAIL,
        subject: `New Contact Message - ${name}`,
        reply_to: email,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend API returned error:", error);
        // Fallback to Nodemailer
      } else {
        return data;
      }
    } catch (err) {
      console.error("Resend execution failed, falling back to Nodemailer:", err);
    }
  }

  return transporter.sendMail({
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message - ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });
};
