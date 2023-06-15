export default function deleteFile(fileID: string, filePath: string = "") {
  if (!fileID) {
    throw new Error("Please specify in first value a id of a file");
  }
}
