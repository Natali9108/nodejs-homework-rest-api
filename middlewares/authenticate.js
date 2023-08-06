const jwt = require("jsonwebtoken");

const { ctrlWrapper, HttpError } = require("../helpers");

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (!token && bearer !== "Bearer") {
    throw HttpError(401);
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch {
    throw HttpError(401);
  }
};

module.exports = ctrlWrapper(authenticate);
