import fs from "fs";
import path from "path";
import { File } from "../../File";
import __createDir from "./__createDir";
import __returnBuffer from "./__returnBuffer";

export default function _writeFile(newFile: File) {
  const type: string = newFile.getType();
  const params = [newFile.getFilePath() + "/" + type] || [
    __dirname,
    "../..",
    "static",
    type,
  ];
  const finalPath = __createDir(params);
  const buffer = __returnBuffer(newFile);
  fs.writeFileSync(path.resolve(finalPath, newFile.getName()), buffer);
}
