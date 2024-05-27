//****Non Premitive data types in js****

//1.Object
/*
const person = {
    "name": "John",
    "age":30,
    "sallery":"1Lac",
    "totalSallery": function () {
        console.log("This is function inside the Object")
        return "A";

    }
}

console.log(person)

console.log(typeof person);


console.log(person.name);   //To get value of specific key from object.
console.log(person.age); 

person.mobile = true;
console.log(person);

delete person.mobile;
console.log(person);

//Can add function into the Object


console.log(person)

console.log(person.totalSallery())

*/
//Add Array Into the Object
/*
let iteams = {
    name:"Cosmetics",
    price: 20,
    quantity: 10,
    discount: 0.1,
    "totaPayable": function () {
      let amount= this.price*this.quantity-this.discount;
      return amount;
    },
    "CosmeticColors": ['Green', 'Yellow', 'Blue']
}

console.log(iteams)

console.log(iteams.CosmeticColors[1])


/*
console.log(iteams);
console.log("Total Payable Amount is:"+iteams.totaPayable());
*/

//Object Iteration--->
const person = {
    "Name": "Akshay",
    "Age":25,
    "Gender": "Male",
    "Sallery": 90000
}

person["MobNo"]=1234;

console.log(person)

//To Iterate Object in JS--->For in Loop is used


for(const key in person)
{
    console.log(key+":"+person[key])
}