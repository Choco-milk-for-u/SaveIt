import { IOptions } from "./../../types/saveFile.interface";
type OptionRegularFile = IOptions | undefined;

function __ifMulter(file: any, options: OptionRegularFile) {
  return {
    result: file.buffer,
    fileExtension: options?.fileExtention || file.originalname.split(".").pop(),
  };
}
async function __ifFastify(file: any, options: OptionRegularFile) {
  return {
    result: await file.toBuffer(),
    fileExtension: options?.fileExtention || file.filename.splut(".").pop(),
  };
}
function __ifBuffer(file: any, options: OptionRegularFile) {
  return { result: file, fileExtension: options?.fileExtention || "txt" };
}
export function _ifRegularFile(file: any, options: OptionRegularFile) {
  const obj = {
    multer: (file: any) => __ifMulter(file, options),
    buffer: (file: any) => __ifBuffer(file, options),
    fastify: async (file: any) => await __ifFastify(file, options),
  };
  const key: string = options?.fileType?.toLocaleLowerCase() || "buffer";
  let response = null;
  const current = obj[key as keyof Object];
  if (current) {
    response = current(file);
  }
  return response;
}
