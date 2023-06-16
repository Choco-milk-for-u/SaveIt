export interface IOptionsDelete {
    deleteAll?: boolean;
    src?: string;
  }
  export interface IDeleteFile {
    fileID: string;
    filePath?: string;
    options?: IOptionsDelete;
  }