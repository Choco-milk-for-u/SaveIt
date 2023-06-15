import { File } from "../../File";

export default function __returnBuffer(newFile: File) {
  const file = newFile.getFile();
  const isBuffer = Buffer.isBuffer(file);
  return isBuffer ? file : file.buffer;
}
