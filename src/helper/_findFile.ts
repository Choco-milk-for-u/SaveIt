import path from "path";
const fs = require("fs").promises;

export async function _findFile(
  directoryPath: string,
  fileName: string,
  ignoreExtension: boolean,
  callBack: Function
) {
  const files = await fs.readdir(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const status = await fs.stat(filePath);
    const infoFile = path.parse(filePath);
    const currentFile = ignoreExtension ? infoFile.name : file;
    if (status.isDirectory()) {
      return _findFile(filePath, fileName, ignoreExtension, callBack);
    } else if (currentFile === fileName) {
      return callBack(directoryPath, `${infoFile.name}${infoFile.ext}`);
    }
  }
  return callBack(false);
}
