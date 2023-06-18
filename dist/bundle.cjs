'use strict';

var fs = require('fs');
var path = require('path');

var File = /** @class */ (function () {
    function File(file, filePath, type) {
        var _this = this;
        this.file = null;
        this.fileExtention = "bin";
        this.type = "";
        this.filePath = undefined;
        this.fileName = "";
        this.setFile = function (file) {
            _this.file = file;
        };
        this.setFileName = function (name) {
            _this.fileName = name;
        };
        this.setFilePath = function (path) {
            _this.filePath = path;
        };
        this.setFileExtension = function (fileExtention) {
            _this.fileExtention = fileExtention;
        };
        this.setType = function (type) {
            _this.type = type;
        };
        this.getFile = function () {
            return _this.file;
        };
        this.getFileExtension = function () {
            return _this.fileExtention;
        };
        this.getType = function () {
            return _this.type;
        };
        this.getFilePath = function () {
            return _this.filePath;
        };
        this.getName = function () {
            return _this.fileName;
        };
        if (!file) {
            throw new Error("Please, specify in first value a file.");
        }
        this.file = file;
        this.filePath = filePath;
        this.type = type;
    }
    return File;
}());

function _ifBinaryData(file, options) {
    return {
        result: Buffer.from(file, "binary"),
        fileExtension: options && options.fileExtention || "bin",
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __ifMulter(file, options) {
    return {
        result: file.buffer,
        fileExtension: (options === null || options === void 0 ? void 0 : options.fileExtention) || file.originalname.split(".").pop(),
    };
}
function __ifFastify(file, options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {};
                    return [4 /*yield*/, file.toBuffer()];
                case 1: return [2 /*return*/, (_a.result = _b.sent(),
                        _a.fileExtension = (options === null || options === void 0 ? void 0 : options.fileExtention) || file.filename.splut(".").pop(),
                        _a)];
            }
        });
    });
}
function __ifBuffer(file, options) {
    return { result: file, fileExtension: (options === null || options === void 0 ? void 0 : options.fileExtention) || "txt" };
}
function _ifRegularFile(file, options) {
    var _a;
    var obj = {
        multer: function (file) { return __ifMulter(file, options); },
        buffer: function (file) { return __ifBuffer(file, options); },
        fastify: function (file) { return __ifFastify(file, options); },
    };
    var key = ((_a = options === null || options === void 0 ? void 0 : options.fileType) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || "buffer";
    var response = null;
    var current = obj[key];
    if (current) {
        response = current(file);
    }
    return response;
}

function _setters(newFile, result, fileExtension) {
    newFile.setFile(result);
    newFile.setFileExtension(fileExtension);
}

function _fileConverter(options, newFile) {
    var _a, _b;
    var result = null;
    var fileExtension = null;
    var file = newFile.getFile();
    if ((options && options.isBinaryData) || (!file.originalname && !(options === null || options === void 0 ? void 0 : options.fileType))) {
        (_a = _ifBinaryData(file, options), result = _a.result, fileExtension = _a.fileExtension);
    }
    else {
        (_b = _ifRegularFile(file, options), result = _b.result, fileExtension = _b.fileExtension);
    }
    _setters(newFile, result, fileExtension);
}

var crypto = require('crypto');
function _setFileName(newFile) {
    var id = crypto.randomUUID();
    var name = id + "." + newFile.getFileExtension();
    newFile.setFileName(name);
}

function _typeGenerating(options) {
    var isGenerateNeeded = options === null || options === void 0 ? void 0 : options.folderGenerate;
    var folderGenerating = isGenerateNeeded === undefined ? true : isGenerateNeeded;
    var defaultName = (options === null || options === void 0 ? void 0 : options.isBinaryData) ? "BinData" : "BuffData";
    var folderName = (options === null || options === void 0 ? void 0 : options.type) || defaultName;
    return folderGenerating ? folderName : "";
}

function __createDir(params) {
    var finalPath = path.resolve.apply(path, params);
    if (!fs.existsSync(finalPath)) {
        fs.mkdirSync(finalPath, { recursive: true });
    }
    return finalPath;
}

function __returnBuffer(newFile) {
    var file = newFile.getFile();
    var isBuffer = Buffer.isBuffer(file);
    return isBuffer ? file : file.buffer;
}

function __changeTheRootPath(params, isPathExist, src) {
    var newPath = isPathExist ? "".concat(src, "\\").concat(params[0]) : src;
    params.shift();
    params.unshift(newPath);
}

function _writeFile(newFile, src) {
    var type = newFile.getType();
    var tempPath = newFile.getFilePath();
    var isPathExist = tempPath ? true : false;
    var params = isPathExist
        ? [tempPath + "/" + type]
        : [process.cwd(), "static", type];
    if (src) {
        __changeTheRootPath(params, isPathExist, src);
    }
    var finalPath = __createDir(params);
    var buffer = __returnBuffer(newFile);
    fs.writeFileSync(path.resolve(finalPath, newFile.getName()), buffer);
}

function saveFile(_a) {
    var file = _a.file, _b = _a.filePath, filePath = _b === void 0 ? undefined : _b, _c = _a.options, options = _c === void 0 ? undefined : _c;
    var type = _typeGenerating(options);
    var newFile = new File(file, filePath, type);
    try {
        _fileConverter(options, newFile);
    }
    catch (error) {
        throw new Error((options === null || options === void 0 ? void 0 : options.isBinaryData)
            ? "You specifed that file is a raw binary data, but it is not"
            : error.message);
    }
    _setFileName(newFile);
    try {
        _writeFile(newFile, options === null || options === void 0 ? void 0 : options.src);
    }
    catch (error) {
        throw new Error("Something went wrong when creating a file" + " " + error.message);
    }
    return newFile.getName();
}

function _findFile(directoryPath, fileName, ignoreExtension, callBack) {
    var files = fs.readdirSync(directoryPath);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filePath = path.join(directoryPath, file);
        var status = fs.statSync(filePath);
        var infoFile = path.parse(filePath);
        var currentFile = ignoreExtension ? infoFile.name : file;
        if (status.isDirectory()) {
            return _findFile(filePath, fileName, ignoreExtension, callBack);
        }
        else if (currentFile === fileName) {
            return callBack(directoryPath, "".concat(infoFile.name).concat(infoFile.ext));
        }
    }
    return callBack(false);
}

