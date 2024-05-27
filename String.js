//String in js/*
/*
/*String are used to stoe and manipulate text in JS--->/

/*String are immutable in String, Once we declared it we can 
not change the value of the String --->We acn manupalte it but we need to stoe 
the manipulated String in some Another String, Original String will not be changed. */

///Syntax to declare the String--->
//We can declare String by 3 ways---->
/*
//1.By using double quotes--->
let Firstname="Akshay";
console.log("FirstName  is:"+ Firstname)

//2.Using single quotes--->
let MiddleName= "Bhagwan";
console.log("MiddleName is:"+ MiddleName);

//3. By using Template Literals--->
//Template Literals used BackTick(``) instead of quotes to declare the String.

let lastName = `Pawar`;
console.log("LastName is:"+ lastName);

//Inside the `` Backtics we can use single quotes, double quotes or we can use any varaible isnide the backtics.

//Exapmle--->
let myAge = 20;

console.log(`My Name is "Akshay", My Age is:${myAge} and I am living at 'Mumbai'`)
*/

//String Methods in JS--->
/*
//1. length --->Keyword used to check length of the string
 let s ="Akshay";
 console.log(`Length of the String is ${s.length}`)
//2.toUpperCase()-->To Convert the String to upper case
let s1= s.toUpperCase();
console.log("Upper case String is:"+s1);

//3.toLowerCase()---> TO Convert the String into lower case--->
let s2= s.toLocaleLowerCase();
console.log("Lower case String Is:"+s2)

//4.slice() --->To copy the part of the String starrting from starting index and last index will not be included.
let slicedString = s.slice(1, 5);
console.log("Sliced String is:"+slicedString);

//5.replace() --->used to replace the particukar characters from the String.
let replacedString = s.replace('a', 'A');
console.log("Replaed String Is:"+replacedString)

//6.replaceAll()--->To Replace all the matching characters of the string.
console.log(replacedString.replaceAll('A', 'Z'));
console.log(s)

//7.Trim()--->To remove the unwanted spaces from the String  --->From staring and ending spaces removed--->Middle spaces as it is.
let str= "    Akshay Pawar   ";

console.log("Untrimmed String is:"+str)

let trimmedString = str.trim();
console.log("Trimmed String is:"+trimmedString);

//8.Concat()--->To join/Concat two or more String---.

let p1="Park";
let p2="Aaji-Ajoba";

console.log(p2.concat(":").concat(p1))
*/
/*
//9.charAt()-->To give the character at paricular index--->
let s="Akshay";
let charcterZero=s.charAt(0);
console.log(charcterZero);

//10.IndexOf()--->It will return index of paicular character from the String
console.log(s.indexOf('s'));

//11. split()--->It will split the given String into the array from the provided condton.
let s1= "India is my country";
let splieedAtrray= s1.split(" ");
console.log(splieedAtrray);

//12.startsWith()--->To check if string is started with particular charcater or not. (return true or false)
let s2= 'Akshay';
console.log(s2.startsWith('A'))

//13.endsWith()---->To check if string is ends with particular charcater or not. (return true or false)
console.log(s2.endsWith('P'));

*/

//Reverse String in JS--->
let s="Akshay";
let reverseString="";

for(let i=s.length-1; i>=0; i--)
{
  reverseString= reverseString + s.charAt(i);
}

console.log("Reversed Srring is:"+reverseString);





