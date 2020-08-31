"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
var fs = __importStar(require("fs"));
var FileManager = /** @class */ (function () {
    function FileManager(_fileName) {
        var studentsList = fs.readFileSync(this._fileName = _fileName, 'utf-8');
        this._list = new Set(studentsList.split('\r\n'));
    }
    FileManager.prototype.updateFile = function () {
        var buffer = Buffer.from(Array.from(this._list).join('\r\n'));
        fs.writeFile('students.txt', buffer, function (err) {
            return (err) ? console.log('err') : console.log('Done');
        });
    };
    FileManager.prototype.searchLine = function (id) {
        var contents = '';
        Array.from(this._list).forEach(function (item) {
            contents = (item.indexOf(id.toString()) > -1) ? item : contents;
        });
        return contents;
    };
    FileManager.prototype.writeLine = function (text, file) {
        this._list.add(text);
        this.updateFile();
    };
    FileManager.prototype.deleteLine = function (id) {
        this._list.delete(this.searchLine(id));
        this.updateFile();
    };
    Object.defineProperty(FileManager.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileManager.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        enumerable: false,
        configurable: true
    });
    return FileManager;
}());
exports.FileManager = FileManager;
