# SaveIt
It is a npm package that allows you to save files into a static folder (or anywhey else). It consider the fact that many node.js back-end frameworks has own object that you recieved when your server handle a file 
so SaveIt has a support of some popular back-end frameworks. Also SaveIt has a delete function that delete files.
# Usage
```js
import { saveFile } from "./saveit.mjs"; // or .cjs

// yourFile is a file or a buffer/binary data
saveFile({file: yourFile});
```
# Instalation
| Way to install     |    command |  version|
| :-------------: |:-------------:| :-----:|
| **NPM**      | `npm i saveit.cjs` | commonJS|
| **NPM**      | `npm i saveit.mjs` | ecmaJS  |
| **YARN**      | -            |-|
# Why?
It will be your time savior and also will be great as refactor mind.
# All functions

## saveFile
### how to use
<details>
  <summary>Ecma JS</summary>
 
  <h4>Simple example</h4>
  
```js
  import { saveFile } from "./saveit.mjs";
  saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return true if success
```
  
  <h4>Senior example</h4>
  
```js
    import { saveFile } from "./saveit.mjs";
    
    const options = {
    isBinaryData: yourBoolean,
    type: yourType,
    fileExtention: yourFileExtension,
    fileType: yourFileType,
    src: yourSrc
    }
    saveFile({file: yourFile, filePath: yourFile, options: yourOptions); // will return true if success
```
</details>

<details>
  <summary>Common JS</summary>
  
  <h4>Simple example</h4>
  
```js
  const {saveFile} = { saveFile } from "./saveit.cjs";
  saveFile({file: yourFile, filePath: yourFile, options: yourOptions}); // will return true if success
```
  
  <h4>Senior example</h4>
  
```js
    const {saveFile} = { saveFile } from "./saveit.cjs";
    
    const options = {
    isBinaryData: yourBoolean,
    type: yourType,
    fileExtention: yourFileExtension,
    fileType: yourFileType,
    src: yourSrc
    }
    saveFile({file: yourFile, filePath: yourFile, options: yourOptions); // will return true if success
```
  
</details>

### parametrs
* file
  * reqired
  * It is a buffer / binary data or an object that is supported one of frameworks. (if it is raw binary data, options is needed) 
* filePath
  * not reqired
  * String that pointed where you want to save the file (will create that path if path does not exist).
* options
  * not reqired 
  * Object that can make your life a little bit easier (read about options properites in options section). 
### options
* isBinaryData
  * default is false 
  * boolean. true - tells that value file in parametr of the function is binary data. (Will ignore fileType)
* type
  * default is BuffData / BinData (if options.isBinaryData true then BinData). 
  * string that tell what kind of file is it, it is not reqired and only will create a folder with name of type value.
* fileExtention
  * default related to fileType of isBinaryData otpions properites
  * without a dot (.)
  * string that tell what file extension **SaveIt** is supposed to save as it will ignore fileType option when will write file extension
* fileType
  * default is buffer
  * string that tell **SaveIt** how to work with file. Every frameworks has their own object with own properites name.
  
  list of patterns:
    * buffer
    * multer
    * fastify
* src
  * default is working root
  * string that point **SaveIt** what the root folder is. (will work in that folder)  
## deleteFile
### how to use
### parametrs
### options
# Support
SaveIt support **Ecma js** and **Common js**. **Typescript** as well with a *package of SavedIt types*.
