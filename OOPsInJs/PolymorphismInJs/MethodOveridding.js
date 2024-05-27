class Shape 
{
    draw()
    {
        console.log('I am a Generics Shape...!!!')
    }
}

class Circle extends Shape {

    draw()
    {
        console.log("I am Circular Shape...!!!")
    }
}

const shape= new Shape();
const circle= new Circle();

shape.draw();
circle.draw();


//The Above example is of Method Overidding--->
/*Acquiring the properties of supeclass into the subclass and changing the implementation according to the subclass
specifications is called as method overidding */




