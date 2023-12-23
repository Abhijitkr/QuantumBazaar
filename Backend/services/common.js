const passport = require("passport");

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
