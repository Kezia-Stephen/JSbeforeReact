var products = [{id:1, name:"Book", cost:50, desc: "Book at a cost of 50",count:0},
                {id:2, name:"Notebook", cost:50, desc: "Noteook at a cost of 50",count:0},
                {id:3, name:"Pen", cost:30, desc: "Pen at a cost of 30",count:0},
                {id:4, name:"Pencil", cost:10, desc: "Pencil at a cost of 50",count:0}];

var cartItems = [{id:1, name:"Book", cost:50, desc: "Book at a cost of 50",count:0, qty:1}];

function addtoCart(id){
  var items = cartItems.find(function(item,index){
        return item.id === id;
  });
 
  if (items){
    var res = cartItems.map(function(item){
      if (item.id === id){
        item.qty = item.qty+1;
        return item;
      }
      else{
        return item;
      }
    });
    cartItems = res;
  }else{
    var res = products.find(function(item,index){
      return item.id === id;
    });
    res.qty = 1;
    cartItems.push(res);
  }
  console.log("Here is the items in the cart:", cartItems);
};

// const btn = document.getElementsByClassName("btn");

// btn.addEventListener("click", function () {
//   addtoCart(1);
// });

addtoCart(1);


const increment = (id) => {
  const temp = cartItems.map((item)=> {
    if(item.id === id){
      return{
        ...item,
        qty: item.qty+1,
      };
    }
    else return item;
  });
  console.log("temp value", temp);
}


// const btn1 = document.getElementsByClassName("btn1");

// btn1.addEventListener("click", function () {
//   increment(1);
// });

increment(1);


const decrement = (id) => {
  const selectedItem = cartItems.find((item)=> item.id === id)
  if (selectedItem){
    if (selectedItem.qty === 1){
      const temp1 = cartItems.filter((item)=> item.id !== id);
      console.log("temp1 value", temp1);
    } 
    else 
    {
      const temp1 = cartItems.map((item)=> {
        if(item.id === id){
          return{
            ...item,
            qty: item.qty-1,
          };
        }
        else return item;
      });
      console.log("temp1 value", temp1);
    }
  } 
}

decrement(1);

//var addtoCart = [];

// var qty = 1;

// addtoCart.push(products.find(product => product.id === 2));
// addtoCart.push(products.find(product => product.id === 2));
// addtoCart.push(products.find(product => product.id === 3));
// cartItems = addtoCart.map(cartList => {return {cartList,sn: cartList.id === 2 ? (cartList.count+cartList.count):cartList.count}});
// //id:cartList.id, name:cartList.name
// var idkey=2;
// var cartItems1 = addtoCart.filter(function(item){
//     if (item.id === idkey) {
//       return true;
//     } else {
//       return false;
//     }
//   }).length;
  
// console.log(cartItems);
// var item = addtoCart.map(cartList =>{ return{

//     id: cartList.id,
//     name: cartList.name,
//     cost: cartList.cost,
//     count: cartItems1

// }});
//console.log(item);
//addtoCart function=> add a button in html => prompt => get the id => push the product like this in the cartItems => {id:2, name:"Notebook", cost:50, desc: "Noteook at a cost of 50" qty:1}
//if same id is in the cart, increase the qty

//cartList function => console.log(all the items in the cart)

//remove product from cart

//increment, decrement qty
