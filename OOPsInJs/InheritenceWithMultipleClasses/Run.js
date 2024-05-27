import Scooter from "./Child.js";
import Vehicle from "./Parent.js";

class Bike extends Scooter {

    constructor(name, colour, SName, BikeName)
    {
        super(name, colour, SName);
        this.BikeName = BikeName;
    }

    startOfBike()
    {
        console.log(`${this.BikeName} starts with Dhakka...!!!`)
    }

}

const b = new Bike("Tractor", "Brown", "Activa", "Hero-Honda");

b.startOfVehicle();
b.startOfScooter();
b.startOfBike();

