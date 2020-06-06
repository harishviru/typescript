console.log("********************Shake Hanke with basic types***********************");
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
var isPresent = true;
var num = 5000;
var sentence = "This is sentence " + num;
console.log(sentence);
//null &  undefined
var n = null;
var u = undefined;
var isNew = null;
var str = undefined;
console.log(n + "  - " + u + " -" + isNew + "  -" + str);
//Array
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr1);
console.log(arr2);
//enum
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["SUNDAY"] = 10] = "SUNDAY";
    WeekDays[WeekDays["MONDAY"] = 11] = "MONDAY";
    WeekDays[WeekDays["TUESDAY"] = 12] = "TUESDAY";
    WeekDays[WeekDays["WEDNESDAY"] = 13] = "WEDNESDAY";
    WeekDays[WeekDays["THURSDAY"] = 14] = "THURSDAY";
    WeekDays[WeekDays["FRIDAY"] = 15] = "FRIDAY";
    WeekDays[WeekDays["SATURDAY"] = 16] = "SATURDAY";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.SUNDAY);
//tuple
var employee = ["Harish", 725];
console.log(employee);
//any
var myAnyType = 45;
myAnyType = "string val";
myAnyType = true;
//unknown
var myUnknownType = 420;
myUnknownType = true;
console.log(myUnknownType);
//multiType or union type
var multiType;
multiType = 45;
multiType = "wincard";
console.log(multiType);
//void ,never
function voidFunction() {
    console.log("void function");
    return; //return we can place without value
}
voidFunction();
//never [it never ends...!]
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//throwError("hello");
console.log("***********************Basic Types one by one*******************************");
console.log("++++++++++++++++Boolean++++++++++++++++++++++++");
//#01.boolean
var booleanImplict = false; //implict type
var isBegginner = true;
console.log(booleanImplict);
console.log(isBegginner);
console.log("++++++++++++++++Number++++++++++++++++++++++++");
//#02 .number
var strImplict = "Implict type catching"; //implict type
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(strImplict);
console.log("++++++++++++++++String++++++++++++++++++++++++");
//#03 .string [TypeScript also uses double quotes (") or single quotes (') to store string data.]
var flag = "india";
flag = 'srrilanka';
console.log(flag);
//We can use TEMPLATE String using  backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
var fullName = "Harish viru";
var age = 25;
var fullSentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old.";
console.log(fullSentence);
console.log("++++++++++++++++Array++++++++++++++++++++++++");
//#04 array [TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array:]
var countries = ['India', 'Pakistan', 'Bangaladesh']; //using square brackets
var foreignCountries = ['USA', 'Australia', 'SouthAfrica']; //using generic type
console.log(countries); //Both methods produce the same output. 
console.log(foreignCountries);
//array declaration & intilization
var vegetables;
vegetables = ['carrot', 'tamato', 'chili'];
var ids;
ids = [23, 33, 43, 53, 63, 73];
console.log(vegetables);
console.log(ids);
//Multi Type Array [An array in TypeScript can contain elements of different data types]
var fruits = ['Pineapple', 7, 'Papaya', 2, 5, 'Banana'];
// or 
var newfruits = ['Jackfruit', 7, ' Muskmelon', 9, 5, 'Pomegranate'];
console.log(fruits);
console.log(fruits[2]);
console.log(newfruits);
console.log(newfruits[2]);
// Access Array Elements using Loop
console.log("-----Normal loop-------------");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("-----for in loop-------------");
for (var index in newfruits) {
    console.log(newfruits[index]);
}
console.log("-----for of loop-------------");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
console.log("++++++++++++++++Tuple++++++++++++++++++++++++");
//#05 tuple //A tuple type variable can include multiple data types
var emp = [1, "Harish",];
var tupleType = [9, "Harish", true];
var bankAc; // declare tuple variable
bankAc = [1894919, "ICICI", true, 5000, "balance"]; // initilization
console.log(tupleType);
console.log(bankAc);
console.log(emp);
console.log(emp[0]);
console.log(emp[1]);
//console.log(emp[2])//has no element at index
//emp[2]="HVirus"; //not assignable to 2 index
emp.push("Hviru");
console.log(emp);
//emp.push(true); //true is not assignable  to parameter of type 'string | number'
emp.push(4, "Crack"); //but by push method is possible to store in an array 
console.log(emp);
var tupleArray;
tupleArray = [[1, "White"], [2, "Brown"], [3, "Black"]];
console.log(tupleArray);
console.log(tupleArray[0]);
console.log(tupleArray[0][1]);
tupleArray[0][1] = tupleArray[0][1] + " Powder";
console.log(tupleArray[0][1]);
var xxx = ['hello', 10];
console.log(xxx);
console.log("++++++++++++++++Enum++++++++++++++++++++++++");
//#06 .enum  //Enums allow us to define a set of named constants.
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {})); //whithout inlization value 
console.log(Color.RED); //By default, enums begin numbering their members starting at 0
(function (Color) {
    Color[Color["BLACK"] = 10] = "BLACK";
    Color[Color["WHITE"] = 11] = "WHITE";
    Color[Color["PINK"] = 12] = "PINK";
})(Color || (Color = {}));
console.log(Color.BLACK);
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
})(MediaTypes || (MediaTypes = {}));
console.log(MediaTypes.JSON); //way of calling 01
console.log(MediaTypes["XML"]); //02
var DefaultPorts;
(function (DefaultPorts) {
    DefaultPorts[DefaultPorts["HTTP"] = 80] = "HTTP";
    DefaultPorts[DefaultPorts["HTTPS"] = 443] = "HTTPS";
})(DefaultPorts || (DefaultPorts = {}));
console.log(DefaultPorts.HTTPS);
console.log(DefaultPorts[443]);
console.log("++++++++++++++++Union++++++++++++++++++++++++");
//#07 union
var unionVal;
unionVal = "strVal";
unionVal = 500;
//unionVal=true;//true' is not assignable to type 'string | number'.
console.log(unionVal);
//#08 any 
console.log("++++++++++++++++Any++++++++++++++++++++++++");
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);
var list = [1, true, "free"];
list[1] = 100;
console.log(list);
//The any type represents all possible JS values
//Every type is assignable to type any. 
//Therefore the type any is an universal supertype of the type system. 
var value;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
//All assignments to the value variable are considered type-correct.
//What happens though when we try to assign a value of type any to variables of other types? //OK
var value1 = value; // OK
var value2 = value; // OK
var value3 = value; // OK
var value4 = value; // OK
var value5 = value; // OK
var value6 = value; // OK
var value7 = value; // OK
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
var UnValue;
UnValue = true; // OK
UnValue = 42; // OK
UnValue = "Hello World"; // OK
UnValue = []; // OK
UnValue = {}; // OK
UnValue = Math.random; // OK
UnValue = null; // OK
UnValue = undefined; // OK
UnValue = new TypeError(); // OK
//All assignments to the UnValue variable are considered type-correct.
//What happens though when we try to assign a value of type unkown to variables of other types? //NOT OK
var unknown1 = UnValue; // OK
var unknown2 = UnValue; // OK
// let unknown3: boolean = UnValue;   // Error
// let unknown4: number = UnValue;    // Error
// let unknown5: string = UnValue;    // Error
// let unknown6: object = UnValue;    // Error
// let unknown7: any[] = UnValue;     // Error
// let unknown8: Function = UnValue;  // Error
//operations on values of unknown 
// errors at compile time & problamatic at runtime 
var dontKnown;
// dontKnown.foo.bar;  // Error
// dontKnown.trim();   // Error
// dontKnown();        // Error
// new dontKnown();    // Error
// dontKnown[0][1];    // Error
console.log("+++++++++++Using Type Assertions with unknown++++++++++++");
var typeAsserVal = "Hello World";
var something = typeAsserVal;
var otherVal = something.toUpperCase();
console.log(otherVal);
console.log("++++++++++++The unknown Type in Union Types++++++++++++++");
console.log("++++++++++++The unknown Type in Intersection Types++++++++++++++");
//#10 .void //void is a little like the opposite of any: the absence of having any type at all. 
console.log("++++++++++++Void++++++++++++++");
function warnUser() {
    console.log("This is my warning message");
    return; //return without value is valid[if void is return type]
}
warnUser(); //You may commonly see this as the return type of functions that do not return a value
//Declaring variables of type void is not useful because you can only assign null
var unusable = undefined;
unusable = null; // OK if `--strictNullChecks` is not given in tsconfig.json
//#11 null & undefined
console.log("++++++++++++null & undefined++++++++++++++");
//Something hasn't been initialized  : undefined.
//Something is currently unavailable value of variable: null.
// Not much else we can assign to these variables!
var notDefined = undefined;
var nNull = null;
//nNull=87;                //Type '87' is not assignable to type 'null'
//notDefined="str";         //Type '"str"' is not assignable to type 'undefined'
var strVal = null;
var numVal = null;
console.log(strVal);
console.log(numVal);
strVal = undefined;
numVal = undefined;
console.log(strVal);
console.log(numVal);
// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true
// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
//#12 never //never type represents the type of values that never occurs
console.log("++++++++++++never++++++++++++++");
// Function returning never must have unreachable end point
function error(errorMsg) {
    throw new Error(errorMsg);
}
// Inferred/Implicit return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//Difference between never and void
//The void type can have undefined or null as a value where as never cannot have any value. 
var smthing = null;
//let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
//#13 object
console.log("++++++++++++object++++++++++++++");
function createObject(o) {
    console.log(Object.create(o));
}
createObject(null); // OK
createObject({ prop: 0 }); // OK
//createObject(undefined); //Error
//createObject(42); // Error
//createObject("string"); // Error
//createObject(false); // Error
//Type Inference in TypeScript
console.log("------****----Type Inference in TypeScript----------************---------------");
// Types are inferred by TypeScript compiler when:
// .Variables are initialized
// .Default values are set for parameters
// .Function return types are determined
var inferType = "typeStr"; //Here TS infered var inferType: string
//inferType=45;             //i.e Type '45' is not assignable to type 'string'
var numValue = 453; //Here TS infered let numValue: number
//numValue="78";           //i.e type '"78"' is not assignable to type 'number'
//arrays ,objects
var arr = [10, null, 30, 40, null, 50]; //Here TS infered var arr: (number | null)[]
//arr[5]="arrValue";                   //Type '"arrValue"' is not assignable to type 'number | null'
//arr.push("str") ;                  //Argument of type '"str"' is not assignable to parameter of type 'number'
var obj = { id: 702, empName: "Harish", company: "UnknownComp" }; //
//Above TS Compiler infer as below
// var obj: {
//   id: number;
//   empName: string;
//   company: string;
// }
var newObj = {};
//obj=newObj; //Error
//function
function sum(a, b) {
    return a + b;
}
var total = sum(10, 20); // OK
//var stringValue: string = sum(10,20); // Compiler Error [Type 'number' is not assignable to type 'string'.]
console.log(total);
// Type assertions  //A type assertion is like a type cast in other languages
console.log("------****---- Type assertions ----------************---------------");
/**
 * There are two ways to do type assertion in TypeScript:
   1. Using the angular bracket <> syntax.
   2. Using as keyword
 *
 */
// angular bracket <> syntax. 
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
console.log(typeof (strLength)); //Output: number
//And the other is the as-syntax:
var someOnesValue = "this is a string";
var strsLength = someOnesValue.length;
console.log(strsLength);
console.log(typeof (strsLength)); //Output: number
//Type Assertion with Object
var empObject = {};
var oh = empObject;
var newEmpObject = {};
newEmpObject.name = "varun";
newEmpObject.id = 478;
console.log(newEmpObject.name);
console.log(oh.id = 45);
console.log(oh.id);
