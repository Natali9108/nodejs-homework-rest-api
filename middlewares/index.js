const authenticate = require("./authenticate");
const isEmptyBody = require("./isEmptyBody");
const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const upload = require("./upload");
const modificateAvatar = require("./modificateAvatar");

module.exports = {
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody,
  upload,
  modificateAvatar,
};
