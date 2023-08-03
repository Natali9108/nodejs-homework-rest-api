import fs from "fs/promises";
import path from "path";

import { Contact } from "../../models/index.js";

const avatarPath = path.resolve("public", "avatars");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const { path: oldPath, filename } = req.file;
  const newPath = path.join(avatarPath, filename);
  await fs.rename(oldPath, newPath);
  const avatar = path.join("avatars", filename);

  const result = await Contact.create({ ...req.body, avatar, owner });
  res.status(201).json({ status: "succes", code: 201, data: { result } });
};

export default add;
