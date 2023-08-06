const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }

  res.json({ status: "succes", code: 200, data: { result } });
};
module.exports = updateById;
