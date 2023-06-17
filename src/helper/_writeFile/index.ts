import fs from "fs";
import path from "path";
import { File } from "../../File";
import __createDir from "./__createDir";
import __returnBuffer from "./__returnBuffer";
import { __changeTheRootPath } from "./__changeTheRootPath";

export default function _writeFile(newFile: File, src?: string) {
  const type: string = newFile.getType();
  const tempPath = newFile.getFilePath();
  const isPathExist = tempPath ? true : false;
  const params = isPathExist
    ? [tempPath + "/" + type]
    : [process.cwd(), "static", type];
  if (src) {
    __changeTheRootPath(params, isPathExist, src);
  }
  const finalPath = __createDir(params);
  const buffer = __returnBuffer(newFile);
  fs.writeFileSync(path.resolve(finalPath, newFile.getName()), buffer);
}
