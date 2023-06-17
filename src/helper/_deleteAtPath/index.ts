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
  const neededFile = path.resolve(into, fileID);
  if (fs.existsSync(neededFile)) {
    isError = false;
    return __deleteFile(neededFile, options, into, fileID);
  }
  if (!funOptions?.isPathSpecifed) {
    isError = _findFile(into, fileID, __callback);
  }
  if (funOptions?.isErrNeed && isError) {
    throw new Error("Something is wrong with path");
  }
  return false;
}
