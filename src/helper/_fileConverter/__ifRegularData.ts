export function _ifRegularFile(file: any) {
  return { result: file, fileExtension: file.originalname.split(".").pop() };
}
