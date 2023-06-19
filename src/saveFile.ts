import { File } from "./File";
import { _fileConverter } from "./helper/_fileConverter/index";
import { _setFileName } from "./helper/_setFileName";
import { _typeGenerating } from "./helper/_typeGenerating";
import _writeFile from "./helper/_writeFile/index";
import { ISaveFile } from "./types/saveFile.interface";

export default function saveFile({
  file,
  filePath = undefined,
  options = undefined,
}: ISaveFile) {
  const type = _typeGenerating(options);
  let newFile = new File(file, filePath, type);
  try {
    _fileConverter(options, newFile);
  } catch (error: any) {
    throw new Error(
      options?.isBinaryData
        ? "You indicated that the file is binary data, but it is not."
        : error.message
    );
  }
  _setFileName(newFile);
  try {
    _writeFile(newFile, options?.src);
  } catch (error: any) {
    throw new Error(
      "Something went wrong when creating the file" + " " + error.message
    );
  }
  return newFile.getName();
}
