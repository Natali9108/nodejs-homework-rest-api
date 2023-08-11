const { Schema, model } = require("mongoose");
const { handleMongooseError, handleUpdateValidate } = require("./hooks");
const { emailRegexp, subscriptionList } = require("../constans");

const userSchema = new Schema(
  {
    password: {
      type: String,
      minLength: 8,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    avatarURL: {
      type: String,
    },
    token: { type: String, default: null },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      // required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", handleUpdateValidate);

userSchema.post("save", handleMongooseError);

userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
