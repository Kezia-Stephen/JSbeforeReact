function fun1(){
    console.log("fun1");

}

function fun2(){
    console.log("fun2");
}

fun1();
fun2();

//another case
function fun1(){
    setTimeout(function(){
        console.log("fun1");
    },2000);
}

function fun2(){
    console.log("fun2");
}

fun2();
fun1(); //this is asynchronous execution

//one way to make it synchronous
function fun1(){
    setTimeout(function(){
        console.log("fun1");
        fun2();
    },2000);
}

function fun2(){
    console.log("fun2");
}

fun1(); 

//callback hell
function fun1(callback){
    setTimeout(function(){
        console.log("fun1");
        callback();
    },2000);
}

function fun2(){
    console.log("fun2");
}

fun1(fun2); 

//program from class -- nested callbacks => callback hell

function fun3(c3){
  
    console.log("fun3");
    c3();

}

function fun4(){
console.log("fun4");
}

function fun1(c2){
setTimeout(function(){
    console.log("fun1");
    c2(fun4);
},3000);

}

function fun2(callback){
setTimeout(function(){
    console.log("fun2");
    callback(fun3);
},2000); 
}

fun2(fun1); //fun2, fun1, fun3, fun4

//another method --> fun1(fun2)
function fun3(c3){
  
    console.log("fun3");
    c3();

}

function fun4(){
console.log("fun4");
}

function fun2(c2){
setTimeout(function(){
    console.log("fun2");
    c2(fun4);
},3000);

}

function fun1(callback){
setTimeout(function(){
    console.log("fun1");
    callback(fun3);
},2000); 
}

fun1(fun2); //fun1, fun2, fun3, fun4

//promise ->resolve
function fun3(){
    console.log("fun3");
}

function fun4(){
    console.log("fun4");
}

function fun1(){
    setTimeout(function(){
        console.log("fun1");
    },3000);
}

function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve();
        },2000);
    });   
}

fun2()
.then(function(){
    console.log("success");
})
.catch(function(error){
    console.log("The error is:", error);
})

//promise ->reject
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            reject();
        },2000);
    });   
}

fun2()
.then(function(){
    console.log("success");
})
.catch(function(error){
    console.log("The error is:", error);
})

//promise -> passing a parameter in resolve
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

fun2()
.then(function(data){
    console.log("Success! ",data);
})
.catch(function(error){
    console.log("The error is:", error);
})

//promise chain
function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun1");
            resolve();
        },3000);
    });
    
}

function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

fun2()
.then(function(data){
    console.log("Success! ",data);
    fun1()
    .then(function(){
        console.log("Success!");
    })
    .catch(function(error){
        console.log("The error is:", error);
    })
})
.catch(function(error){
    console.log("The error is:", error);
})

//All the functions inside the promise chain
function fun3(){
    return new Promise(function(resolve,reject){
        console.log("fun3");
        resolve();
    })
}

function fun4(){
    return new Promise(function(resolve,reject){
        console.log("fun4");
        resolve();
    })
}

function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun1");
            resolve();
        },3000);
    });
    
}

function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

fun2()
.then(function(data){
    console.log("Success! ",data);
    fun1()
    .then(function(){
        console.log("Success!");
        fun3()
        .then(function(){
            console.log("Success!");
            fun4()
            .then(function(){
                console.log("Success!");
            })
            .catch(function(){
                console.log("error");
            })
        })
        .catch(function(){
            console.log("error");
        })
    })
    .catch(function(error){
        console.log("The error is:", error);
    })
})
.catch(function(error){
    console.log("The error is:", error);
})

//instead of the long chain above
fun2()
.then(fun1)
.then(fun3)
.then(fun4)
.catch(function(error){
    console.log("The error is:", error);
})

//Now the functions can be written as
function fun3(){
    return new Promise(function(resolve,reject){
        console.log("fun3");
        resolve();
    })
}

function fun4(){
    return new Promise(function(resolve,reject){
        console.log("fun4");
        resolve();
    })
}

function fun1(data){
    console.log("data: ", data);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun1");
            resolve();
        },3000);
    });
    
}

function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

fun2()
.then(fun1)
.then(fun3)
.then(fun4)
.catch(function(error){
    console.log("The error is:", error);
})

//Promise.all
Promise.all([fun2, fun1, fun3, fun4])
.then(function(){
    console.log("success");
})
.catch(function(){
    console.log("error");
})

//async and await
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

async function parent(){
    const result = await fun2();
    console.log("Await done");
}

parent();

//await for 4 functions
function fun3(){
    return new Promise(function(resolve,reject){
        console.log("fun3");
        resolve();
    })
}

function fun4(){
    return new Promise(function(resolve,reject){
        console.log("fun4");
        resolve();
    })
}

function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun1");
            resolve();
        },3000);
    });
    
}

function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("fun2");
            resolve({name: 'JsbeforeReact'});
        },2000);
    });   
}

async function parent(){
    await fun2();
    await fun1();
    await fun3();
    await fun4();
    console.log("Await done");
}

parent();

//To catch the errors in the async/await, use try/catch
async function parent(){
    try{
        await fun2();
        console.log("try done");
    }
    catch(error){
        console.log("error");
    }
}

//this keyword
var obj = {
    name:'JSbeforeReact',
    getName: function(){
        console.log(this.name);
    }

}
obj.getName(); //op: JSbeforeReact

//if this is used like below, then the terminal returns undefined
var data = this;
console.log("data",data); //op:undefined, global scope

//next way to use this

//call
var obj = {num:6};
function add(a){
    console.log(this.num);
}
add.call(obj);

//apply
var obj = {num:6};
function add(a){
    console.log(this.num);
}
add.apply(obj);

//call and apply with params
var obj = {num:6};
function add(a,b,c){
    console.log(this,a,b,c);
}
add.call(obj,1,2,3);
add.apply(obj);

//method2
var obj = {num:6};
function add(a,b,c){
    console.log(this,a,b,c);
}
add.call(obj,1,2,3);
add.apply(obj,[1,2,3]);

//bind
var obj = {num:6};
function add(a,b,c){
    console.log(this,a,b,c);
}

var temp = add.bind(obj);//*mandatory to declare using a variable!!!!
temp();
