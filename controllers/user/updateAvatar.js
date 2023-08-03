import fs from "fs/promises";
import path from "path";

import { User } from "../../models/index.js";

const avatarPath = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: oldPath, filename } = req.file;
  const avatarName = `${_id}_${filename}`;
  const newPath = path.join(avatarPath, avatarName);
  await fs.rename(oldPath, newPath);
  const avatarURL = path.join("avatars", avatarName);

  const result = await User.findByIdAndUpdate(
    _id,
    { avatarURL },
    { new: true }
  );

  res.json({
    status: "success",
    code: 200,
    data: { avatarURL: result.avatarURL },
  });
};

export default updateAvatar;
