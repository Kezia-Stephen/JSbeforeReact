//Session05

//template literals
var data = "React";
var str = `Sample ${data}`;
console.log("Str:",str);

//default value to function params
function main(a= 3, b=7){
    return 4+a+b;
}
console.log(main()); //14

// console.log(a);  
// var a=10; --> Hoisting - only declaration part hoists to the top
//let a= 10; --> throws error - no hoisting

//Let --> local scope or block scope
function main(){
    let a=4;

    if(a===4){
        let b= 10;
        console.log(a+b); //14
    }

    console.log(a+b);//throws error; because b is block-scoped
}

main();

//same function using var
function main(){
    let a=4;

    if(a===4){
        var b= 10;
        console.log(a+b); //14
    }

    console.log(a+b);//14 because b is global-scoped
}

main();

//const - immutable value

//arrow function
var main = ()=>{
    let a=4;
    if(a===4){
        var b= 10;
        console.log(a+b); //14
    }
    console.log(a+b);
}

main();

//spread operator --> [1,2,3] => 1, 2, 3
var arr = [1,2,3];
var arr1 = [...arr];
console.log(arr1);

//arguments -> arrow function doesn't accept arguments
function sum(){
    var total =0;
    for(var i=0; i<arguments.length;i++){
        total += arguments[i];
    }
    console.log(total);
}

sum(1,2,3,4,5,6); //n number of arguments

//rest operator --> 1, 2, 3 => [1,2,3]
const sum = (...arr)=> {
    console.log(arr);
}
sum(1,2,3,4,5,6);

//with reduce
const sum = (...arr)=> {
    console.log("arr",
    arr.reduce((a,i)=>{
        return a+i;
    })
    
    );
}
sum(1,2,3,4,5,6);


//Destructuring assignment
var obj = {a: 'add', b: 'sub'};
//var read = obj.a;
const {a, b} = obj;
console.log(a,b);

//arr
var arr =[1,2,3];
const [c,d,e] = arr;
console.log(c,d,e);


