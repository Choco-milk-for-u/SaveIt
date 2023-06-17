import fs from "fs";
import path from "path";
export function __callback(resultPath: string, fileName: string) {
  let result = false;
  if (resultPath) {
    const neededPath = path.resolve(resultPath, fileName);
    fs.unlinkSync(neededPath);
    result = true;
  }
  return !result;
}
