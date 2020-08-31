import {Vehiculo} from './vehiculo';
import { GestorArchivo } from './gestorArchivo';

export class RegistroAutomotor {
    private gestor: GestorArchivo;
    private listadoVehiculos: Vehiculo[];

    public constructor(gestor:GestorArchivo) {
        // this.gestor= new GestorArchivo(nombreArchivoTxt);
        this.gestor= gestor;
        this.listadoVehiculos = this.gestor.cargarVehiculos();
    }

    public buscarVehiculo(patente:string):Vehiculo{
        let vehiculoEncontrado: Vehiculo = this.listadoVehiculos.reduce((object,vehiculo)=>{ //object: Es lo q retorna el reduce
            if (vehiculo.patente == patente ) {
               object = vehiculo;
            }
            return object;
        },<Vehiculo> {} ); // Casting!
 
        return vehiculoEncontrado;
    }
    public agregarVehiculo(vehiculoNuevo:Vehiculo):void{
        this.listadoVehiculos.push(vehiculoNuevo);
        this.gestor.escribirLinea(vehiculoNuevo);
    }
    public eliminarVehiculo(patente:string):void{
        this.listadoVehiculos.map((vehiculo,index)=>{
            if(vehiculo.patente== patente){
                this.listadoVehiculos.splice(index,1);
                this.gestor.eliminarLinea(vehiculo.patente);
            }
        })
    }
    public actualizarTitular(patente:string, nuevoTit:string):void{
        this.buscarVehiculo(patente).titular = nuevoTit;
        this.gestor.actualizarTitularTxt(patente,nuevoTit);
    }
   
   
}