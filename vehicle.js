var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent Class
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Vehicle.prototype.info = function () {
        console.log("Vehicle: ".concat(this.brand, " ").concat(this.model));
    };
    return Vehicle;
}());
// Inheritance
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, totalDoor) {
        var _this = _super.call(this, brand, model) || this; // Menggunakan konstruktor dari kelas induk
        _this.totalDoor = totalDoor;
        return _this;
    }
    // Polymorphism
    Car.prototype.info = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", Total Door: ").concat(this.totalDoor));
    };
    return Car;
}(Vehicle));
// Encapsulation
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, type) {
        var _this = _super.call(this, brand, model) || this;
        _this.type = type;
        return _this;
    }
    Bike.prototype.info = function () {
        console.log("Bike: ".concat(this.brand, " ").concat(this.model, ", type: ").concat(this.type));
    };
    return Bike;
}(Vehicle));
var mobil1 = new Car("Honda", "Accord", 4);
var motor1 = new Bike("Honda", "Vario", "Skuter");
mobil1.info();
motor1.info();
