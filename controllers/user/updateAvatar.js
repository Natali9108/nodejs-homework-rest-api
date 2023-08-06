const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const avatarPath = path.resolve("tmp", "avatars");

const updateAvatar = async (req, res) => {
  const { id } = req.user;

  if (!req.file) {
    throw HttpError(400, "Add file");
  }

  const { path: oldPath, filename } = req.file;
  const avatarName = `${id}_${filename}`;
  const newPath = path.join(avatarPath, avatarName);
  await fs.rename(oldPath, newPath);
  const avatarURL = path.join("avatars", avatarName);

  try {
    const image = await Jimp.read(newPath);
    image.resize(250, 250).write(newPath);
  } catch (error) {
    fs.unlink(newPath);
    throw HttpError(400, error.message);
  }

  const result = await User.findByIdAndUpdate(id, { avatarURL }, { new: true });

  res.json({
    status: "success",
    code: 200,
    data: { avatarURL: result.avatarURL },
  });
};

module.exports = updateAvatar;
