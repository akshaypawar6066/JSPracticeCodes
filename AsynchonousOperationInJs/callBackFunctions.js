//Call Back function is a function that we can pass as an arugument to the nother function...
//Call back function will get executed only after the asynchronous task.
/*

function greet(name, callback)
{
    console.log(`Hello ${name}`);
    callback();
}

function display()
{
    console.log("Hello...!!!")
}


greet("Akshay", display)
*/


function printingInformation(callBackFunction) {
    console.log("Started...!!!");
    console.log("Waiting for provided time...!!!");

    setTimeout(() => {
        const name = "Akshay-->Name  Which is Fetched From DB...!!!";
        console.log("Printing information for:" + name)
        const msg = "Message fetched from DB...!!!";
        callBackFunction(msg);
    }, 5000)
}

function callbackFunctionAfterDataFetched(msg)
{
   console.log(msg);
}


printingInformation(callbackFunctionAfterDataFetched);


