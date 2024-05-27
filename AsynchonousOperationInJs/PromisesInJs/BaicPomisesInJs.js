/*
const myPromise = new Promise((resolve, reject)=>
{

     setTimeout(()=>
    {
       const RandomNo = Math.floor(Math.random()*10+1);
       console.log("I am inside the Asynchronous code...!!!");
       if(RandomNo%2===0)
       {
        console.log("Generated No is Even:"+RandomNo);
        resolve(RandomNo);
       }
       else{
        console.log("Generated No is Odd No:"+RandomNo)
        const error = new Error("Generated No is Not Evevn...!!!");
        error.number= RandomNo;
        reject(error); 
       }
    },3000)
});


myPromise.then((result)=>
{
    console.log("Yes Even No:"+result)
})
.catch((err)=>
{
  console.log("No. Not a Even No:"+err.number)
})

*/

function getNoInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNo = Math.random();

            if (randomNo > 0.5) {
                resolve(randomNo);
            }
            else {
                const error = new Error("Generated No is less than 0.5:");
                error.number=randomNo;
                reject(error);
            }
        },2000)
    })

}


getNoInfo()
.then((result)=>
{
    console.log("generated Random No is >0.5 and its value is:"+result)
})

.catch((err)=>
{
    console.log("Some error Occured:"+err)
    console.log("Generated Random No is <0.5 and its value is:"+err.number);
    console.log("Generated Error msg is:"+err.message);
})


