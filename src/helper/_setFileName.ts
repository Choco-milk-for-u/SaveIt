import { File } from "../File";

export function _setFileName(newFile: File) {
  const name = "name" + "." + newFile.getFileExtension();
  newFile.setFileName(name);
}
