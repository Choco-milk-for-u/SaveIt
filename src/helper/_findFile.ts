import path from "path";
import fs from "fs";

export function _findFile(
  directoryPath: string,
  fileName: string,
  ignoreExtension: boolean,
  callBack: Function
) {
  fs.readdir(directoryPath, (err, files) => {
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (statErr, stats) => {
        const infoFile = path.parse(filePath);
        const currentFile = ignoreExtension ? infoFile.name : file;
        if (stats.isDirectory()) {
          _findFile(filePath, fileName, ignoreExtension, callBack);
        } else if (currentFile === fileName) {
          return callBack(directoryPath, `${infoFile.name}${infoFile.ext}`);
        }
      });
    }
  });
  return callBack(null);
}
