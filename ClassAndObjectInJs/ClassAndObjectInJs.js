//Class is Blueprint to creathe Object in JS
//Object is a copy of a class.


class Car {

    a=20;
    static b=100;

    autoparking()
    {
        console.log(this.name +" is Autoparking car....")
        return "";
    }

    static fuelling()
    {
        console.log("Fuelng sysytem is petrol fueled.....");
        return "";
     
    }
    constructor(name, model, price, colour)
    {
        this.name=name;
        this.model=model;
        this.price=price;
        this.colour=colour;
    }
}


const c1= new Car("ODI", "Q5", "1.25Cr", "Gray");
console.log(`${c1.name} cars has ${c1.colour} Colour and ${c1.a} is one of the non static memeber of a Car class...!!!`)
console.log(c1.autoparking())
console.log("----------------------------------------------------------------");


console.log(`Below is the sttaic variable of class----> ${Car.b}`)
console.log(Car.fuelling())








