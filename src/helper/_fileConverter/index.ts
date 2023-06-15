import { File } from "../../File";
import { IOptions } from "../../types/saveFile.interface";
import { _ifBinaryData } from "./__ifBinaryData";
import { _ifRegularFile } from "./__ifRegularData";
import { _setters } from "./__setters";

export function _fileConverter(options: IOptions, newFile: File) {
  let result = null;
  let fileExtension = null;
  const file = newFile.getFile();
  if (options.isBinaryData) {
    ({ result, fileExtension } = _ifBinaryData(file, options));
  } else {
    ({ result, fileExtension } = _ifRegularFile(file));
  }
  _setters(newFile, result, fileExtension);
}
