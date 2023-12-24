const passport = require("passport");
const nodemailer = require("nodemailer");

// Emails

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "webstar600@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODU5NDMxZjY2ZWE1NGIzOWQ2ZDQ1NyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzMzM0ODI4fQ.IcCSUZd-wHEllL4DNLm_U1gfj8OH26gtK4CVRxkYPq0";
  return token;
};

exports.sendMail = async function ({ to, subject, text, html }) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Quantum Bazaar" <webstar600@gmail.com>', // sender address
    to,
    subject,
    text,
    html,
  });
  return info;
};
