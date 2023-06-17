import { IDeleteFile } from "../types/deleteFile.interface";

export function _checkFunctionParam({ fileID, filePath, options }: IDeleteFile) {
    if (!fileID) {
      throw new Error("Please specify in first value an id of a file");
    }
    if (options?.deleteAll && !filePath) {
      throw new Error(
        "Can not delete all files if path is not specifed for securite reason"
      );
    }
    // DELETE THIS IF STATEMENT IF YOU WANT TO USE deleteAll.
    // ============================================================
    if (options?.deleteAll) {
      throw new Error(
        "Sorry, it is too hight risk, but if you are sure that you want to use this, then you have to delete this if statement. Then it will work"
      );
    }
    // =============================================================
  }