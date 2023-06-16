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

function __ifMulter(file, options) {
    return {
        result: file,
        fileExtension: (options === null || options === void 0 ? void 0 : options.fileExtention) || file.originalname.split(".").pop(),
    };
}
function __ifBuffer(file, options) {
    return { result: file, fileExtension: (options === null || options === void 0 ? void 0 : options.fileExtention) || "txt" };
}
function _ifRegularFile(file, options) {
    var _a;
    options = options ? options : { fileType: "express" };
    var obj = {
        multer: function (file) { return __ifMulter(file, options); },
        buffer: function (file) { return __ifBuffer(file, options); },
    };
    var key = ((_a = options.fileType) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || "multer";
    var response = null;
    var current = obj[key];
    if (current) {
        response = current(file);
    }
    response = obj["buffer"](file);
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

function _setFileName(newFile) {
    var name = "name" + "." + newFile.getFileExtension();
    newFile.setFileName(name);
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

function _writeFile(newFile, src) {
    var type = newFile.getType();
    var isPathExist = newFile.getFilePath() ? true : false;
    var params = isPathExist
        ? [newFile.getFilePath() + "/" + type]
        : [process.cwd(), "static", type];
    if (src) {
        params.unshift(src);
    }
    var finalPath = __createDir(params);
    var buffer = __returnBuffer(newFile);
    fs.writeFileSync(path.resolve(finalPath, newFile.getName()), buffer);
}

function saveFile(_a) {
    var file = _a.file, _b = _a.filePath, filePath = _b === void 0 ? undefined : _b, _c = _a.options, options = _c === void 0 ? undefined : _c;
    var type = (options === null || options === void 0 ? void 0 : options.type) || "BinData";
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

function _findFile(directoryPath, fileName, callBack) {
    fs.readdir(directoryPath, function (err, files) {
        var _loop_1 = function (file) {
            var filePath = path.join(directoryPath, file);
            fs.stat(filePath, function (statErr, stats) {
                if (stats.isDirectory()) {
                    _findFile(filePath, fileName, callBack);
                }
                else if (file === fileName) {
                    return callBack(directoryPath, fileName);
                }
            });
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            _loop_1(file);
        }
    });
    return callBack(null);
}

// just call back for return result
var _callBack = function (resultPath, fileName) {
    var result = false;
    if (resultPath) {
        var neededPath = path.resolve(resultPath, fileName);
        fs.unlinkSync(neededPath);
        result = true;
    }
    return result;
};
// main logic
function _delteAtPath(fileID, into, funOptions, options) {
    var isError = true;
    if (fs.existsSync(into)) {
        var neededPath = path.resolve(into, fileID);
        if (fs.existsSync(neededPath)) {
            fs.unlinkSync(neededPath);
            if (options === null || options === void 0 ? void 0 : options.deleteAll) {
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
        if (!(funOptions === null || funOptions === void 0 ? void 0 : funOptions.isPathSpecifed)) {
            isError = _findFile(into, fileID, _callBack);
        }
    }
    if ((funOptions === null || funOptions === void 0 ? void 0 : funOptions.isErrNeed) && isError) {
        throw new Error("Something is wrong with path");
    }
    return false;
}

function deleteFile(_a) {
    var fileID = _a.fileID, _b = _a.filePath, filePath = _b === void 0 ? undefined : _b, _c = _a.options, options = _c === void 0 ? undefined : _c;
    if (!fileID) {
        throw new Error("Please specify in first value an id of a file");
    }
    if ((options === null || options === void 0 ? void 0 : options.deleteAll) && !filePath) {
        throw new Error("Can not delete all files if path is not specifed for securite reason");
    }
    var rootDir = (options === null || options === void 0 ? void 0 : options.src) || process.cwd();
    var staticPath = [rootDir, "static"];
    if (filePath) {
        var userPath = (options === null || options === void 0 ? void 0 : options.src) ? [options.src, filePath] : [filePath];
        var funOptions = { isErrNeed: true, isPathSpecifed: true };
        return _delteAtPath(fileID, path.join.apply(path, userPath), funOptions);
    }
    return _delteAtPath(fileID, path.resolve.apply(path, staticPath));
}

exports.deleteFile = deleteFile;
exports.saveFile = saveFile;
