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
    _setFileName(newFile);
    _writeFile(newFile, options?.src);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return newFile.getName();
}
