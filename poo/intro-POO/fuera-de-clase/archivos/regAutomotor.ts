import * as fs from 'fs';
import * as ReadlineSync from "readline-sync"; 
import { strict } from 'assert';
import { compileFunction } from 'vm';
import { threadId } from 'worker_threads';

class Auto{
    private marca: string;
    private modelo: string;
    private anio: string;
    private _patente : string;
    private kilometraje: string;
    private _titular: string;
  
    constructor(_marca:string,_modelo:string,_anio:string,_patente:string,_km:string,_titular:string){
        this.marca=_marca;
        this.modelo=_modelo;
        this.anio=_anio;
        this._patente=_patente;
        this.kilometraje=_km;
        this._titular=_titular;
        
    }
    public get patente():string{
        return this._patente;
    }

    public get titular():string{
        return this._titular;
    }
    public set titular(nuevoTitular:string){
       this._titular = nuevoTitular;
    }
   
    aumentarKm():void{
        this.kilometraje= this.kilometraje+1;
    }
}

class RegistroAutomotor{
    private listadoAutos : Auto[];

    constructor(_listadoAutos?:Auto[]){
        if(_listadoAutos==null||_listadoAutos==undefined){
            this.listadoAutos=[];
        }else{
            this.listadoAutos=_listadoAutos;
        }
      
    }
    buscarAuto(patente:string):number{
        let posicion:number=-1;
        for(let i:number=0;i<this.listadoAutos.length;i++){
         if(this.listadoAutos[i].patente===patente){
             posicion=i;
            }
        }
        return posicion;
    }
    eliminarAuto(patente:string):void{
        this.listadoAutos.splice(this.buscarAuto(patente),1);
    }
    actualizarAuto(patente:string,nuevoTitular:string):void{
        this.listadoAutos[this.buscarAuto(patente)].titular=nuevoTitular;
    }
    darAlta(auto:Auto):Auto{
      this.listadoAutos.push(auto);
      return auto;
    }      
}
//Importando archivo txt
let autos:string = fs.readFileSync('regAutomotor.txt','utf-8');
let arrayAutos:string[]=autos.split(/\r\n|\n/);
//Metodo para convertir cada posicion del arrayAutos en un objeto: Auto
function cargarAutos(arreglo:string[]):Auto[]{
    let arrayAutos:Auto[]=[];
    arreglo.map(function(item){
       let cadena:string[]= item.split(',');
        let marca:string=cadena[0];
        let modelo:string=cadena[1];
        let anio:string=cadena[2];
        let patente:string=cadena[3];
        let km:string=cadena[4];
        let titular:string=cadena[5];
        arrayAutos.push(new Auto(marca,modelo,anio,patente,km,titular));

    })
    return arrayAutos;
}
//Instanciando mi registro
let registro:RegistroAutomotor=new RegistroAutomotor(cargarAutos(arrayAutos));
//LLamando funcionalidad buscarAuto de mi objeto RegistroAutomotor(busca al auto por la patente y muestra su posicion)
console.log(registro.buscarAuto('JSR446'));
//LLamando funcionalidad EliminarAuto de mi objeto RegistroAutomotor
registro.eliminarAuto('JSR446');
//LLamando funcionalidad ActualizarAuto de mi objeto RegistroAutomotor (busca el auto y actualiza el titular)
let nuevoTitular:string='Lola';
registro.actualizarAuto('MIP501',nuevoTitular);
//Creando un nuevo Auto para darlo de alta en el registroAutomotor.
let nuevoAuto:Auto=new Auto('Ford','Focus','2000','AAS111','100000','Rodrigo');
registro.darAlta(nuevoAuto);

console.log(registro);



