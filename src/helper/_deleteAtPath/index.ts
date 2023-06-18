import { IDeleteAtPathFun } from "../../types/deleteFile.interface";
import fs from "fs";
import path from "path";
import { _findFile } from "../_findFile";
import { __callback } from "./__callback";
import { __deleteFile } from "./__deleteFile";

export function _delteAtPath({
  fileID,
  funOptions = undefined,
  options,
  into,
}: IDeleteAtPathFun) {
  let isError = true;
  let result = false;
  const neededFile = path.join(into, fileID);
  if (fs.existsSync(neededFile)) {
    result = __deleteFile(neededFile, options, into, fileID);
    isError = !result;
  }
  const ignoreExtension = options?.ignoreExtension || false;
  if (!funOptions?.isPathSpecifed || ignoreExtension) {
    result = _findFile(into, fileID, ignoreExtension, __callback);
    isError = !result;
  }
  if (funOptions?.isErrNeed && isError) {
    throw new Error("Something is wrong with path");
  }
  return result;
}
