const Joi = require("joi");
const { emailRegexp, subscriptionList } = require("../constans");
const { customMessages, emailPaternMessage } = require("./schemaConstans");

const joiUserSchemas = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string()
    .pattern(emailRegexp)
    .message(emailPaternMessage)
    .required(),
  subscription: Joi.string().valid(...subscriptionList),
}).messages(customMessages);

const joiUpdateSubscription = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
}).messages(customMessages);

module.exports = { joiUpdateSubscription, joiUserSchemas };
