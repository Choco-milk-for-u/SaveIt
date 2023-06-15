import saveFile from "./saveFile";

const buffer = Buffer.from('Hello, world!', 'utf8');;
saveFile({file: buffer});