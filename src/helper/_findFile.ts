import path from "path";
import fs from "fs";

export function _findFile(
  directoryPath: string,
  fileName: string,
  ignoreExtension: boolean,
  callBack: Function
) {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const status = fs.statSync(filePath);
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
