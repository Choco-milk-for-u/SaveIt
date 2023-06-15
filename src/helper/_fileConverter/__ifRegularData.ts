import { IOptions } from "./../../types/saveFile.interface";

function __ifMulter(file: any) {
  return {
    result: file,
    fileExtension: file.originalname.split(".").pop(),
  };
}
type OptionRegularFile = IOptions | undefined;
function __ifBuffer(file: any, options: OptionRegularFile) {
  return { result: file, fileExtension: options?.fileExtention || "txt" };
}
export function _ifRegularFile(file: any, options: OptionRegularFile) {
  options = options ? options : { fileType: "express" };
  const obj = {
    multer: (file: any) => __ifMulter(file),
    buffer: (file: any) => __ifBuffer(file, options),
  };
  const key: string = options.fileType?.toLocaleLowerCase() || "multer";
  let response = null;
  const current = obj[key as keyof Object];
  if (current) {
    response = current(file);
  }
  response = obj["buffer"](file);
  return response;
}
