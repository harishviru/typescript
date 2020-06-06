  console.log("********************Shake Hanke with basic types***********************")
/**Basic types are boolean,
 *                  number,
 *                  string,
 *                  array,
 *                   enum,
 *                   tuple,
 *                    any,
 *                   unknown,
 *                    null & undefined,
 *                   void,never,union,object
 */


//boolean,number,string
let isPresent:boolean = true;
let num:number=5000;

let sentence:String=`This is sentence ${num}`;
console.log(sentence);

//null &  undefined
let n:null=null;
let u:undefined=undefined;

let isNew:boolean=null;
let str:string=undefined;
 
console.log(`${n}  - ${u} -${isNew}  -${str}`);

//Array
let arr1:number[]=[1,2,3];
let arr2:Array<number>=[1,2,3]

console.log(arr1);
console.log(arr2);

//enum

enum WeekDays {SUNDAY=10,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY}
console.log(WeekDays.SUNDAY);


//tuple
let employee :[string,number]=["Harish",725];
console.log(employee);

//any
let myAnyType:any=45;
myAnyType="string val";
myAnyType=true;

//unknown
let myUnknownType:unknown=420;
myUnknownType=true;
console.log(myUnknownType);

//multiType or union type
let multiType :number|string;
multiType=45;
multiType="wincard";
console.log(multiType);

//void ,never
function voidFunction():void{
    console.log("void function");
    return; //return we can place without value
}
voidFunction();
//never [it never ends...!]
function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 
//throwError("hello");


console.log("***********************Basic Types one by one*******************************")

     console.log("++++++++++++++++Boolean++++++++++++++++++++++++");
//#01.boolean
let booleanImplict=false;//implict type
var isBegginner:boolean=true;
console.log(booleanImplict);
console.log(isBegginner);

console.log("++++++++++++++++Number++++++++++++++++++++++++");

//#02 .number
let strImplict="Implict type catching";//implict type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744

console.log(decimal)
console.log(hex)
console.log(binary)
console.log(octal)
console.log(strImplict)

console.log("++++++++++++++++String++++++++++++++++++++++++");

//#03 .string [TypeScript also uses double quotes (") or single quotes (') to store string data.]
let flag: string = "india";
flag = 'srrilanka';

console.log(flag);

