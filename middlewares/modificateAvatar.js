import Jimp from "jimp";
import path from "path";
import fs from "fs/promises";

import { HttpError } from "../helpers/index.js";

const modificateAvatar = async (req, res, next) => {
  if (!req.file) {
    next(HttpError(400, "Avatar not loaded"));
    return;
  }

  const { path } = req.file;
  try {
    const image = await Jimp.read(path);
    image.resize(250, 250).write(path);
    next();
  } catch (error) {
    fs.unlink(path);
    next(HttpError(400, error.message));
  }
};

export default modificateAvatar;
