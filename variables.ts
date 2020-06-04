console.log("*********************Here we are discusing the var,let,const keywords *************** ")
// #01. var 
/*
  1.var is a functional scope
  2.var allows shadowing
  3.var allows hoisting 
*/

function sayWelcome(name: string){
    var welcome;
    if(name==="Harish"){
         welcome="grand welcome to Harish";    
    }else{
        welcome="Hi there";
    }
    console.log(welcome);  
}
sayWelcome("Harish");
// #01. let 
/*
  1.let  is a block scope
  2.let not allows shadowing
  3.let not allows hoisting 
*/
var a=10;
var b=90;
if(a==10){
    var a=20;
    let b=50;
    console.log(a);//20
    console.log(b);//50
}
console.log(a);//20
console.log(b);//90

//#03.const //Must be intialize value at declaration stage
/*
  1.const  is a block scope
  2.const not allows shadowing
  3.const not allows hoisting 
*/
 var  l;
 let m;
 //const h;
 const h="Constant";


//let in for-loop

for(var i=0;i<=5;i++){
  setTimeout(function(){console.log(i)},1000);
  //6,6,6,6,6,6
}

for(let i=0;i<=5;i++){
    setTimeout(function(){console.log(i)},1000);
  }

//const in objects

const obj={
    name:"janu"
}
console.log(obj.name);
//obj={}; //we cannot re-assign it again becoz const are READ_ONLY

obj.name="Harish viru"; //But we can re-assign obj properties.
console.log(obj.name);

//conlusion : let is used when re-assign is required but not const (becoz const are READ_ONLY)









