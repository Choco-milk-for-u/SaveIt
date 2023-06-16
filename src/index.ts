import saveFile from "./saveFile";
import deleteFile from "./deleteFile";
import path from "path";
// const buffer = Buffer.from("hi");
// saveFile({file: buffer});
const heed = [__dirname, '/static/', '/BinData'];
const r = path.join(...heed);
deleteFile({fileID: 'name.bin', options: {src: __dirname}});
export {saveFile, deleteFile};