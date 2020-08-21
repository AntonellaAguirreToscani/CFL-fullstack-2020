import * as fs from 'fs';
import {Vehiculo} from './vehiculo';
import {Auto} from './auto';
import {Camion} from './camion';
import {Moto} from './moto';

interface IGestorArchivo{
    cargarVehiculos():Vehiculo[];
    convertir(obj:Vehiculo):string;
    actualizarArchivo():void;
    escribirLinea(obj:Vehiculo):void;
    buscarLinea(patente:string):string;
    eliminarLinea(patente:string):void
    actualizarTitularTxt(patente:string, nuevoTitular:string):void
    buscarPosicion(linea:string):number;
}

export class GestorArchivo implements IGestorArchivo {
    private nombreArchivo: string;
    private _listado: Set<string>; //set: estructura de datos que no permite DUPLICADOS

    public constructor(_nombreArchivo: string) {
        let archivoTxt: string = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = new Set <string>(archivoTxt.split('\r\n')); // SE INSTANCIA SET!
    }

    public get listado(): Set<string> {
        return this._listado;
    }
    public cargarVehiculos(): Vehiculo[] {
        let listado: Vehiculo[] = [];
        //Nueva logica
        Array.from(this._listado).forEach((item)=>{
            let cadena: string[] = item.split(',');
            switch (parseInt(cadena[0])) {
                case 1: //Representa un Auto
                    listado.push(new Auto(parseInt(cadena[0]),cadena[1],cadena[2],cadena[3],parseInt(cadena[4])));
                    break;
                case 2: //Representa una Moto
                    listado.push(new Moto(parseInt(cadena[0]),cadena[1],cadena[2],cadena[3]));
                    break;
                case 3: //Representa un Camion 
                    listado.push(new Camion(parseInt(cadena[0]),cadena[1],cadena[2],cadena[3]));
                    break;
            }
        });
        return listado;
    }
    //Método para convertir un objeto:Vehiculo a string.
    public convertir(obj:Vehiculo):string{
        let texto: string[]=[];
        for(const [key,value] of Object.entries(obj)){ //RECORRO EL OBJETO
            switch (key) {
                case 'tipo':
                    texto.push(value.toString());
                    break;
                case '_titular':
                    texto.push(value);
                    break;
                case '_patente':
                    texto.push(value);    
                    break;
                case 'marcaModelo':
                    texto.push(value);
                    break;
                case 'cantidadPuertas':
                    texto.push(value.toString()); 
                    break;    
            }
        }
        return texto.join(',');
    }
  
    public actualizarArchivo():void{
        // Hay q convertir el SET en Array (Array.from) para poder utilizar el buffer
        let buffer:Buffer= Buffer.from(Array.from(this._listado).join('\r\n'));
        fs.writeFile('vehiculos.txt',buffer,function(err){ 
            return (err)? console.log('err') : console.log('Archivo modificado!');
        });
    }
    public escribirLinea(obj:Vehiculo):void{
        let texto: string = this.convertir(obj);
        // ADD para SET: cumple la misma funcionalidad q PUSH
        this.listado.add(texto);
        this.actualizarArchivo();   
    }
    public buscarLinea(patente:string):string{
        let contenido: string= '';
        Array.from(this._listado).forEach((item)=>{
           contenido = (item.indexOf(patente) > -1)? item : contenido;
        });
        return contenido;
    }
    public eliminarLinea(patente:string):void{
        this._listado.delete(this.buscarLinea(patente));
        this.actualizarArchivo();
    }
    public actualizarTitularTxt(patente:string, nuevoTitular:string):void{
        //Convierto la linea del Archivo que se busca por patente en: Arreglo. Para Actualizar cierta posicion!
        let linea:string=this.buscarLinea(patente);
        let arreglo:string[]= linea.split(',');
            arreglo[1] = nuevoTitular;
        
        let modificado= Array.from(this._listado);
        modificado[this.buscarPosicion(linea)] = arreglo.join(",");
        // instancio el nuevo Set con el listado modificado!
        this._listado=  new Set(modificado);
        
        this.actualizarArchivo();
    }
    public buscarPosicion(linea:string):number{
        let posicion: number= -1;
        Array.from(this._listado).forEach((item,index)=>{
           posicion = (item.indexOf(linea) > -1)?  index: posicion;
        });
        return posicion;
    }
    
}