import * as fs from 'fs';

let texto:string= fs.readFileSync('texto.txt','utf-8');

let arrayPalabras: string[] = texto.split(' ');

console.log(arrayPalabras);