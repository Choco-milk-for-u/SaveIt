import { IOptionsDelete } from "../../types/deleteFile.interface";
import fs from "fs";
export function __deleteFile(
  neededPath: string,
  options: IOptionsDelete | undefined,
  into: string,
  fileID: string
) {
  fs.unlinkSync(neededPath);
  // secure level, for not letting dumbass delete the whole system.
  const folderLevel = neededPath.split("\\") || neededPath.split("/");
  if (options?.deleteAll && folderLevel.length > 2) {
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
