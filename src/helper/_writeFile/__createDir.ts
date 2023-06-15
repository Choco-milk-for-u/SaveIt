import fs from "fs";
import path from "path";

export default function __createDir(params: string[]) {
  const finalPath = path.resolve(...params);
  if (!fs.existsSync(finalPath)) {
    fs.mkdirSync(finalPath, { recursive: true });
  }
  return finalPath;
}
