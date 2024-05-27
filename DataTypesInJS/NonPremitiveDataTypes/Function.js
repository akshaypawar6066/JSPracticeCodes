//Different ways of declaring functions in JS--->
/*
//1.Function declartion
function add(a,b) 
{
    return a+b;
}

console.log("Addition of two numbers are:"+add(5,10))

//2.Anyonyms function --->Function is assigned to some varaible--->Assign function name to some variable...>

let substarction = function (a, b) 
{
    return a-b;
}

console.log("Substarction of two no's are:"+substarction(10,5))

//3.Arrow function

const multiply = (a, b)=>
{
  return   `multiplication of two no's are: ${a*b}`
}

console.log(multiply(5,10))

*/

//Constructor function in JS

/*
function car(name, model, price)
{
    this.name = name;
    this.model = model;
    this.price = price;
}

const c1 = new car("Odi", "Q3", "65L");
console.log(c1)
*/


//Function overloading is possible in javascript? --->No


function add(name, age, sallery)
{
    return `My age is ${age} and My name is ${name} and my sallery is ${sallery}`
}


function add(a,b)
{
    return a+b;
}


console.log(add("Akshay", 25, 75000))


