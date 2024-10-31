// Parent Class
class Vehicle {
	protected brand: string;
	protected model: string;
  
	constructor(brand: string, model: string) {
		this.brand = brand;
		this.model = model;
	}

	public info(): void {
		console.log(`Vehicle: ${this.brand} ${this.model}`);
	}
}

// Inheritance
class Car extends Vehicle {
	private totalDoor: number;

	constructor(brand: string, model: string, totalDoor: number) {
		super(brand, model); // Menggunakan konstruktor dari kelas induk
		this.totalDoor = totalDoor;
	}

	// Polymorphism
	public info(): void {
		console.log(`Car: ${this.brand} ${this.model}, Total Door: ${this.totalDoor}`);
	}
}

// Encapsulation
class Bike extends Vehicle {
	private type: string;

	constructor(brand: string, model: string, type: string) {
		super(brand, model);
		this.type = type;
	}

	public info(): void {
		console.log(`Bike: ${this.brand} ${this.model}, type: ${this.type}`);
	}
}

const mobil1 = new Car("Honda", "Accord", 4);
const motor1 = new Bike("Honda", "Vario", "Skuter");

mobil1.info();
motor1.info();
