import { IOptions } from "./../../types/saveFile.interface";

function _ifExpress() {}
export function _ifRegularFile(
  file: any,
  options: IOptions | undefined | { fileType: string }
) {
  options = options ? options : { fileType: "express" };
  switch (options.fileType.toLocaleLowerCase()) {
    case "express":
      _ifExpress();
      break;
  }
  return { result: file, fileExtension: file.originalname.split(".").pop() };
}
