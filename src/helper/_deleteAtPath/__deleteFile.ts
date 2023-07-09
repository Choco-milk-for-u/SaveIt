import { IOptionsDelete } from "../../types/deleteFile.interface";
const fs = require("fs").promises;
export async function __deleteFile(
  neededPath: string,
  options: IOptionsDelete | undefined,
  into: string,
  fileID: string
) {
  await fs.unlink(neededPath);
  // secure level, for not letting dumbass delete the whole system.
  const folderLevel = neededPath.split("\\") || neededPath.split("/");
  if (options?.deleteAll && folderLevel.length > 2) {
    const files = await fs.readdir(into);
    for (let file of files) {
      if (file !== fileID) {
        await fs.unlink(file);
      }
    }
  }
  return true;
}
