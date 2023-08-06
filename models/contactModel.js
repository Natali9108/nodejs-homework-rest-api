const { Schema, model } = require("mongoose");

const { handleMongooseError, handleUpdateValidate } = require("./hooks");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 16,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Field email is required"],
    },
    phone: {
      type: String,
      required: [true, "Field phone is required"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.pre("findOneAndUpdate", handleUpdateValidate);

contactSchema.post("save", handleMongooseError);

contactSchema.post("findOneAndUpdate", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
