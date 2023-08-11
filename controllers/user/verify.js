const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const candidate = await User.findOne({ verificationToken });

  if (!candidate) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(candidate._id, {
    verify: true,
    verificationToken: null,
  });

  res.status(200);
  res.json({ message: "Verification successful" });
};

module.exports = verify;
