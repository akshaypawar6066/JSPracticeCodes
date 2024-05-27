class Employee {

    empPinCode=400701;
    static empPhone=12345;

    registartion()
    {
        console.log(this.name +" Employe has to register here");
        return "";
    }

    static signUp()
    {
        console.log("Employe Needs to be signup here:"+` And Name of the employe is ${e1.name}`);
        e1.registartion();
        return "";
    }


    constructor(name, id, sallery, location)
    {
        this.name = name;
        this.id = id;
        this.sallery = sallery;
        this.location = location;
    }


}


const e1=  new Employee("Akshay", 123, "90K", "Mumbai");


console.log(`Pin code of the employe is ${e1.empPinCode}`);
console.log(e1.registartion());

console.log("Phone No of the employee is:"+Employee.empPhone)
console.log(Employee.signUp())