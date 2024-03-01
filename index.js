import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your@gmail.com",
    pass: "your-gmail-password",
  },
});

const mailOptions = {
  from: "your@gmail.com",
  to: "recipient@example.com",
  subject: "Subject of your email",
  text: "Text content of your email",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
