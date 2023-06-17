import { IOptions } from "../types/saveFile.interface";

export function _typeGenerating(options: IOptions | undefined) {
  const isGenerateNeeded = options?.folderGenerate;
  const folderGenerating = isGenerateNeeded === undefined ? true : isGenerateNeeded;
  const defaultName = options?.isBinaryData ? "BinData" : "BuffData";
  const folderName = options?.type || defaultName;
  return folderGenerating ? folderName : "";
}
