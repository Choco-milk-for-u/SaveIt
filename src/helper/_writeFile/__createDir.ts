const fs = require("fs").promises;
import path from "path";

export default async function __createDir(params: string[]) {
  const finalPath = path.resolve(...params);
  await fs.mkdir(finalPath, { recursive: true });
  return finalPath;
}
