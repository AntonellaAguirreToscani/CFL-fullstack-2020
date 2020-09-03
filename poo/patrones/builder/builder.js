var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setQuantityDoors = function (quantity) {
        this._quantityDoors = quantity;
    };
    Car.prototype.setMotor = function (type) {
        this._motor = type;
    };
    Car.prototype.setDesing = function (description) {
        this._desing = description;
    };
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    Object.defineProperty(CarBuilder.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: false,
        configurable: true
    });
    CarBuilder.prototype.createVehicle = function () {
        this._car = new Car();
    };
    return CarBuilder;
}());
var FerrariF1 = /** @class */ (function (_super) {
    __extends(FerrariF1, _super);
    function FerrariF1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FerrariF1.prototype.buildQuantityDoors = function () {
        this._car.setQuantityDoors(3);
    };
    FerrariF1.prototype.buildMotor = function () {
        this._car.setMotor('hydraulic injection');
    };
    FerrariF1.prototype.buildDesing = function () {
        this._car.setDesing('elegant design black, leather seats');
    };
    return FerrariF1;
}(CarBuilder));
var ChevroletCorsa = /** @class */ (function (_super) {
    __extends(ChevroletCorsa, _super);
    function ChevroletCorsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChevroletCorsa.prototype.buildQuantityDoors = function () {
        this._car.setQuantityDoors(3);
    };
    ChevroletCorsa.prototype.buildMotor = function () {
        this._car.setMotor('internal combustion');
    };
    ChevroletCorsa.prototype.buildDesing = function () {
        this._car.setDesing('comfortable standard seats');
    };
    return ChevroletCorsa;
}(CarBuilder));
var AutoAssembly = /** @class */ (function () {
    function AutoAssembly() {
    }
    AutoAssembly.prototype.setCarBuilder = function (car) {
        this._car = car;
    };
    Object.defineProperty(AutoAssembly.prototype, "car", {
        get: function () {
            return this.car;
        },
        enumerable: false,
        configurable: true
    });
    AutoAssembly.prototype.constructCar = function () {
        this._car.buildQuantityDoors();
        this._car.buildMotor();
        this._car.buildDesing();
    };
    return AutoAssembly;
}());
var sportCar = new FerrariF1();
var cityCar = new ChevroletCorsa();
var Factory = new AutoAssembly();
Factory.setCarBuilder(sportCar);
console.log(Factory.constructCar());
console.log(Factory);
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
