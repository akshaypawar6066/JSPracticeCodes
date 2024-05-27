// class Test
// {

// demo=function  () {
//     console.log("Demo function...!!!")
    
// }

// halfDemo = ()=>
// {
//   console.log("Half Demo Function...!!!")
// }

// }

// function  test() {
//     const b = new Test();
//     b.demo();
//     b.halfDemo();
// }

// test();


let numbers = [1,2,3,4,5,6,7,8];

console.log("First Way...!!!");

for(let i=0; i<numbers.length;i++)
{
  console.log(numbers[i]);
}


console.log("Second Way...!!!");

for(const e of numbers)
{
  console.log(e);
}

console.log("Third Way...!!!");

for(const index in numbers)
{
  console.log(numbers[index]);
}

console.log("4th  Way...!!!");

numbers.forEach((e)=>
{
  console.log(e);
})


