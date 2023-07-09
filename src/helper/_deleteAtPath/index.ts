import { IDeleteAtPathFun } from "../../types/deleteFile.interface";
const fs = require("fs").promises;
import path from "path";
import { _findFile } from "../_findFile";
import { __callback } from "./__callback";
import { __deleteFile } from "./__deleteFile";

export async function _delteAtPath({
  fileID,
  funOptions = undefined,
  options,
  into,
}: IDeleteAtPathFun) {
  let isError = true;
  let result = false;
  const neededFile = path.join(into, fileID);
  const isExist = await fs.exists(neededFile);
  if (isExist) {
    result = await __deleteFile(neededFile, options, into, fileID);
    isError = !result;
  }
  const ignoreExtension = options?.ignoreExtension || false;
  if (!funOptions?.isPathSpecifed || ignoreExtension) {
    result = await _findFile(into, fileID, ignoreExtension, __callback);
    isError = !result;
  }
  if (funOptions?.isErrNeed && isError) {
    throw new Error("Something is wrong with path");
  }
  return result;
}
