//Variables [var,let ,const] 
/**
 * var:
  1.we can declare ,assign value,resign variable or value
  2.var is a functional scope                               //[In function we can access these value even though it is inside the block]
  3.var allows shadowing                                  //we can redeclare variable that is already declared variable   
  4.var allows hoisting                                 //It means we can declare after or before value intializing value to variable          
 * 
 */
  console.log("******************var******************************")
 
var a; //declaring variable
a = 10; //assigning value
var b = 10; // intialization of value
var b=10;      //redeclaring
console.log(a);
console.log(b);

//var is a function scope ,shadowing

function varScope(permit){
    var a=50;
    if(permit){
        var a=90;
    }
    return a;
}

console.log(varScope(true));
console.log(varScope(false));

//hoisting
function varHoist(check){
    if(check){
        a=300;
     }
    console.log(a);
    var a;
}

console.log(varHoist(true));



/**
 * 
 * let:
----
  1.we can declare ,assign value,resign variable or value
  2.let is a block scope                               //[In function we can access these value even though it is inside the block]
  3.let not allows shadowing                                  //we can redeclare variable that is already declared variable   
  4.let not allows hoisting                                 //It means we can declare after or before value intializing value to variable      

 */
console.log("******************let******************************")

let c;        //declaring variable
 c=10;     //assigning value

let d=70;// intialization of value
//let d=10;      //redeclaring  [not possibel]

console.log(c);
console.log(d);


//let not allows function scope ,shadowing

function letScope(permit){
    let a=750;
    if(permit){
        let a=650;
    }
    return a;
}

console.log(letScope(true));
console.log(letScope(false));

//hoisting
function letHoist(check){
    if(check){
        a=300;
     }
    console.log(a);
   // let a;          //let not allows hoisting
}

console.log(letHoist(true));

/** 
const:
  1.we can intailize value like[const pi=3.14]//we cannot re-assign ,redeclare
  2.const is a block scope                               //[In function we can access these value even though it is inside the block]
  3.const not allows shadowing                                  //we can redeclare variable that is already declared variable   
  4.const not allows hoisting                                 //It means we can declare after or before value intializing value to variable         

**/
console.log("******************const******************************")

//const e;        //declaring variable     [x not possible]
 //e=10;     //assigning value                 [x not possible]

let h=70;// intialization of value
//let h=10;      //redeclaring  [not possibel]   [x not possible]

console.log(h)

console.log("***************************some sample examples***************************")

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}
var g=f();
console.log(g());


function sample() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(sample());



console.log("--var vs let---")
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000);
}
console.log( );
for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000);
}



function test(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
    return x;
}

console.log(test(1000));

