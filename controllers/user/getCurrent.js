const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  res.status(200);
  res.json({
    code: 200,
    user: { email: user.email, subscription: user.subscription },
  });
};

module.exports = getCurrent;
