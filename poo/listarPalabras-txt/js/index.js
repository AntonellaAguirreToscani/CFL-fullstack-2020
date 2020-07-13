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
var ReadlineSync = __importStar(require("readline-sync"));
var fs = __importStar(require("fs"));
var text = fs.readFileSync('list.txt', 'utf-8');
var arrayWords = text.split(' ');
function searchItem(array, word) {
    var item = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == word) {
            item = i;
        }
    }
    return item;
}
;
function deleteWord(array) {
    var findWord = ReadlineSync.question('Palabra a borrar: ');
    array.splice(searchItem(array, findWord), 1);
    return array;
}
;
function changeWord(array) {
    var change = ReadlineSync.question('Palabra a Actualizar: ');
    array[searchItem(array, change)] = ReadlineSync.question('palabra nueva:');
    return array;
}
;
console.log(arrayWords);
console.log(deleteWord(arrayWords));
console.log(changeWord(arrayWords));
