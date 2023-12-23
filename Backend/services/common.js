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
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODU5NDgzZjY2ZWE1NGIzOWQ2ZDQ1YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMzMxMTAxN30.WbbhWZRt-hSNyN2E-rFoIipsIbajrxWjs9ufiWz5Rw0";
  return token;
};