function __callback(resultPath, fileName) {
    var result = false;
    if (resultPath) {
        var neededPath = path.resolve(resultPath, fileName);
        fs.unlinkSync(neededPath);
        result = true;
    }
    return result;
}

function __deleteFile(neededPath, options, into, fileID) {
    fs.unlinkSync(neededPath);
    // secure level, for not letting dumbass delete the whole system.
    var folderLevel = neededPath.split("\\") || neededPath.split("/");
    if ((options === null || options === void 0 ? void 0 : options.deleteAll) && folderLevel.length > 2) {
        fs.readdir(into, function (err, files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                if (file !== fileID) {
                    fs.unlinkSync(file);
                }
            }
        });
    }
    return true;
}

function _delteAtPath(_a) {
    var fileID = _a.fileID, _b = _a.funOptions, funOptions = _b === void 0 ? undefined : _b, options = _a.options, into = _a.into;
    var isError = true;
    var result = false;
    var neededFile = path.join(into, fileID);
    if (fs.existsSync(neededFile)) {
        result = __deleteFile(neededFile, options, into, fileID);
        isError = !result;
    }
    var ignoreExtension = (options === null || options === void 0 ? void 0 : options.ignoreExtension) || false;
    if (!(funOptions === null || funOptions === void 0 ? void 0 : funOptions.isPathSpecifed) || ignoreExtension) {
        result = _findFile(into, fileID, ignoreExtension, __callback);
        isError = !result;
    }
    if ((funOptions === null || funOptions === void 0 ? void 0 : funOptions.isErrNeed) && isError) {
        throw new Error("Something is wrong with path");
    }
    return result;
}

function _checkFunctionParam(_a) {
    var fileID = _a.fileID, filePath = _a.filePath, options = _a.options;
    if (!fileID) {
        throw new Error("Please specify in first value an id of a file");
    }
    if ((options === null || options === void 0 ? void 0 : options.deleteAll) && !filePath) {
        throw new Error("Can not delete all files if path is not specifed for securite reason");
    }
    // DELETE THIS IF STATEMENT IF YOU WANT TO USE deleteAll.
    // ============================================================
    if (options === null || options === void 0 ? void 0 : options.deleteAll) {
        throw new Error("Sorry, it is too hight risk, but if you are sure that you want to use this, then you have to delete this if statement. Then it will work");
    }
    // =============================================================
}

function deleteFile(_a) {
    var fileID = _a.fileID, _b = _a.filePath, filePath = _b === void 0 ? undefined : _b, _c = _a.options, options = _c === void 0 ? undefined : _c;
    _checkFunctionParam({ fileID: fileID, options: options, filePath: filePath });
    var rootDir = (options === null || options === void 0 ? void 0 : options.src) || process.cwd();
    var into = null;
    if (filePath) {
        var userPath = [rootDir, filePath];
        var funOptions = { isErrNeed: true, isPathSpecifed: true };
        into = path.join.apply(path, userPath);
        return _delteAtPath({ fileID: fileID, into: into, funOptions: funOptions, options: options });
    }
    var staticPath = [rootDir, "static"];
    into = path.join.apply(path, staticPath);
    return _delteAtPath({ fileID: fileID, into: into, options: options });
}

exports.deleteFile = deleteFile;
exports.saveFile = saveFile;
