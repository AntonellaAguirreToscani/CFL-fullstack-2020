class Car {
    private _quantityDoors:number;
    private _motor: string;
    private _desing: string;

    public setQuantityDoors(quantity: number):void {
        this._quantityDoors= quantity;
    }
    public setMotor(type:string) : void{
        this._motor= type;
    }
    public setDesing(description:string): void{
        this._desing = description;
    }

}
abstract class CarBuilder{
    protected _car: Car;

    public get car():Car{
        return this._car;
    }
    public createVehicle():void{
        this._car = new Car();
    }
    abstract buildQuantityDoors():void;
    abstract buildMotor():void;
    abstract buildDesing():void;
    
}
class FerrariF1 extends CarBuilder{

    public buildQuantityDoors():void{
        this._car.setQuantityDoors(3);
    }
    public buildMotor():void{
        this._car.setMotor('hydraulic injection');
    }
    public buildDesing():void{
        this._car.setDesing('elegant design black, leather seats');
    }
   
}
class ChevroletCorsa extends CarBuilder{
    public buildQuantityDoors():void{
        this._car.setQuantityDoors(3);
    }
    public buildMotor():void{
        this._car.setMotor('internal combustion');
    }
    public buildDesing():void{
        this._car.setDesing('comfortable standard seats');
    }
}

class AutoAssembly{
    private _car: CarBuilder;

    public setCarBuilder(car: CarBuilder): void {
        this._car= car;
    }
    public getCar(): CarBuilder {
        return this._car;
    }
    public constructCar(): void {
        this._car.createVehicle();
       this._car.buildQuantityDoors();
        this._car.buildMotor();
        this._car.buildDesing();
    }
}

let sportCar : CarBuilder = new FerrariF1();
let cityCar : CarBuilder = new ChevroletCorsa();

let Factory : AutoAssembly = new AutoAssembly();

Factory.setCarBuilder(sportCar);
Factory.constructCar();

console.log(Factory.getCar());





























// class VehicleBuilder{
//     private _wheel:number;
//     private motor:boolean;
//     private _plateNumber:string;
//     private _color:string;
//     private _brand:string; // marca!
//     private _owner:string; //propietario!

//     public constructor(){
//         this._wheel= 0;
//         this.motor=true;
//         this._plateNumber='';
//         this._color='';
//         this._brand='';
//         this._owner='Factory Vehicle';
//     }
//     public setWheel(quantity:number):number{
//         this._wheel = quantity;
//         return this._wheel;
//     }
//     public set plateNumber(plateNumber:string){
//         this._plateNumber = plateNumber;
//     }
//     public set color(color:string){
//         this._color = color;
//     }
//     public set brand(brand:string){
//         this._brand= brand;
//     }
//     public set owner(owner:string){
//         this.owner = owner;
//     }
//     public build():{}{
//         return {
//           wheel :  this._wheel,
//           motor:  this.motor,
//           plateNumber:  this._plateNumber,
//           color:  this._color,   
//           brand:  this._brand,
//           owner:  this._owner
//         }
//     }
// }

// let car : VehicleBuilder = new VehicleBuilder()