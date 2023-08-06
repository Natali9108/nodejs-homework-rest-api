const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }

  res.status(200);
  res.json({ message: "contact deleted" });
};

module.exports = deleteById;
