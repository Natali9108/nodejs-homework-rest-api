const express = require("express");

const {
  isEmptyBody,
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares");
const schemas = require("../../schemas");
const userController = require("../../controllers/user");
// import schemas from "../../schemas/index.js";
// import {
//   modificateAvatar,
//   upload,
//   authenticate,
//   validateBody,
//   isEmptyBody,
// } from "../../middlewares/index.js";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  isEmptyBody,
  validateBody(schemas.joiUserSchemas),
  userController.register
);

usersRouter.post(
  "/login",
  validateBody(schemas.joiUserSchemas),
  userController.login
);

usersRouter.get("/current", authenticate, userController.getCurrent);

usersRouter.patch(
  "/subscription",
  authenticate,
  isEmptyBody,
  validateBody(schemas.joiUpdateSubscription),
  userController.updateSubscription
);

usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  //   // modificateAvatar,
  userController.updateAvatar
);

usersRouter.post("/logout", authenticate, userController.logout);

module.exports = usersRouter;
