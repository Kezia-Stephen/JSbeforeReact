//shallow copy -- both variables reference the same memory location
var obj = {a: "add"};
var obj1 = obj;
obj1.a = "sub";
console.log(obj, obj1);

//deep copy using stringfy and parse
var obj = {a:"add"};
var obj1 = JSON.parse(JSON.stringify(obj));
obj1.a = "sub";
console.log(obj, obj1);

//deep copy using object.assign
var obj = {a:"add"};
var obj1 = Object.assign({b:"mul"},obj);
obj1.a = "sub";
console.log(obj,obj1);

//deep copy using spread operator -- variables reference different memory location
var obj = {a: "add"};
var obj1 = {...obj};
obj1.a = "sub";
console.log(obj, obj1);

//forEach, for ~ Map
var num = [1,2,3,4];
num.forEach(mul);

function mul(item,index,arr){
   var result = [];
   result.push(arr[index] = item*2);
   console.log(result);  
}

//Same manipulation using map
var num = [1,2,3,4];
var result = num.map(function(value, index){
    return value*2; //map must "return" a value
});
console.log("result using map:", result);

//filter
var filter = num.filter(function(value, index){
    return (value%2 === 0);
});
console.log("result using filter:", filter);

//find - returns the first value that is true
var arr = [1,2,2,3,4];
var find = arr.find(function(value,index){
    return value ===2;
});
console.log("result using find:", find);

//every - returns true only if all the elements pass the condition
var arr = [1,2,3,4];
var everyf = arr.every(function(value,index){
    return value>2;
});
var everyt = arr.every(function(value,index){
    return value>0;
});
console.log("result using every:",everyf, everyt);

//some- returns true even if any one element passes the condition
var arr = [1,2,3,4];
var somet = arr.some(function(value,index){
    return value>2;
});
var somef = arr.some(function(value,index){
    return value>4;
});
console.log("result using some:", somet, somef);

//reduce
var arr = [1,2,3,4];
var reduce = arr.reduce(function(accum,value){
    return accum+value;
});
console.log("result using reduce:",reduce);

//setTimeout
setTimeout(function(){
    console.log("This is SetTimeout");
}, 2000);

// //setInterval
// setInterval(function(){
//     console.log("This is SetInterval");
// }, 2000);

//Local Storage
localStorage.setItem("key","value"); //saves the value in the local storage, can be retrieved across pages, only manual deletion
localStorage.setItem("turn",1); //Local Storage saves any value passed as string only.
localStorage.clear();//cleara everything in local storage
localStorage.removeItem('key');//removes that particular item with the specified key