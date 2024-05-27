//1.For Loop--->
//When we know exactly How many times we have to repeat the condition..>
/*
for(let i=0;i<=10;i++)
{
   if(i%2!=0)
   {
    console.log(i+",")
   }

}
*/

//While lopp --->Iterate loop until some condition occurs.
/*
let n=10;

while(n>=0)
{
    console.log(n+",")
    n--;
}
*/

//do-while loop()---->Use this loop whenwe  want to execute the loop atleast once --->Condition doese't matters.
/*
let num=4;
do {
    console.log("Hi.....!!!")
    num--;
}
while(num>5)
*/

//4.for of loop--->

//To itearte Array
const arr= [1,2,3,4,5,6,7,8];
/*
for(const e of arr)
{
    console.log(e)
}
*/

//5.For in loop--->

for(const key in arr)
{
    console.log(arr[key])
}


//To Itearte Object

const person = {
    name:"Akshay",
    age:25
}

for(const key in person) 
{
    console.log(key+":"+person[key])
}