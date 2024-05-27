//Acquiring the properties of one class into another class is called as inheritence
/*
Threee types of inheritence are there in JS
1.Single level
2.Multilevel
3.Hybrid/Gerarichical
//Multiple Inheritance is not supported in JS.
*/
//1.Single level Inheritence

class Vehicle {

    constructor(name, model)
    {
        this.name = name;
        this.model = model;
    }

    autoParking() {
        console.log(this.name+" car is AutoParked car...!!!")
    }
    
    static start()
    {
        console.log("Vehicle is started with key...!!!")
    }

}

class Car extends Vehicle {
    constructor(name, model, fuelType )
    {
        super(name, model)
        this.fuelType = fuelType;
    }

    fueling()
    {
        console.log("Car fuel type is:"+this.fuelType)
    }
}

const c1 = new Car("ODI", "Q4","petrol");
c1.autoParking();
c1.fueling();
Car.start();
