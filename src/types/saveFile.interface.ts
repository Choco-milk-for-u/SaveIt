export interface IOptions {
  isBinaryData?: boolean;
  type?: string;
  fileExtention?: string;
  fileType?: string;
  src?: string;
  folderGenerate?: boolean;
}
export interface saveFile {
  file: Buffer | unknown | null;
  filePath?: string | undefined;
  options?: IOptions;
}