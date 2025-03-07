const express = require("express");
const contactsController = require("../../controllers/contacts");
const { isEmptyBody, validateBody } = require("../../middlewares");
const schemas = require("../../schemas");

const { authenticate, isValidId } = require("../../middlewares");

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:contactId", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(schemas.addSchema),
  contactsController.add
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(schemas.addSchema),
  contactsController.updateById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateFavorite
);

contactsRouter.delete("/:contactId", isValidId, contactsController.deleteById);

module.exports = contactsRouter;
