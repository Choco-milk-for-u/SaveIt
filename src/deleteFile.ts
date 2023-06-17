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
  const staticPath = [rootDir, "static"];
  let into = null;
  if (filePath) {
    const userPath = options?.src ? [options.src, filePath] : [filePath];
    const funOptions = { isErrNeed: true, isPathSpecifed: true };
    into = path.join(...userPath);
    return _delteAtPath({ fileID, into, funOptions, options });
  }
  into = path.resolve(...staticPath);
  return _delteAtPath({ fileID, into, options });
}
