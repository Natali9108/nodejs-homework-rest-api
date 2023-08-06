const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }

  res.json({ status: "succes", code: 200, data: { result } });
};

module.exports = getById;
