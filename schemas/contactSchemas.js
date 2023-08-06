const Joi = require("joi");
const { customMessages } = require("./schemaConstans.js");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
}).messages(customMessages);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
}).messages(customMessages);

module.exports = { addSchema, updateFavoriteSchema };
