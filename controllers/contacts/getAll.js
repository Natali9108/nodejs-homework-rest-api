const { Contact } = require("../../models");

const getAll = async (req, res) => {
  console.log(req.user);
  const { id: owner } = req.user;
  const { page = 1, limit = 20, ...query } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, ...query },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  res.json({
    status: "succes",
    code: 200,
    qty: result.length,
    data: { result },
  });
};

module.exports = getAll;
