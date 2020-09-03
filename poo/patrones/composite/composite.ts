interface Contenido {
    getContenido(): string[] | Contenido[];
    setContenido(lineaBuscada: string, texto: string, nombreArchivo?: string): void;
    getNombre(): string;
}
class Archivo implements Contenido {
    private _nombre: string;
    private contenido: string[];

    public constructor(_nombre?: string, _contenido?: string[]) {
        this._nombre = (_nombre == null || _nombre == undefined) ? 'Sin Especificar' : _nombre;
        this.contenido = (_contenido == null || _contenido == undefined) ? [] : _contenido;
    }

    public getContenido(): string[] {
        return this.contenido;
    }
    public setContenido(lineaBuscada: string, texto: string): void {
        this.contenido.forEach(linea => {
            if (linea == lineaBuscada) {
                linea = texto;
            }
        });
    }
    public getNombre(): string {
        return this._nombre;
    }
}

class CarpetaComposite implements Contenido {
    private nombre: string;
    private contenido: Contenido[];

    public constructor(_nombre?: string) {
        this.nombre = (_nombre == null || _nombre == undefined) ? 'Sin Especificar' : _nombre;
        this.contenido = [];
    }
    // no funciona!!
    public buscarContenido(archivo: string): Contenido {
        return this.contenido.reduce((obj, item) => {
            if (item.getNombre()== archivo) {
                obj = item;
            }
            return item;
        }, <Contenido>{});
    }

    public getContenido(): Contenido[] {
        return this.contenido;
    }
    
    //no funciona!!
    public setContenido(lineaBuscada: string, texto: string, nombreArchivo: string): void {
        this.buscarContenido(nombreArchivo).setContenido(lineaBuscada,texto); 
    }
    public getNombre(): string {
        return this.nombre;
    }
    public agregarArchivo(archivo: Contenido) {
        this.contenido.push(archivo);
    }
    public agregarCarpeta(carpeta: Contenido) {
        this.contenido.push(carpeta);
    }

}

let archivo1: Contenido = new Archivo('archivo1.txt', ['primer linea', 'segunda linea', 'tercer linea']);
let archivo2: Contenido = new Archivo('archivo2.ts', ['class Contenido{', 'private nombre: string', '}']);

let carpetaDiagrama: CarpetaComposite = new CarpetaComposite('carpetaDiagrama');
let archivo3: Contenido = new Archivo('diagrama.pdf');

let carpeta = new CarpetaComposite('Carpeta-Composite');
carpeta.agregarArchivo(archivo1);
carpeta.agregarArchivo(archivo2);

carpeta.agregarCarpeta(carpetaDiagrama);
carpetaDiagrama.agregarArchivo(archivo3);

// carpeta.setContenido('primer linea', 'HOLA MUNDO!', 'archivo1.txt');
// console.log(carpeta.buscarContenido('archivo1.txt'));



