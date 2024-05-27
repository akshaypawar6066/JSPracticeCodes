//1.If ---->
/*
let a=10, b=5;

if(a>b)
{
   console.log("A is larger:")
}
*/
//2.If-else--->
/*
let number=10;
if(!isNaN(number))
{
   console.log("Entered number is valid No:"+number)
}
else{
    console.log("Invalid number");
}
*/

//3.Nested if--->
/*
let a=10,b=7,c=5;
if(a>b)
{
    if(a>c)
    {
        console.log("A is larger:"+a);
    }
}

*/

//4.Ladder-if


let a=100,b=60,c=80,d=40;

if(a>b && a>c && a>d)
{
    console.log(`A is larger and is value is:${a}`)
}

else{
    if(b>c && b>d)
    {
        console.log(`B is larger and its value is:${b}`)
    }
    else{
        if(c>d)
        {
            console.log(`C is larger and its value is:${c}`)
        }
        else{
            console.log(`D is larger and its value is:${d}`)
        }
    }
}
