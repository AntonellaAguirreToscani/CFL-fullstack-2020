"use strict";
exports.__esModule = true;
var ReadlineSync = require("../node_modules/readline-sync");
function putWords() {
    var array = [];
    var word = ReadlineSync.question('Ingresar Palabra: ');
    var i = 0;
    while (word != '!') {
        array[i] = word;
        i++;
        word = ReadlineSync.question('Ingresar Palabra: ');
    }
    return array;
}
;
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
var listWords = putWords();
console.log(listWords);
console.log(deleteWord(listWords));
console.log(changeWord(listWords));
