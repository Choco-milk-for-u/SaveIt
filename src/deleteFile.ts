import path from "path";
import { IDeleteFile } from "./types/deleteFile.interface";
import { _delteAtPath } from "./helper/_deleteAtPath/index";
import { _checkFunctionParam } from "./helper/_checkFunctionParam";

export default function deleteFile({
  fileID,
  filePath = undefined,
  options = undefined,
}: IDeleteFile) {
  _checkFunctionParam({ fileID, options, filePath });
  const rootDir = options?.src || process.cwd();
  let into = null;
  if (filePath) {
    const userPath = [rootDir, filePath];
    const funOptions = { isErrNeed: true, isPathSpecifed: true };
    into = path.join(...userPath);
    return _delteAtPath({ fileID, into, funOptions, options });
  }
  const staticPath = [rootDir, "static"];
  into = path.join(...staticPath);
  return _delteAtPath({ fileID, into, options });
}
