const {
  joiUserSchemas,
  joiUserEmailSchemas,
  joiUpdateSubscription,
} = require("./userSchemas");
const { addSchema, updateFavoriteSchema } = require("./contactSchemas");

const schemas = {
  addSchema,
  updateFavoriteSchema,
  joiUserSchemas,
  joiUserEmailSchemas,
  joiUpdateSubscription,
};

module.exports = schemas;
