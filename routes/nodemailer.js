const nodemailer = require("nodemailer");

// Create a transporter with your email server settings
const transporter = nodemailer.createTransport({
  //   service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "joey.dev.biz@gmail.com",
    pass: "frgskkdniiowzuuc",
  },
});

// Define a function to send the email
const sendEmail = async (from, subject, body) => {
  let err = null;
  // Send the email
  await transporter
    .sendMail({
      from: from,
      to: "joey.dev.biz@gmail.com",
      subject: subject,
      html: `<p>${body}</p> <br/><br/> <p>from: ${from}</p>`,
    })
    .then((response) => {
      console.log("Email sent successfully");
      console.log(response, "yiiyguyu");
    })
    .catch((error) => {
      err = error;
      console.error("Error sending email:", error);
    });

  return { err };
};

module.exports = sendEmail;
