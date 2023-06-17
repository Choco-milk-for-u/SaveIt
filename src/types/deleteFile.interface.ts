export interface IOptionsDelete {
  deleteAll?: boolean;
  src?: string;
  ignoreExtension?: boolean;
}
export interface IDeleteFile {
  fileID: string;
  filePath?: string;
  options?: IOptionsDelete;
}
interface IDeletePath {
  isErrNeed: boolean;
  isPathSpecifed: boolean;
}
export interface IDeleteAtPathFun {
  fileID: string;
  into: string;
  funOptions?: IDeletePath;
  options?: IOptionsDelete;
}
