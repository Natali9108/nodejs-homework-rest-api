const { Contact } = require("../../models");

const add = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201);
  res.json({ status: "succes", code: 201, data: { result } });
};

module.exports = add;
