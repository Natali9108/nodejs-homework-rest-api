const customMessages = {
  "string.min": `{{#label}} should have a minimum length of {#limit}`,
  "string.max": `{{#label}} should have a maximum length of {#limit}`,
  "string.email": "{{#label}} must be a valid email",
  "any.required": "{{#label}} is a required field",
};
const emailPaternMessage = "Email must be in format of example@example.com";

module.exports = { customMessages, emailPaternMessage };
