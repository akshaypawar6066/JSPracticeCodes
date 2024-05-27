import Vehicle from "./Parent.js";

class Scooter extends Vehicle {
    constructor(name, colour, SName)
    {
        super(name, colour)
        this.SName = SName;
    }

    startOfScooter()
    {
        console.log(`${this.SName} Scooter starts with Kick...!!!`)
    }
}

export default Scooter;