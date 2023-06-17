import { File } from "../File";
const crypto = require('crypto');

export function _setFileName(newFile: File) {
  const id = crypto.randomUUID();
  const name = id + "." + newFile.getFileExtension();
  newFile.setFileName(name);
}
