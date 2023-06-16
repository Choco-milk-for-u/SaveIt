import { File } from "./File";
import { _fileConverter } from "./helper/_fileConverter/index";
import { _setFileName } from "./helper/_setFileName";
import _writeFile from "./helper/_writeFile";
import { saveFile } from "./types/saveFile.interface";

export default function saveFile({
  file,
  filePath = undefined,
  options = undefined,
}: saveFile) {
  const type = options?.type || "BinData";
  let newFile = new File(file, filePath, type);
  try {
    _fileConverter(options, newFile);
  } catch (error: any) {
    throw new Error(
      options?.isBinaryData
        ? "You specifed that file is a raw binary data, but it is not"
        : error.message
    );
  }
  _setFileName(newFile);
  try {
    _writeFile(newFile, options?.src);
  } catch (error: any) {
    throw new Error(
      "Something went wrong when creating a file" + " " + error.message
    );
  }
  return newFile.getName();
}
