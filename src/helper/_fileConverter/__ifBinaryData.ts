import { IOptions } from "../../types/saveFile.interface";

export function _ifBinaryData(file: any, options: IOptions | undefined) {
  return {
    result: Buffer.from(file, "binary"),
    fileExtension: options && options.fileExtention || "bin",
  };
}
