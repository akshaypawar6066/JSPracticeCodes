//Asynch-Await working

/*
function butterSpreading()

{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>
{
    console.log("Butter is SPreaded...!!!")
    resolve(true)
},2000)
  })
}


function jellySpreading()
{
    return new Promise((resolve, reject)=>
{
    setTimeout(()=>
{
    console.log("Jelly is Spreaded...!!!")
    resolve(true)
},2000)
})
}





async function makeSandwtch()
{
   console.log("Taken The Base of Sanswitch...!!!");
   await butterSpreading();
   await jellySpreading();
   console.log("Sandwitch is ready Now...!!!")
}

makeSandwtch();

*/


//Promses Working
/*
function butterSpreading()

{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>
{
    console.log("Butter is SPreaded...!!!")
    resolve(true)
},2000)
  })
}


function jellySpreading()
{
    return new Promise((resolve, reject)=>
{
    setTimeout(()=>
{
    console.log("Jelly is Spreaded...!!!")
    resolve(true)
},2000)
})
}


async function makeSandwtch()
{
   console.log("Taken The Base of Sanswitch...!!!");
   butterSpreading().then((resilut)=>
{
    console.log("EUUUUU...!!! Butter Spreaded")
});
jellySpreading().then((result)=>
{
    console.log("EUUU...!!! Jelly Spreaded...!!!")
})
   console.log("Sandwitch is ready Now...!!!")
}

makeSandwtch();

*/

/*   //Normal Promise Working--->
function toCheckNo()
{
  return new Promise((resolve, reject)=>
{
    setTimeout(()=>
{
    const randomNo = Math.floor(Math.random()*10+1);
    if(randomNo%2===0)
    {
        resolve(randomNo);
    }
    else{
        const error = new Error("Generated No is Not Even...!!!")
        reject(error)
    }
}, 2000)
})
}


function checkNoInfo()
{
    console.log("Cheking No....111....")
  toCheckNo()
  .then((result)=>
{
    console.log("Gnerated No is Even:"+result)
})
.catch((error)=>
{
    console.error("Generated No is not Even:"+error.message)
});

console.log("Cheking No...222....")

}

checkNoInfo();

*/

/*

const myPromise = new Promise((resolve, reject) =>
{
    let flag=false;
    console.log("Before the Asynchronous Task...!!!");
    setTimeout(()=>
{
    console.log("Inside the asnychronous task..!!!");
    console.log("Asynchronous task is completed...!!!");
    if(flag)
    {
        resolve(flag)
    }
    else{
        reject(flag)
    }
},3000)
})

console.log("Started...!!!");

myPromise.then((result)=>
{
    console.log("Helllo")
})
.catch((error)=>
{
    console.log("Error")
})

*/