class Test {

    add(a,b)
    {
       return a+b;
    }
    substract(a,b)
    {
        return a-b;
    }
}

Test.prototype.multiply = function (a,b)
{
   return a*b;
}

Test.prototype.divide = function (a,b)
{
    return a/b;
}


const t1= new Test(10,20);

console.log("Addition of two no's are:"+t1.add(10,30));
console.log("Substarction of two no's are:"+t1.substract(10,30));
console.log("Multiplication of two no's are:"+t1.multiply(10,30));
console.log("Division of two no's are:"+t1.divide(30,10));

console.log("----------------------------------------------------------------");

const t2= new Test();

console.log("Addition of two no's are:"+t2.add(10,30));
console.log("Substarction of two no's are:"+t2.substract(50,49));
console.log("Multiplication of two no's are:"+t2.multiply(50,50));
console.log("Division of two no's are:"+t2.divide(50,10));


