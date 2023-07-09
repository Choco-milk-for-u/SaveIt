const fs = require('fs').promises;
import path from "path";
export async function __callback(resultPath: string, fileName: string) {
  let result = false;
  if (resultPath) {
    const neededPath = path.resolve(resultPath, fileName);
    await fs.unlink(neededPath);
    result = true;
  }
  return result;
}
