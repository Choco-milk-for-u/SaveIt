import path from "path";
import fs from "fs";

export function _findFile(directoryPath: string, fileName: string, callBack: Function) {
    fs.readdir(directoryPath, (err, files) => {
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        fs.stat(filePath, (statErr, stats) => {
          if (stats.isDirectory()) {
            _findFile(filePath, fileName, callBack);
          } else if (file === fileName) {
            return callBack(directoryPath, fileName);
          }
        });
      }
    });
    return callBack(null);
  }