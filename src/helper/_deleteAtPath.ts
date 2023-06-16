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
// main logic
export function _delteAtPath(
  fileID: string,
  into: string,
  isErrNeed: boolean = false,
  isPathSpecifed: boolean = false
) {
  let isError = true;
  if (fs.existsSync(into)) {
    const neededPath = path.resolve(into, fileID);
    if (fs.existsSync(neededPath)) {
      console.log("DELETED");
      // fs.unlinkSync(neededPath);
      return true;
    }
    if (!isPathSpecifed) {
      isError = _findFile(into, fileID, _callBack);
    }
  }
  if (isErrNeed && isError) {
    throw new Error("Something is wrong with path");
  }
  return false;
}
