//1.To check If some property/field is present in Object
/*
function hasPropertyInObject(objectName, expectedProperty)
{
    if(objectName.hasOwnProperty(expectedProperty))
    {
        return true
    }
    else{
        return false;
    }
}

const person = {

    "name": "John",
    "age":25
}


console.log(hasPropertyInObject(person, "namee"));
*/
//2.To check f any valus is present in the array or not.
/*
function toCheckValuePresentInArray(Array, expectedValue)
{
    if(Array.includes(expectedValue))
    {
        return true;
    }
    else{
        return false;
    }
}

const numbers = [1, 2, 3, 4, 5];

console.log(toCheckValuePresentInArray(numbers, 5));

*/

//3.To check if array is empty or not--->
const numbers = [1];
function toheckArrrayIsEmptyOrNot(array)
{
    if(array.length === 0)
    {
      console.log("Empty Array")
    }
    else{
      console.log("Not an empty array")
    }
  }

toheckArrrayIsEmptyOrNot(numbers)



