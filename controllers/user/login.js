const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });
  if (!candidate) {
    throw HttpError(401, "Email or password is wrong");
  }

  if (!candidate.verify) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, candidate.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: candidate._id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  candidate.token = token;

  await candidate.save();

  res.status(200);
  res.json({
    code: 200,
    token,
    user: {
      email: candidate.email,
      subscription: candidate.subscription,
    },
  });
};

module.exports = login;
