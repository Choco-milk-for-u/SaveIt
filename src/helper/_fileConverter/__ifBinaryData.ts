import { IOptions } from "../../types/saveFile.interface";

export function _ifBinaryData(file: any, options: IOptions) {
  return {
    result: Buffer.from(file, "binary"),
    fileExtension: options.fileExtention || "bin",
  };
}
