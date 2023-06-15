import { File } from "./File";
import { _writeFile } from "./helper/_writeFile";
import { _fileConverter } from "./helper/_fileConverter/index";
import { _setFileName } from "./helper/_setFileName";
import { IOptions } from "./types/saveFile.interface";

export default function saveFile(
  file: any,
  filePath: string = "",
  options: IOptions
) {
  if (!file) {
    throw new Error("Please, specify in first value a file.");
  }
  let newFile = new File(file, filePath);
  try {
    _fileConverter(options, newFile);
  } catch (error) {
    throw new Error(
      "You specifed that file is a raw binary data, but it is not"
    );
  }
  _setFileName(newFile);
  try {
    _writeFile(newFile);
  } catch (error: any) {
    throw new Error(
      "Something went wrong when creating a file" + error.message
    );
  }
  return newFile.getName();
}
