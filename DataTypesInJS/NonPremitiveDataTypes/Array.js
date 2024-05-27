
/*
const numbers= [1,'Green',98,87]
console.log(numbers)


numbers[4]={"name":"Akshay"};
console.log(numbers)

numbers[5]= function() {
    let a=10, b=20;
    return  a+b;
}

console.log(numbers)
console.log("Addition of two numbers are:"+numbers[5]())

console.log(numbers.length)
*/

//Different methods of Array--->
//1.Push()
//const numbers= [1,2,3,4,5];
/*
console.log(numbers)
console.log(numbers.length)


numbers.push("Akshay", "Pawar", "01")
console.log(numbers)
console.log(numbers.length)
//2.Pop()
numbers.pop();
console.log(numbers)
console.log(numbers.length)



const numbers= [1,2,3,4,5];
console.log(numbers)
console.log(numbers.length)
//3.Shift();


numbers.shift();
console.log(numbers)
console.log(numbers.length)


//4.Unshift();
numbers.unshift("Akshay", "Pawar", "01");
console.log(numbers)

console.log(numbers.length)

//5.length -keyword is used to check the length of an array

console.log(`Array Length is ${numbers.length} and this array is numbers array`)


//6.Splice()
const numbers= [1,2,3,4,5];
console.log(numbers)
numbers.splice(1, 0, "Akshay")
console.log(numbers)

console.log("--------------------------------")


console.log(numbers)
numbers.splice(1, 2, "Pawar")
console.log(numbers)


//7.Slice()
const numbers= [1,2,3,4,5, 6];
 console.log(numbers);

// let slicedArray=numbers.slice(1,3)

// console.log(slicedArray);

const removedElement= numbers.pop();
console.log("PPopped Element is:"+removedElement)
console.log(numbers);


const removedFirstElement= numbers.shift();
console.log("Shiffed Element is:"+removedFirstElement)
console.log(numbers);


//8.Concat()-->
const a1= [1,2,3,4,5];
const a2= [6,7,8,9,10,];
const a3=["Akshay", 'Pawar']

let concatdArray=a1.concat(a2).concat(a3);

console.log(concatdArray);

let newOne =concatdArray.concat("Boss");
console.log(newOne);



const a= [1, 'Akshay',2,3,4,5, 'Akshay'];

//9.indexOf()===>

console.log(a.indexOf('Akshay'));
console.log(a.indexOf('Akshay', 2));  //Will search Index of 'Akshay' and Searching will start from the second index and return the index.


//10.indexOf()===>
console.log(a.lastIndexOf(5));     //Will return the index of the element which is occured at last[1,2,3,4,5,1]-->Will return index of a=5


//11.include()--->Will check specified element is included or not in array   --->Will return true/false based on that.

const a= [1,2,3,4,5];

console.log(a.includes(10))

*/

///Arrary Iteration ways in JS

//1.Simple for loop
/*
const arr=[1,2,3,4,5];

for(let i=0; i<arr.length;i++)
{
   console.log(arr[i]+",");
}
*/


//2.for of loop....
/*
const arr=[1,2,3,4,5];

for(const e of arr)
{
    console.log(e+",");
}
*/
//3.for in loop...
/*
const arr=[1,2,3,4,5];
for(const key in arr)
{
    console.log(arr[key])
}
*/

//4.forEach() method--->
/*
const arr=[1,2,3,4,5];

arr.forEach((e)=>
{
   console.log(`${e} ,`)
})
*/
/*
const arr=[1,2,3,4,5];

for(const key in arr)
{
    console.log(arr[key])
}
*/

//const arr=[1,2,3,4,5];
/*Important Array Methods...*/
/*
1.map()--->
let doubledArray=arr.map((e)=>
{
   return e=e*2;
})
console.log(doubledArray)
*/
//2filetr()--->
/*
const persons =[{name:"Akshay", age:25}, {name:"Amol", age:26}, {name:"Sachin", age:27}];

let filtredArray=persons.filter((e)=>
{
    return e.age>25;
})

console.log(filtredArray)
*/

//3.reduce()--->Used to add the elements from the array.

/*
const numbers= [1,2,3,4,5];

const sumOfArrayNos= numbers.reduce((accum, num)=>
{
   return  accum+num;
},5)

console.log("Su of Array Nos are:"+sumOfArrayNos)
*/


//Some more important methods of an array

//1.every()--->To check all elemnts of an array staisfies the provided condn or not, return true/false based on result.
/*
const number =[2,4,6,8,10]
let falgs = number.every((e)=>
{
    return e%2==0;
})

console.log(falgs)


//2.some()--->To check if any of the element  from  an array staisfies the provided condn or not, return true/false based on result.

const numbers =[1,2,4,6,8,10];
let falg= numbers.some((e)=>
{
    return e%2==1;
})
console.log(falg)
*/

//3. find()--->It will return the first elemnt from the array which satisfies the given condition.
/*
const numbers =[0,5,9,4,6,8,10];
let matchingElemnt= numbers.find((e)=>
{
    return e%3==5;
})

console.log(matchingElemnt)
*/
//4.reverse() -->This methos is used to reverse the elements of the array.
/*
let reverseArray= arr.reverse();

console.log(`revered array is: ${reverseArray}`)
*/

//5.sort()--->This method is used to sort the array in asc/desc order
/*
const arr=[1,5,9,78,57,98]

let ascArray= arr.sort((a,b)=>
{
    return a-b;   //Asc
})

console.log("Arrray is aceding order is:"+ascArray)
console.log(arr)

let descArray=arr.sort((a,b)=>
{
    return b-a;    //Desc
})

console.log(`Array in desc order is: ${descArray}`)
*/







