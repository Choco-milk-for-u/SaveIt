import path from "path";
import { IDeleteFile } from "./types/deleteFile.interface";
import { _delteAtPath } from "./helper/_deleteAtPath";

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
  const staticPath = [options?.src || process.cwd(), "static"];
  if (filePath) {
    const userPath = options?.src ? [options.src, filePath] : [filePath];
    const funOptions = { isErrNeed: true, isPathSpecifed: true };
    return _delteAtPath(fileID, path.join(...userPath), funOptions);
  }
  return _delteAtPath(fileID, path.resolve(...staticPath));
}
