import saveFile from "./saveFile";

const buffer = Buffer.from("Hello, world!", "utf8");
saveFile({
  file: {originalname: 's.jpeg'},
  filePath: `${__dirname}/static`,
  options: { type: 'video', fileType: 'express', 'isBinaryData': true, fileExtention: 'jpeg'},
});
