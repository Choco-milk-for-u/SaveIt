import { IOptionsDelete } from "./../types/deleteFile.interface";
import fs from "fs";
import path from "path";
import { _findFile } from "./_findFile";

// just call back for return result
const _callBack = (resultPath: string, fileName: string) => {
  let result = false;
  if (resultPath) {
    const neededPath = path.resolve(resultPath, fileName);
    fs.unlinkSync(neededPath);
    result = true;
  }
  return result;
};
interface IDeletePath {
  isErrNeed: boolean;
  isPathSpecifed: boolean;
}
// main logic
export function _delteAtPath(
  fileID: string,
  into: string,
  funOptions?: IDeletePath,
  options?: IOptionsDelete
) {
  let isError = true;
  if (fs.existsSync(into)) {
    const neededPath = path.resolve(into, fileID);
    if (fs.existsSync(neededPath)) {
      fs.unlinkSync(neededPath);
      if (options?.deleteAll) {
        fs.readdir(into, (err: any, files) => {
          for (let file of files) {
            if (file !== fileID) {
              fs.unlinkSync(file);
            }
          }
        });
      }
      return true;
    }
    if (!funOptions?.isPathSpecifed) {
      isError = _findFile(into, fileID, _callBack);
    }
  }
  if (funOptions?.isErrNeed && isError) {
    throw new Error("Something is wrong with path");
  }
  return false;
}
