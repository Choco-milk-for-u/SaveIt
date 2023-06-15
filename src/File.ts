export class File {
  private file: any = null;
  private fileExtention: string = "bin";
  private type: string = "";
  private filePath: string = "";
  private fileName: string = "";
  constructor(file: any, filePath: string, type: string) {
    this.file = file;
    this.filePath = filePath;
    this.type = type;
  }
  setFile = (file: any) => {
    this.file = file;
  };
  setFileName = (name: string) => {
    this.fileName = name;
  };
  setFilePath = (path: string) => {
    this.filePath = path;
  };
  setFileExtension = (fileExtention: string) => {
    this.fileExtention = fileExtention;
  };
  setType = (type: string) => {
    this.type = type;
  };
  getFile = () => {
    return this.file;
  };
  getFileExtension = () => {
    return this.fileExtention;
  };
  getType = () => {
    return this.type;
  };
  getFilePath = () => {
    return this.filePath;
  };
  getName = () => {
    return this.fileName;
  };
}
