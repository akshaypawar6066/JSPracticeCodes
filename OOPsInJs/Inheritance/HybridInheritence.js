class GrandFather {
    constructor(GName)
    {
        this.GName = GName;
    }
    knowdeging()
    {
        console.log(this.GName+ " transffered Bhagwat Gita Knowdlege ...!!!")
    }
}

class Father extends GrandFather {
    constructor(GName)
    {
        super(GName);
    }
}

class Son extends GrandFather {
    constructor(GName)
    {
        super(GName);
    }
}

const f = new Father("Jyotiram");
const s = new Son("Jyotiram");

f.knowdeging();
s.knowdeging();