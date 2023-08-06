const { joiUserSchemas, joiUpdateSubscription } = require("./userSchemas");
const { addSchema, updateFavoriteSchema } = require("./contactSchemas");

const schemas = {
  addSchema,
  updateFavoriteSchema,
  joiUserSchemas,
  joiUpdateSubscription,
};

module.exports = schemas;
