const { User } = require("../../models");

const logout = async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  user.token = null;

  await user.save();

  res.status(200);
  res.json({ code: 200, user: { message: "Logout success" } });
};
module.exports = logout;
