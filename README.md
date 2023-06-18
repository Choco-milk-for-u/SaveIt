# SaveIt
**SaveIt** is a package that allows you to save files in a static folder (or anywhere else). Many Node.js frameworks have their own way of handling files (fastify, multer). **SaveIt** has the ability to consider it. The package has two functions (save and delete). TypeScript support and small file size will help you get started very quickly.
# Usage
```js
import { saveFile } from "saveit.mjs"; // or .cjs

// yourFile is a file or a buffer/binary data
saveFile({file: yourFile});
```
# Instalation
| Way to install     |    command |  version|
| :-------------: |:-------------:| :-----:|
| **NPM**      | `npm i saveit.cjs` | commonJS|
| **NPM**      | `npm i saveit.mjs` | ecmaJS|
| **NPM**      | `npm i @types/saveit.cjs` | commonJS|
| **NPM**      | `npm i @types/saveit.mjs` | ecmaJS  |
# Why?
This will help you save time and also serve as a great refactoring tool.
# All functions

## saveFile
### How to use
<details>
  <summary>Ecma JS</summary>
  <h4>Simple example</h4>
  
```js
  import { saveFile } from "saveit.mjs";
  saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return the file ID on success
```
  <h4>Senior example</h4> 
  
```js
    import { saveFile } from "saveit.mjs";
    
    const yourOptions = {
    isBinaryData: yourBoolean,
    type: yourType,
    folderGenerate: yourFolderBoolean,
    fileExtention: yourFileExtension,
    fileType: yourFileType,
    src: yourSrc
    }
    saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return the file ID on success
```
</details>

<details>
  <summary>Common JS</summary>
  <h4>Simple example</h4>
  
```js
  const {saveFile} = require("saveit.cjs");
  saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return the file ID on success
```
  <h4>Senior example</h4>
  
```js
    const {saveFile} = require("saveit.cjs");
    
    const yourOptions = {
    isBinaryData: yourBoolean,
    type: yourType,
    fileExtention: yourFileExtension,
    folderGenerate: yourFolderBoolean, 
    fileType: yourFileType,
    src: yourSrc
    }
    saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return the file ID on success
```
</details>

### Parameters
* file
  * reqired
  * Buffer / Binary data OR Object from the framework file processing. If it is an object, you must use <ins>fileType</ins> property of the otpions object. If it is raw binary data, you must use <ins>isBinaryData</ins> property of the otpions object.
* filePath
  * not reqired
  * String that will point **SaveIt** to the location where you want to save the file.
  * The string will be passed to the path.resolve method of Node.js. So if you will pass `/a`, it will probably ( If you did not specify the src property in the options parameter of the saveFile function) go in `C:\a`.
  * Will create the path if it does not exist.
* options
  * not reqired 
  * Object that can make your life a little easier (read about the properties of the options in the "Options" section). 
### Options
* isBinaryData
  * default is false 
  * Boolean value that tells **SaveIt** whether the value in the function parameter (file parameter) is binary data.
  * Will ignore fileType propertie of the options object.
* type
  * default is BuffData / BinData (if options.isBinaryData equals true then BinData). 
  * String that tells **SaveIt** what the file is, it is optional and will only create a folder with the name of the value.
* folderGenerate
  * default is true
  * Boolean value indicating whether **SaveIt** should generate the folder based on the type propertie from options object.
* fileExtention
  * default is .bin or .txt (if options.isBinaryData equals true then .bin). 
  * String that tells **SaveIt** which extension the file should have when saved. The original file extension will be ignored.
  * Do **not** include the dot (.)
* fileType
  * default is buffer
  * String that tells **SaveIt** how to process the file. Each framework has its own object when it works with a file.

  list of patterns:
    * buffer
    * multer
    * fastify
* src
  * default is your working root
  * String pointing **SaveIt** to the root folder. (will work in this folder) and is combined with filePath if it exists.
  * it will pass the string to path.resolve() so if you will pass "/a", then it will set `C:\a` as a root folder.
## deleteFile
### How to use
<details>
  <summary>Ecma JS</summary>
  <h4>Simple example</h4>
  
```js
  import { deleteFile } from "saveit.mjs";
  deleteFile({fileID: nameOfFile, filePath: yourPath, options: yourOptions}); // will return true on success
```  
  <h4>Senior example</h4>
  
```js
    import { deleteFile } from "saveit.mjs";
    
    const options = {
    deleteAll: yourBoolean,
    src: yourRootPath,
    ignoreExtension: yourIgnoreBoolean
    }
    saveFile({fileID: nameOfFile, filePath: yourPath, options: yourOptions}); // will return true on success
```
</details>

<details>
  <summary>Common JS</summary>
  <h4>Simple example</h4>
  
```js
  const {deleteFile} = require("saveit.cjs");
  deleteFile({fileID: yourFile, filePath: yourFile, options: yourOptions}); // will return true on success
```
  <h4>Senior example</h4>
  
```js
  const {deleteFile} = require("saveit.cjs");
    
  const options = {
    deleteAll: yourBoolean,
    src: yourRootPath,
    ignoreExtension: yourIgnoreBoolean
  }
  deleteFile({fileID: yourFile, filePath: yourFile, options: yourOptions}); // will return true on success
```
</details>

### Parameters
* fileID
  * reqired
  * String that tells **SaveIt** the name of the file.
* filePath
  * not reqired
  * String that pointig **SaveIt** file path.
  * If it is not passed, then **SaveIt** will look in the root working folder by default or src property will look for static folder (if it is not there, it will give an error) will look in all files (including folders) and delete the file with name that was specified in fileID, if not, it will return false otherwise it will delete and return true.
  * The string will be passed to the path.resolve method of Node.js. So if you will pass `/a`, it will probably ( If you did not specify the src property in the options parameter of the saveFile function) go in `C:\a`.
* options
  * not reqired 
  * Object that can make your life a little easier (read about the properties of the options in the "Options" section). 
### Options
* src
  * default is your working root
  * String pointing **SaveIt** to the root folder. (will work in this folder) and is combined with filePath if it exists.
  * it will pass the string to path.resolve() so if you will pass "/a", then it will set `C:\a` as a root folder.
  * **WITHOUT FILEPATH WILL ALSO ADD STATIC FOLDER IN THAT STRING**
* ignoreExtension
  * default is false
  * Boolean value that tells **SaveIt** whether fileID is a name with extension (.exe,.txt,..etc) or not. If not, the first file with the name that matched will be deleted.
**Dangerous, do not use this if you are not a professional, it can delete everything in your personal computer**
* deleteAll
  * default is false 
  * Boolean. true - means that all files on this path should be deleted.  
# Support
SaveIt support **Ecma js** and **Common js** and **Typescript**.
