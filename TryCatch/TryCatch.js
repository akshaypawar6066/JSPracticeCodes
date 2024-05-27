let str = "Akshay";
let str1 = str.toUpperCase();


try {
    if (str1==="AKSHAY") {
        console.log("Same Strings");

    }
    else {
        throw new Error("Not same strings:")
    }
}
catch (error) {
    console.log(`An Error Occured while comparing strings:${error.message}`);
}
finally {
    console.log("Finally block executed..!!!")
}