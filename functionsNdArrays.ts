//if ,switch,for,while
console.log("**************if.,switch,for,while**************************");

//if
if(true){
    console.log("condition is exceuted........!")
}
if(false){
    console.log("condition is not exceuted........!")
}

let x:number=100;
if(x>90){
    console.log(`${x} is greater than 90`);
}else{
    console.log(`${x} is not greater than 90`);
}

let y: number = 10, z = 20;
if(y>z){
    console.log('y is greater than z');
}else if(y<z){
    console.log('y is less than z');
}else if(y==z){
    console.log('y & z are equal');
}

//Ternary operator (?)
//synatx :Boolean ?first statement:second statement;
y>z?console.log('y is greater than z'): console.log('y is less than z');


//swicth
/**
 *  switch(expression){
 *        case constant expession:{
 *                 //statements
 *                 break;
 *             }
        case constant expession:{
 *                 //statements
 *                 break;
 *             }
              default:{
 *                 //statements
 *                 break;
 *             }
 * }
 */
let day:number =5;

switch(day){
   case 0:{
        console.log("it is sunday")
        break;
    }
   case 1:{
    console.log("it is Monday")
    break;
    }
    case 2:{
      console.log("it is Tuesday")
      break;
    }
  case 3:{
    console.log("it is wednesday")
    break;
   } 
   case 4:{
      console.log("it is thursday")
      break;
   } 
   case 5:{
      console.log("it is friday")
      break;
  } 
  case 6:{
    console.log("it is staurday")
    break;
   }
  default:{
    console.log("No such day exists")
    break;
    }
}

//Typescript supports below one's
//for loop
//for..of loop
// for..in loop
  console.log("for loop.........")
for (let i = 0; i < 2; i++) {
    console.log ("No." + i);
  }
  console.log("for..of loop")
  let array = [10, 20, 30, 40,50];
  for (let val of array) {
    console.log(val); 
  }

  console.log("for..in loop")
  for (let index in array) {
    console.log(index); 
    console.log(array[index]); 
  }

//while ,do..while loop
console.log("while loop")
let k=2;
while(k<4){
    console.log("W execution no "+k)
    k++;
}
let p=3;
console.log("do..while loop")
do{
    console.log("do execution no "+p)
    p++;
}while(p<3)

//functions 
  console.log("*******************functions**************************")
  //Typescript -->i)Named functions ii)Anonymous Function
  //Named functions
  function sayHello() {
    console.log("Hello to TypeScript beginners");
}
function sayHelloWithName(name:string){         //function with parameter
    console.log("Hello to TypeScript beginners   "+name);
}

sayHello();
sayHelloWithName("Harishviru");

//Anonymous Function
let sayWelcome =function(){
    console.log("welcome to every one")
}
sayWelcome();

let sayWelcomeWithName=function(name :string){
    console.log("welcome to "+name)
}
sayWelcomeWithName("Hari")

//Optional Parameters in functions
//Parameters that may or may not receive a value can be appended with a '?' to mark them as optional. 
console.log("--------Optional Parameters in functions----------")

function optionalParamFunction(fName:string,lName?:string){
     if(lName!=null && typeof(lName)!=undefined){
        return fName+lName;
     }
     return fName;
}

console.log(optionalParamFunction("Mallavika"))
console.log(optionalParamFunction("H","Virus"))
console.log("--------Default Parameters in functions------------------------------")
//Default Parameters in functions
//if user is not provided the value,then it initialize the parameter with the default value.

function withDefaultValueFunction(fname:string,lname:string="Viru"){
    return fname+lname;
}

console.log(withDefaultValueFunction("harish"))
console.log(withDefaultValueFunction("harish","s"))

//Function Overloading
console.log("-------------Function Overloading------------------")

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
     console.log("overloaded function..?")
    return a + b;
}

console.log(add(1,2));
console.log(add("H","N"));
console.log(add(undefined,""));

//function with returnType
console.log("----------------function with returnType---------------------")

function sumfunctionWithReturnType(a:number,b:number):number{
    return a+b;
}
console.log(sumfunctionWithReturnType(1,0))

console.log("------------arrow functions in-------------------------------")
//Here we are discussing arrow functions in ES6
// 0-param
function sayHelloQ(){
    return "Hello world";
}

//related arrow Function
var sayHlo=()=>"Hello world";
console.log("sayHlo--->"+sayHlo());

//1-param
function isPositiveNum(num){
    return num>=0;
}

//related arrow Function
var checkPtvNo=num=>num>=0;
console.log("checkPtvNo---->"+checkPtvNo(10));

