/*
let s= "Akshay";

//1.console.log()--->To print any message on console
console.log(`My name is ${s}`)


//2.console.error() --->To Prin the Error message

let no =27;
if(no%2!=0)
{
    console.error("No is not Even")
}

//3.console.warn()====>To print the warning message--->

let a =-10;
console.warn(`${a} is negative Number`);

//4.console.info()--->To print the information
console.info(`My Father name is "Bhagwan" and he is "56" years old.`)

*/

/*
let person = {
    "name":"Akshay",
     age:"25",
    "Gender": "male"
}

let iteams ={
    "Pen":"25RS",
    "Notebook":"60RS"
}

console.table(person);
console.table([person, iteams]);

console.log(person,iteams)

*/

//To Print time required for specific task---->

console.time("Print i to N values");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.timeEnd("Print i to N values");

// Introducing a delay before clearing the console
setTimeout(() => {
    console.clear(); // Clear the console after a delay
}, 1000); // 1000 milliseconds = 1 second


//To Assert some conditions
console.assert(10===20);
console.trace();

console.log("%cHello Akshay", "color: red; background-color: green");


