const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { id } = req.user;

  const newUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json({
    status: "success",
    code: 200,
    data: { email: newUser.email, subscription: newUser.subscription },
  });
};

module.exports = updateSubscription;
