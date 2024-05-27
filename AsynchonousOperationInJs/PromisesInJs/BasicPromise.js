/* -->Promises are way to handle the Asynchronous Operations in JS.
-->Promises provides cleaner syntsx for dealing with the Asynchronous codes as  compared to traditional callback based approaches.
-->Promises having three states--->Pending, Fulfilled(Resolve), Rejected.
-->Intiallly Promises are in pending state,  then it will be either fulfilled with some value or rejeccted with some reason.\
-->Promises uses .then() and .catch() callback functions.
-->When promise is fulfilled then we need to handle it with  .then() call back function and when promise is rejected then we need to handle it with .catch() call back funtion.
*/
/*
const myPromise = new Promise((resolve, reject)=>
{
    setTimeout(()=>
{
    const randomNo = Math.random()*10;
    if(randomNo>0.5)
    {
        resolve(randomNo);
    }
    else{
        const error = new Error("Generated no is less than 0.5");
        error.number = randomNo;
        reject(error);

    }
}, 2000)
});

myPromise.then((result)=>
{
   console.log("Generated Random No is:"+result)
})
.catch((e)=>
{
    console.log("Some error is Occured:"+e);
    console.log("Generated randon no which is less than 0.5 is:"+e.number)
})

*/

/*

function checkAnyRandomNoIsEvenOrOdd()
{
    return new Promise((resolve, reject)=>
{
    setTimeout(()=>
{
    const randomNo= Math.floor(Math.random()*10+1);

    if(randomNo%2==0)
    {
       resolve(randomNo);
    }
    else{
        const error = new Error("The Generated Random No is Not even.");
        error.number=randomNo;
        reject(error);
    }
},2000)
})
}


checkAnyRandomNoIsEvenOrOdd()
.then((result)=>
{
    console.log("Generated Random No is Even:"+result)
})
.catch((err)=>
{
    console.log(`Some error occured: ${err}`);
    console.log("Geneared odd no is:"+err.number);
    console.log("Generated Message is:"+err.message)
})

*/
function test()
{
    setTimeout(()=>
{
    console.log("Hello:")
},2000)
}

console.log("Hi");

test();
