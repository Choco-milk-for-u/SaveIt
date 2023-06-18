import { IDeleteFile } from "../types/deleteFile.interface";

export function _checkFunctionParam({ fileID, filePath, options }: IDeleteFile) {
    if (!fileID) {
      throw new Error("Please specify file name/id");
    }
    if (options?.deleteAll && !filePath) {
      throw new Error(
        "You cannot delete all files without specifying the file path."
      );
    }
    // DELETE THIS IF STATEMENT IF YOU WANT TO DELETE ALL FILES. IT'S YOUR OWN DECISION
    // ============================================================
    if (options?.deleteAll) {
      throw new Error(
        "Sorry, this is too much of a risk, but if you are sure you want to use this, go to node_modules folder find the SaveIt folder and remove the single if statement. Then everything will work"
      );
    }
    // =============================================================
  }