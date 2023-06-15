import { File } from "../../File";

export function _setters(newFile: File, result: any, fileExtension: any) {
  newFile.setFile(result);
  newFile.setFileExtension(fileExtension);
}
