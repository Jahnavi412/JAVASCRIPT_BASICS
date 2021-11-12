// primitive types
let name = 'jahnavi';
let age =23;
let isApporved = true;
let painocolor = null;
console.log(name,age,isApporved,painocolor);
console.log(name + " type=" +typeof name);
console.log(age + " type=" +  typeof age);


//Reference types(objects,arrays,functions)
// object creating
let person ={
    name : 'aaaa',
    age: 20

};
console.log(JSON.stringify.person); // we can get all the values of object at once.

// dynamically we can change properties of the object by two ways
// Dot notation
person.name = 'jhon';


// Bracket notation
person['age'] = 22;
console.log(person);


//arrays
let seletecedcolors=['red','blue'];
seletecedcolors[2]='green';
console.log(seletecedcolors.length);


//functions
// performing an task
function greet(name,lastname){
    console.log('hello '  +  name + ' ' + lastname );

}
greet('jhon','smith');


// calculating an value
function square(number){
    return number*number;
}
console.log(square(2));
