import * as ReadlineSync from "readline-sync";
import * as fs from 'fs';

let text:string = fs.readFileSync('list.txt','utf-8');
let arrayWords: string[] = text.split(' ');

function searchItem(array: string[], word:string):number{
    let item:number=-1;
    for (let i:number= 0; i < array.length; i++) {
        if(array[i]==word){
            item= i;
        }
    }   
    return item;
};

function deleteWord(array: string[]): string[] {
    let findWord: string = ReadlineSync.question('Palabra a borrar: ');
    array.splice(searchItem(array,findWord),1);
    return array;
};

function changeWord(array: string[]): string[] {
    let change: string = ReadlineSync.question('Palabra a Actualizar: ');
    array[searchItem(array,change)]=ReadlineSync.question('palabra nueva:');
    return array;
};

console.log(arrayWords);
console.log(deleteWord(arrayWords));
console.log(changeWord(arrayWords));


