/*
let day = "sunday";

switch (day) {
    case "friday":
        console.log("Its Friday...Weekend Starts...!!!")
        break;

    case "saturday":
        console.log("Its Saturday");
        break;

    case "sunday":
        console.log("Its Sunday...!!!");
        break;

    default:
        console.log("Enter valid day...!!!")
}

*/
/*
let browser= "safari";

if(browser=="chrome")
{
    console.log("Launching chrome browser...!!!")
}
 
else if(browser=="firefox")
{
    console.log("Launching Firefox browser");
}

else if(browser=="safari")
{
    console.log("Launching Safari browser");
}
else{
    console.log("Browser is not supported");
}

*/
//Here if we know our browser is safari then why we are not checking directly for safari browser--->This is not possible with if-else control statements.
//Here we can use stich statement instaed of if-else....>


const launchBrowser = function (browser)
{
    switch(browser)
    {
        case "Chrome":
            console.log("Launching Chrome browser");
            break;
        
        case "Firefox":
            console.log("Launching Firefox browser");
            break;

        case "Edge":
            console.log("Launching Edge browser");
            break;   

        default:
        console.log("Unknown browser");    
    }
}
   


launchBrowser("Firefox")

