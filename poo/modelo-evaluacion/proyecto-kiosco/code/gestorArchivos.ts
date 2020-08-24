import * as fs from 'fs';

interface IGestorArchivos{
    actualizarArchivoElegido(archivo:string):void;
    actualizarArchivos():void;
    elegirSet(archivo: string):Set<string>;
    buscarLinea(id: number, archivo: string): string;
    agregarLinea(texto: string, archivo: string): void;
    eliminarLinea(id: number, archivo: string): void;
}
export class GestorArchivos implements IGestorArchivos {
    private nombreArchivo1: string;
    private _listado1: Set<string>;
    private nombreArchivo2: string;
    private _listado2: Set<string>;

    public constructor(_nombreArchivo1: string, _nombreArchivo2: string) {
        let stock: string = fs.readFileSync(this.nombreArchivo1 = _nombreArchivo1, 'utf-8');
        this._listado1 = new Set<string>(stock.split('\r\n'));

        let ventas: string = fs.readFileSync(this.nombreArchivo2 = _nombreArchivo2, 'utf-8');
        this._listado2 = new Set<string>(ventas.split('\r\n'));
    }
    //actualiza un solo Archivo (ELEGIDO)
    public actualizarArchivoElegido(archivo:string):void{
        let nombreArchivo: string= archivo;
        let buffer: Buffer = Buffer.from(Array.from(this.elegirSet(archivo)).join('\r\n'));
        fs.writeFile(nombreArchivo, buffer, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
    }
    //actualiza AMBOS archivos!
    public actualizarArchivos(): void {
        let bufferStock: Buffer = Buffer.from(Array.from(this._listado1).join('\r\n'));
        fs.writeFile('stock.txt', bufferStock, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });

        let bufferVentas: Buffer = Buffer.from(Array.from(this._listado2).join('\r\n'));
        fs.writeFile('ventas.txt', bufferVentas, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
    }
    public elegirSet(archivo: string):Set<string> {
        switch (archivo) {
            case 'stock.txt':
                return this._listado1;
            break;

            case 'ventas.txt':
                return this._listado2;
            break;
            default:
                throw Error('Archivo no encontrado');
        }
    }
    public buscarLinea(id: number, archivo: string): string {
        let contenido: string = '';
        Array.from(this.elegirSet(archivo)).forEach((item) => {
            contenido = (item.indexOf(id.toString()) > -1) ? item : contenido;
        });
        return contenido;
    }
    public agregarLinea(texto: string, archivo: string): void {
        this.elegirSet(archivo).add(texto);
        this.actualizarArchivoElegido(archivo);
    }
    
    public eliminarLinea(id: number, archivo: string): void {
        this.elegirSet(archivo).delete(this.buscarLinea(id,archivo));
        this.actualizarArchivoElegido(archivo);
    }
    public modificarLinea(id: number, archivo: string): void{

    }
    public set listado1(nuevo:Set<string>){
        this._listado1=nuevo;
    }
    
 
 }