//2-param
function sum(a,b){
    return a+b;
}
//related arrow Function
var sumVal=(a,b)=>a+b;
console.log("sumVal---->"+sumVal(10,50));

// document.addEventListener("click",function(){
//          console.log("clicked")
// });
// //related arrow function
// document.addEventListener("click",()=>console.log("clicked"));


//"this" in arrow function 
var obj1={
    firstName:"Harish",
    lastName:"viru",
    fullName :function(){
       setTimeout(function(){return this.firstName +this.lastName},1000);
    }
}
console.log("normal function--->"+obj1.fullName())
obj1.fullName =function(){
    setTimeout(()=>{console.log(this.firstName +this.lastName)},100);
};

console.log(obj1.firstName)
console.log(obj1.lastName)
console.log(obj1.fullName())

console.log("*******************arrays ,Tuple ,Object **************************")
console.log("------------------------Rest operator---------------------")
//#Rest operator (syntax : ...variableName (in function arguments))
//Rest operator we place in function parameter by using ...(three dots)[...days]
let displayDays=function(message, ...days){
    console.log(message)
    //console.log(arguments.length)
  for(let day of days){
      console.log(day)
   }
}
let message ="Working days.......!"
displayDays(message,"monday","tueday","wednesday","Thursday","friday");
message="Weekdays..............!";
displayDays(message,"staurday","sunday");


//#.Spread operator  
//Spread operator we place in function call by using ...(three dots)[...days]
console.log("------------------Spread operator --------------------")

 message ="Holidays.......!"
 let holidays=["sankrithi","vinayakachavithi"];
displayDays(message,...holidays);
message="special holidays..............!";
 holidays=["ramzan","chrismas"];
displayDays(message,...holidays);


//Destructuring Array
 console.log("-----------Destructuring Array--------------------------")
 let itEmp =["Rajenderc","cheerala","Male","juniorEngg"]

 let [efName,elName,gender,position]=itEmp;
 
 console.log(efName);
 console.log(elName);
 console.log(gender);
 console.log(position);
 console.log();
 
 //we can set default val 
 itEmp =["Rajenderc","cheerala","Male"]
let [ef,el,gen,pos="seniorEng"]=itEmp; //we can set default val 
console.log(ef);
console.log(el);
console.log(gen);
console.log(pos);
console.log();

//we can leave empty if values  are not required to store 
let lead =["balaram","cheerayala","Male"];
let [,,gend]=lead;
console.log(gend);


//we can use rest operator
let contact =["ranjitha","sahu","Female","juniorEngg"];
let [cnFname,...contactElements]=contact;           //A rest element must be last in a destructuring pattern.
console.log(cnFname);
console.log(contactElements);

//In function arguments destructing
function desFun([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
console.log(desFun([1, 2]))

console.log("----------Tuple destructuring -------------------")
//Tuple destructuring 
//Tuples may be destructured like arrays; the destructuring variables get the types of the corresponding tuple elements:
let tuple: [number, string, boolean] = [7, "hello", true];

 let [l,m,s]= tuple; // l: number, m: string, s: boolean
 console.log(l);
console.log(m);
console.log(s);


//let [l,m,s,o] = tuple; // Error, no element at index 3
//console.log(o);

// we can rest operator in tuple
let restTuple:[number,string,string,string];//declaration
restTuple=[100,"H","O","T"]                 //intialization
let [numb,,...restTple]=restTuple; //we can leave empty ,
console.log(numb)
console.log(restTple)


//we cannot set default value to Tuple
let tupleDefVal:[number,number]=[1,0];
let [n1,n2="100"]=tupleDefVal;
console.log(n1)
console.log(n2);

console.log("-------------- Object destructuring ---------------------------")
//# Object destructuring
let ob = {
    w: "foo",
    q: 12,
    r: "bar"
};
let { w,q} = ob;         //we can leave empty that is not required
console.log(ob.w)
console.log(ob.q)
console.log(ob.r)

let customer={
    custfName:"Robert",
    custlName :"Hoke",
    custage:"46"
};

let {custfName,custlName,custage}=customer; //object names must have to match
console.log(custfName);
console.log(custlName);
console.log(custage);

//Here we can assign to new variable or alias
let {custfName:fName,custlName:lName,custage:cage}=customer; 
console.log(fName);
console.log(lName);
console.log(cage);

let empObj ={
    empage:"46",
    empfName:"John",
    emplName :"Cena"
}
// we can use rest operator ..here
let {empage,...empfullName}=empObj;
console.log(empage)
console.log(empfullName)
console.log(empfullName.empfName)












