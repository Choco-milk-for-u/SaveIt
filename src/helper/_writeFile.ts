import fs from "fs";
import path from "path";
import { File } from "../File";

export function _writeFile(newFile: File) {
  const type: string = newFile.getType() || "BinData";
  const params = [newFile.getFilePath()] || [
    __dirname,
    "../..",
    "static",
    type,
  ];
  const finalPath = path.resolve(...params);
  if (!fs.existsSync(finalPath)) {
    fs.mkdirSync(finalPath, { recursive: true });
  }
  fs.writeFileSync(
    path.resolve(finalPath, newFile.getName()),
    newFile.getFile()
  );
}
