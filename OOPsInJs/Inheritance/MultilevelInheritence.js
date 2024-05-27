class Grandfather {
    constructor(GName, GAge)
    {
        this.GName = GName;
        this.GAge = GAge;
    }

    walking()
    {
        console.log(`My Grandfather name is ${this.GName} and they are walking here and there...!!!`)
    }
}

class Father extends Grandfather {
    constructor(GName, GAge, FName, FAge)
    {
        super(GName, GAge);
        this.FName = FName;
        this.FAge = FAge;
    }


    swimming()
    {
        console.log(`My Father name is ${this.FName} and they can swim...!!!`)
    }
}


class Son extends Father {

    constructor(GName, GAge, FName, FAge, SName)
    {
       
        super(GName, GAge, FName, FAge);
        this.SName = SName;

    }
    playing()
    {
        console.log(`Son name is ${this.SName} and son is playing Cricket...!!!`)
    }

}


const s = new Son("Jyotiram", 80, "Bhagwan", 60, "Akshay");
s.walking();
s.swimming();
s.playing();



