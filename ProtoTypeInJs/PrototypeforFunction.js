//Prototype--->
/*
-->Prototype is an Object that is associated with every function and Object by default.
--> If we want to add new properties at later stage to the function/class, We can take the help of prototype*/

function studentInfo(name, No)
{
  this.name = name;
  this.No = No;
}

studentInfo.prototype.sallery=250000;

const emp1 = new studentInfo("Akshay", "1234");
//emp1.sallery= "200000";
console.log(`Name of student is ${emp1.name} and No is ${emp1.No} and Sallery is ${emp1.sallery}`);



const emp2 = new studentInfo("Amol", "5698");
console.log(`Name of student is ${emp2.name} and No is ${emp2.No} and Sallery is ${emp2.sallery}`);

