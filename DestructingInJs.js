//Extracting the values from Array/Object and supply it to diff variables is nothhng but Destrcturing in JS--->
//Array
/*
const numbers = [5,10,15,20,25];
const[a,b,c]= numbers;

console.log(a,b,c);



//We can use spread(...) Operation in Destrucring as well.
const[p,q,r, ...testNo]=numbers;

console.log(p,q,r)
console.log(testNo)
*/

//Object
/*
let person = {
    "name":"Akshay",
     "age":"25",
    "Gender": "male",
    "Sallery":"25K",
     MobNo:"1234"
}

const{name, age, Gender, ...RemaingProperties}= person;
console.log(name, age, Gender)
console.log(RemaingProperties)

*/
/*
//Remove deuplicate No's from Array
const numbers = [1,2,3,4,5,6,7,8,5,8];
const uniqueNos= [... new Set(numbers)];
console.log("Original No:s are:"+numbers)
console.log("Unique Array is;"+uniqueNos)


const names = ["Akshay", "Amol", "Dada", "Akshay"];
const uniquNames = [... new Set(names)]
console.log("Original Names are:"+names)
console.log("Unique Names are:"+uniquNames)

*/

//Reverse No in Js

let num=51;

let RevNo=0;

let rem;

while(num>0)
{
    rem= num%10;
    RevNo= RevNo*10+rem;
    num=Math.floor(num/10);
}

console.log("Reverse No is:"+RevNo)