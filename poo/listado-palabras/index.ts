import * as ReadlineSync from "../node_modules/readline-sync";

function putWords () :string[]{
    let array: string[]=[];
    let word:string= ReadlineSync.question('Ingresar Palabra: ');
    let i:number= 0;
    while(word!='!'){ 
        array[i]= word;
        i++;
        word = ReadlineSync.question('Ingresar Palabra: ');    
    }
    return array;
};

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

let listWords: string[] = putWords();

console.log(listWords);
console.log(deleteWord(listWords));
console.log(changeWord(listWords));
