const Jimp = require("jimp");
const fs = require("fs/promises");

const { HttpError } = require("../helpers");

const modificateAvatar = async (req, res, next) => {
  if (!req.file) {
    next(HttpError(400, "Avatar not loaded"));
    return;
  }

  const { path } = req.file;
  try {
    const image = await Jimp.read(path);
    image.resize(250, 250).write(path);
  } catch (error) {
    next(HttpError(400, error.message));
    fs.unlink(path);
  }
  next();
};

module.exports = modificateAvatar;
