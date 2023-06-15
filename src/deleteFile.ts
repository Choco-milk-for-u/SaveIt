interface IOptionsDelete {
  deleteAll: boolean;
}
interface IDeleteFile {
  fileID: string;
  filePath?: string;
  options?: IOptionsDelete;
}
import path from "path";
import fs from "fs";

function findFile(directoryPath: string, fileName: string, callBack: Function) {
  fs.readdir(directoryPath, (err, files) => {
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (statErr, stats) => {
        if (stats.isDirectory()) {
          findFile(filePath, fileName, callBack);
        } else if (file === fileName) {
          return directoryPath;
        }
      });
    }
  });
  callBack(null);
}

export default function deleteFile({
  fileID,
  filePath = undefined,
  options = undefined,
}: IDeleteFile) {
  if (!fileID) {
    throw new Error("Please specify in first value an id of a file");
  }
  if (options?.deleteAll && !filePath) {
    throw new Error(
      "Can not delete all files if path is not specifed for securite reason"
    );
  }
  if (filePath) {
    let isError = true;
    if (fs.existsSync(filePath)) {
      const neededPath = path.resolve(filePath, fileID);
      if (fs.existsSync(neededPath)) {
        isError = false;
        fs.unlinkSync(neededPath);
      }
    }
    if (isError) {
      throw new Error("Something is wrong with path");
    }
  } else {
    const finalPath = path.resolve(__dirname, "../..", "static");
    if (fs.existsSync(finalPath)) {
      const neededPath = path.resolve(finalPath, fileID);
      if (fs.existsSync(neededPath)) {
        fs.unlinkSync(neededPath);
      } else {
        findFile(finalPath, fileID, (resultPath: string) => {
          if (resultPath) {
            fs.unlinkSync(resultPath);
          }
        });
      }
    }
  }
}
