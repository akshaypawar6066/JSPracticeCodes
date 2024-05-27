/*Encpasulation is nothing but Warpping up of variables and functions into a single unit.
Enacpuslation is nothing but it is process of binding the variables and functions together.*/

class Students {
    static a=20;
    b=40;
 constructor()
 {
    let name, mark
 }

 getName()
 {
    return this.name;
 }

 setName(name)
 {
    this.name = name;
 }

 getMark()
 {
    return this.mark;
 }

 setMark(mark)
 {
this.mark = mark;
 }


}

const s1 = new Students();

s1.setMark("30");
s1.setName("Akshay");

console.log(s1.getName());
console.log(s1.getMark());


const s2 = new Students();
s2.setName("Amol");
s2.setMark("50");
console.log("------------------------------------");
console.log(s2.getName());
console.log(s2.getMark());

