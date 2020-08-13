export class Salario{
    protected cargasSociales: number;
    private salarioBruto: number;
    private _salarioNeto: number;

    public constructor(_salarioBruto:number){
        this.cargasSociales=17;
        this.salarioBruto=_salarioBruto;
        this._salarioNeto= this.calcularSalarioNeto();
    }
    protected calcularTotalCargas():number{
        return 1 + (this.cargasSociales/100);
    }
    protected calcularSalarioNeto():number{
        return this.salarioBruto / this.calcularTotalCargas(); 
    }
    public get salarioNeto():number{
        return this._salarioNeto;
    }
}