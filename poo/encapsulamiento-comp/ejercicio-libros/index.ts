import * as fs from 'fs';

class Persona{
    protected nombreCompleto:string;
    protected dni:number;
    protected fechaNacimiento: Date;

    public constructor(_nombreComp:string,_dni:number,_fechaNac:Date){
        this.nombreCompleto=_nombreComp;
        this.dni=_dni;
        this.fechaNacimiento=_fechaNac;
    }
}
class Autor extends Persona{
    private cantidadLibros:number;
    protected genero:string;

    public constructor(_nombreComp:string,_dni:number,_fechaNac:Date,_genero:string,_cantLibros?:number){
        super(_nombreComp,_dni,_fechaNac);
        this.genero=_genero;
        (_cantLibros==null||_cantLibros==undefined)?this.cantidadLibros=0:this.cantidadLibros=_cantLibros;
    }
}
class Indice{
    protected titulo: string;
    protected cantCapitulos: number; 
    
    public constructor(_titulo:string,_cantCapitulos:number){
        this.titulo=_titulo;
        this.cantCapitulos=_cantCapitulos;
    }
}
class Libro{
    private _id: number;
    protected nombre: string;
    protected indice: Indice;
    protected cantidadHojas: number;
    protected autor: Autor;
    private _precio: number;

    public constructor(_id:number,_nombre:string,_indice:Indice,_cantHojas:number,_autor:Autor,_precio:number){
        this._id=_id;
        this.nombre=_nombre;
        this.indice=_indice;
        this.cantidadHojas=_cantHojas;
        this.autor=_autor;
        this._precio=_precio;
    }
    public get id():number{
        return this._id;
    }
    public get precio():number{
        return this._precio;
    }
    public set precio(precioActualizado:number){
        this._precio = precioActualizado;
    }
    static Empty(): Libro {
        return new Libro(0, '',new Indice('',0),0,new Autor('',0,new Date(''),'',0),0);
    }
}
//Clase encargada de traer el txt en Array:string (division por lineas)
class GestorArchivo{
    protected nombreArchivo: string;
    protected _listado: Array<string>;

    public constructor(_nombreArchivo: string) {
        let libros: string = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = libros.split('\r\n');
    }
    public get listado():string[]{
        return this._listado;
    }
}
//Intermediaria entre GestorARCHIVOS y GestorLIBROS
class ConversorLibros{
    private gestor:GestorArchivo;

    public constructor(archivo:string){
        this.gestor= new GestorArchivo(archivo);
    }
    public llenarListado():Libro[]{
        let listadoLibros:Libro[] =[];
        this.gestor.listado.map(item=>{
            let cadena:string[] = item.split(',');
            let id:number= parseInt(cadena[0]);
            let nombre:string= cadena[1];
            let indice:Indice= new Indice(cadena[2],parseInt(cadena[3]));
            let cantHojas:number= parseInt(cadena[4]);
            let autor:Autor= new Autor(cadena[5],parseInt(cadena[6]),new Date(cadena[7]),cadena[8],parseInt(cadena[8]));
            let precio:number= parseInt(cadena[9]);
            listadoLibros.push(new Libro(id,nombre,indice,cantHojas,autor,precio));
        });
        return listadoLibros;
    }
}
class GestorLibros{
    private baseDatos: ConversorLibros;
    private listadoLibros: Libro[];

    public constructor(_baseDatos:ConversorLibros){
        this.baseDatos=_baseDatos;
        this.listadoLibros=this.baseDatos.llenarListado();
    }
    public consultarLibro(id:number):Libro{
        let libroEncontrado:Libro= Libro.Empty();
        this.listadoLibros.forEach(libro=>{
            if(libro.id == id){
                libroEncontrado = libro;
            }
        });
        return libroEncontrado;
    }
    public insertarLibro(libroNuevo:Libro):void{
        this.listadoLibros.push(libroNuevo);
    }
    public eliminarLibro(id:number):void{
        this.listadoLibros.forEach((libro,index)=>{
            if(libro.id == id){
                this.listadoLibros.splice(index,1);
            }
        });
    }
    public modificarPrecio(id:number, nuevoPrecio:number):void{
        this.consultarLibro(id).precio = nuevoPrecio;
    }
}
let baseDatos: ConversorLibros= new ConversorLibros('libros.txt');
let libreria: GestorLibros= new GestorLibros(baseDatos);
let nuevoLibro: Libro= new Libro(1004,'Aprende A programar2',new Indice('Para Seguir Aprendiendo..',4),150,
                    new Autor('Wainewright Max',29000134,new Date('11-01-1989'),'Didactico',4),1600);

libreria.modificarPrecio(1003,100);
libreria.eliminarLibro(1001);
libreria.insertarLibro(nuevoLibro);
console.log(libreria);



