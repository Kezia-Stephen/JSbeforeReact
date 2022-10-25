//Session06

var obj = {
    name: 'React',
    getName: function(){
        console.log(this.name);
    },
    getArrowName: () => {
        console.log(this.name); //no own this in arrow function, no arguments and implicit return
    }
}

obj.getName();
obj.getArrowName();

//strict mode
// "use strict"; //throws error

function main(a, a){
    console.log("Asd");
}
main(2,3);


// //arrow function throws error
// var main = (a, a) => {
//     console.log("Asd");
// }
// main(2,3);


//Class is also a function
function sample(){}

new sample();

class Main {
    constructor( ){
        this.name = "React";
    }

    getName(){
        console.log(this.name);
    }
}

var obj = new Main();
obj.getName();

// console.log(typeof sample, typeof Main);

class Child extends Main{
    constructor(){
        super(); //accesses all the properties and methods in parent class
        console.log(this);
    }
}

var obj1 = new Child();
obj1.getName();