//We can use TEMPLATE String using  backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
let fullName: string = `Harish viru`;
let age: number = 25;
let fullSentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old.`;
console.log(fullSentence);

console.log("++++++++++++++++Array++++++++++++++++++++++++");

//#04 array [TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array:]

let  countries: string[] = ['India', 'Pakistan', 'Bangaladesh']; //using square brackets

let foreignCountries: Array<string> = ['USA', 'Australia', 'SouthAfrica'];//using generic type

console.log(countries)//Both methods produce the same output. 
console.log(foreignCountries);

//array declaration & intilization
let vegetables: Array<string>;
vegetables = ['carrot', 'tamato', 'chili']; 

let ids: Array<number>;
ids = [23,33,43,53,63,73]; 

console.log(vegetables)
console.log(ids)


//Multi Type Array [An array in TypeScript can contain elements of different data types]

let fruits: (string | number)[] = ['Pineapple', 7, 'Papaya', 2, 5, 'Banana']; 
// or 
let newfruits: Array<string | number> = ['Jackfruit', 7, ' Muskmelon', 9, 5, 'Pomegranate']; 

console.log(fruits)
console.log(fruits[2])

console.log(newfruits)
console.log(newfruits[2])

// Access Array Elements using Loop
console.log("-----Normal loop-------------")
for(let i=0;i<fruits.length;i++){
      console.log(fruits[i])
}
console.log("-----for in loop-------------")
for(let index in newfruits){
        console.log(newfruits[index])
}
console.log("-----for of loop-------------")
for(let fruit of fruits){
  console.log(fruit);
}
console.log("++++++++++++++++Tuple++++++++++++++++++++++++");


//#05 tuple //A tuple type variable can include multiple data types
var emp: [number, string] = [1, "Harish",];
var tupleType: [number, string, boolean] = [9, "Harish", true];

var bankAc: [number, string, boolean, number, string];// declare tuple variable
bankAc = [1894919, "ICICI", true, 5000, "balance"];// initilization

console.log(tupleType);
console.log(bankAc);

console.log(emp);
console.log(emp[0])
console.log(emp[1])
//console.log(emp[2])//has no element at index
//emp[2]="HVirus"; //not assignable to 2 index
emp.push("Hviru");
console.log(emp);
//emp.push(true); //true is not assignable  to parameter of type 'string | number'
emp.push(4,"Crack"); //but by push method is possible to store in an array 
console.log(emp);

var tupleArray: [number, string][];
tupleArray=[[1, "White"], [2, "Brown"], [3, "Black"]];
console.log(tupleArray);
console.log(tupleArray[0]);
console.log(tupleArray[0][1]);
tupleArray[0][1]=tupleArray[0][1]+" Powder";
console.log(tupleArray[0][1]);

type Test = [string, number];
const xxx: Test = ['hello', 10];

console.log(xxx);

console.log("++++++++++++++++Enum++++++++++++++++++++++++");

//#06 .enum  //Enums allow us to define a set of named constants.
enum Color {RED, GREEN, BLUE} //whithout inlization value 
console.log(Color.RED);      //By default, enums begin numbering their members starting at 0

enum Color {BLACK =10 , WHITE, PINK}
console.log(Color.BLACK);

enum MediaTypes {
  JSON = "application/json",
  XML = "application/xml"
}

console.log(MediaTypes.JSON);         //way of calling 01
console.log(MediaTypes["XML"]);       //02


enum DefaultPorts {
  HTTP = 80,
  HTTPS = 443
}

console.log(DefaultPorts.HTTPS);
console.log(DefaultPorts[443]);

console.log("++++++++++++++++Union++++++++++++++++++++++++");
//#07 union
let unionVal: (string | number);
unionVal="strVal" ;
unionVal=500;
//unionVal=true;//true' is not assignable to type 'string | number'.
console.log(unionVal)

//#08 any 
console.log("++++++++++++++++Any++++++++++++++++++++++++");

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list);

//The any type represents all possible JS values
//Every type is assignable to type any. 
//Therefore the type any is an universal supertype of the type system. 
let value: any;
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK

//All assignments to the value variable are considered type-correct.
//What happens though when we try to assign a value of type any to variables of other types? //OK
let value1: any = value;      // OK
let value2: boolean = value;   // OK
let value3: number = value;    // OK
let value4: string = value;    // OK
let value5: object = value;    // OK
let value6: any[] = value;     // OK
let value7: Function = value;  // OK

//operations on values of type 
//No errors at compile time of type any but  But problamatic at runtime 
//value.foo.bar;  // OK    //But problamatic at runtime [Cannot read property 'bar' of undefined]
//value.trim();   // OK
//value();        // OK
//new value();    // OK
//value[0][1];    // OK
                         //We don't get a lot of protection from TypeScript if we're opting to use any.


//#09 unknown
console.log("++++++++++++++++unknow++++++++++++++++++++++++");

//The unknown type represents (just like any) all possible JS values.
// Every type is assignable to type unknown.
//Therefore the type unknown is another universal supertype of the type system (alongside   any).
let UnValue: unknown;
UnValue = true;             // OK
UnValue = 42;               // OK
UnValue = "Hello World";    // OK
UnValue = [];               // OK
UnValue = {};               // OK
UnValue = Math.random;      // OK
UnValue = null;             // OK
UnValue = undefined;        // OK
UnValue = new TypeError();  // OK

//All assignments to the UnValue variable are considered type-correct.
//What happens though when we try to assign a value of type unkown to variables of other types? //NOT OK

let unknown1: unknown = UnValue;   // OK
let unknown2: any = UnValue;       // OK
// let unknown3: boolean = UnValue;   // Error
// let unknown4: number = UnValue;    // Error
// let unknown5: string = UnValue;    // Error
// let unknown6: object = UnValue;    // Error
// let unknown7: any[] = UnValue;     // Error
// let unknown8: Function = UnValue;  // Error

//operations on values of unknown 
// errors at compile time & problamatic at runtime 
let dontKnown: unknown;

// dontKnown.foo.bar;  // Error
// dontKnown.trim();   // Error
// dontKnown();        // Error
// new dontKnown();    // Error
// dontKnown[0][1];    // Error

console.log("+++++++++++Using Type Assertions with unknown++++++++++++");
const typeAsserVal: unknown = "Hello World";
const something :string =typeAsserVal as string;
const otherVal=something.toUpperCase();
console.log(otherVal);

console.log("++++++++++++The unknown Type in Union Types++++++++++++++")
//This means that if any of the constituent types is unknown, the union type evaluates to unknown:
type UnionType1 = unknown | null;       // unknown
type UnionType2 = unknown | undefined;  // unknown
type UnionType3 = unknown | string;     // unknown
type UnionType4 = unknown | number[];   // unknown

//The one exception to this rule is any. If at least one of the constituent types is any, the union type evaluates to any:
type UnionType5 = unknown | any;  // any

console.log("++++++++++++The unknown Type in Intersection Types++++++++++++++")
type IntersectionType1 = unknown & null;       // null
type IntersectionType2 = unknown & undefined;  // undefined
type IntersectionType3 = unknown & string;     // string
type IntersectionType4 = unknown & number[];   // number[]
type IntersectionType5 = unknown & any;        // any


//#10 .void //void is a little like the opposite of any: the absence of having any type at all. 
console.log("++++++++++++Void++++++++++++++")
function warnUser(): void {
  console.log("This is my warning message");
  return;//return without value is valid[if void is return type]
}
warnUser();//You may commonly see this as the return type of functions that do not return a value

//Declaring variables of type void is not useful because you can only assign null
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given in tsconfig.json


//#11 null & undefined
console.log("++++++++++++null & undefined++++++++++++++")
//Something hasn't been initialized  : undefined.
//Something is currently unavailable value of variable: null.
// Not much else we can assign to these variables!
let notDefined: undefined = undefined;
let nNull: null = null;
//nNull=87;                //Type '87' is not assignable to type 'null'
//notDefined="str";         //Type '"str"' is not assignable to type 'undefined'

let strVal:string=null;
let numVal:number=null;
console.log(strVal)
console.log(numVal)
strVal=undefined;
numVal=undefined;
console.log(strVal)
console.log(numVal)

// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true


// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

//#12 never //never type represents the type of values that never occurs
console.log("++++++++++++never++++++++++++++")

// Function returning never must have unreachable end point
function error(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Inferred/Implicit return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}

//Difference between never and void
//The void type can have undefined or null as a value where as never cannot have any value. 
let smthing: void = null;
//let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'

//#13 object
console.log("++++++++++++object++++++++++++++")
 function createObject(o: object | null): void{
     console.log(Object.create(o))
 }

 createObject(null); // OK
 
 createObject({ prop: 0 }); // OK

 //createObject(undefined); //Error
 //createObject(42); // Error
 //createObject("string"); // Error
 //createObject(false); // Error

//Type Inference in TypeScript
console.log("------****----Type Inference in TypeScript----------************---------------")
// Types are inferred by TypeScript compiler when:
// .Variables are initialized
// .Default values are set for parameters
// .Function return types are determined

var inferType="typeStr"; //Here TS infered var inferType: string
//inferType=45;             //i.e Type '45' is not assignable to type 'string'

let numValue=453;      //Here TS infered let numValue: number
//numValue="78";           //i.e type '"78"' is not assignable to type 'number'

//arrays ,objects
var arr = [ 10, null, 30, 40,null,50 ]; //Here TS infered var arr: (number | null)[]
//arr[5]="arrValue";                   //Type '"arrValue"' is not assignable to type 'number | null'
//arr.push("str") ;                  //Argument of type '"str"' is not assignable to parameter of type 'number'

var obj ={id:702,empName:"Harish",company:"UnknownComp"};//
//Above TS Compiler infer as below
// var obj: {
//   id: number;
//   empName: string;
//   company: string;
// }
var newObj={}
//obj=newObj; //Error

//function
function sum(a: number, b: number ){ //TS Compiler infer -->function sum(a: number, b: number): number
    return a + b;    
}
var total: number = sum(10,20); // OK
//var stringValue: string = sum(10,20); // Compiler Error [Type 'number' is not assignable to type 'string'.]
console.log(total)


// Type assertions  //A type assertion is like a type cast in other languages
console.log("------****---- Type assertions ----------************---------------")
/**
 * There are two ways to do type assertion in TypeScript:
   1. Using the angular bracket <> syntax.
   2. Using as keyword
 * 
 */
// angular bracket <> syntax. 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; 
console.log(strLength);
console.log(typeof(strLength)); //Output: number

//And the other is the as-syntax:
let someOnesValue: any = "this is a string";
let strsLength: number = (someOnesValue as string).length; 
console.log(strsLength);
console.log(typeof(strsLength)); //Output: number

//Type Assertion with Object

let empObject ={};
//empObject.name="varun";//Property 'name' does not exist on type '{}'.
interface Employee { 
  name: string; 
  id: number; 
} 
let asObj=(empObject as Employee);
asObj.id=89;
console.log(asObj.id)

let newEmpObject=<Employee>{};
newEmpObject.name="varun";
newEmpObject.id=478;
console.log(newEmpObject.name);



