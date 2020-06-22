var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//if ,switch,for,while
console.log("**************if.,switch,for,while**************************");
//if
if (true) {
    console.log("condition is exceuted........!");
}
if (false) {
    console.log("condition is not exceuted........!");
}
var x = 100;
if (x > 90) {
    console.log(x + " is greater than 90");
}
else {
    console.log(x + " is not greater than 90");
}
var y = 10, z = 20;
if (y > z) {
    console.log('y is greater than z');
}
else if (y < z) {
    console.log('y is less than z');
}
else if (y == z) {
    console.log('y & z are equal');
}
//Ternary operator (?)
//synatx :Boolean ?first statement:second statement;
y > z ? console.log('y is greater than z') : console.log('y is less than z');
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
var day = 5;
switch (day) {
    case 0: {
        console.log("it is sunday");
        break;
    }
    case 1: {
        console.log("it is Monday");
        break;
    }
    case 2: {
        console.log("it is Tuesday");
        break;
    }
    case 3: {
        console.log("it is wednesday");
        break;
    }
    case 4: {
        console.log("it is thursday");
        break;
    }
    case 5: {
        console.log("it is friday");
        break;
    }
    case 6: {
        console.log("it is staurday");
        break;
    }
    default: {
        console.log("No such day exists");
        break;
    }
}
//Typescript supports below one's
//for loop
//for..of loop
// for..in loop
console.log("for loop.........");
for (var i = 0; i < 2; i++) {
    console.log("No." + i);
}
console.log("for..of loop");
var array = [10, 20, 30, 40, 50];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    console.log(val);
}
console.log("for..in loop");
for (var index in array) {
    console.log(index);
    console.log(array[index]);
}
//while ,do..while loop
console.log("while loop");
var k = 2;
while (k < 4) {
    console.log("W execution no " + k);
    k++;
}
var p = 3;
console.log("do..while loop");
do {
    console.log("do execution no " + p);
    p++;
} while (p < 3);
//functions 
console.log("*******************functions**************************");
//Typescript -->i)Named functions ii)Anonymous Function
//Named functions
function sayHello() {
    console.log("Hello to TypeScript beginners");
}
function sayHelloWithName(name) {
    console.log("Hello to TypeScript beginners   " + name);
}
sayHello();
sayHelloWithName("Harishviru");
//Anonymous Function
var sayWelcome = function () {
    console.log("welcome to every one");
};
sayWelcome();
var sayWelcomeWithName = function (name) {
    console.log("welcome to " + name);
};
sayWelcomeWithName("Hari");
//Optional Parameters in functions
//Parameters that may or may not receive a value can be appended with a '?' to mark them as optional. 
console.log("--------Optional Parameters in functions----------");
function optionalParamFunction(fName, lName) {
    if (lName != null && typeof (lName) != undefined) {
        return fName + lName;
    }
    return fName;
}
console.log(optionalParamFunction("Mallavika"));
console.log(optionalParamFunction("H", "Virus"));
console.log("--------Default Parameters in functions------------------------------");
//Default Parameters in functions
//if user is not provided the value,then it initialize the parameter with the default value.
function withDefaultValueFunction(fname, lname) {
    if (lname === void 0) { lname = "Viru"; }
    return fname + lname;
}
console.log(withDefaultValueFunction("harish"));
console.log(withDefaultValueFunction("harish", "s"));
//Function Overloading
console.log("-------------Function Overloading------------------");
function add(a, b) {
    console.log("overloaded function..?");
    return a + b;
}
console.log(add(1, 2));
console.log(add("H", "N"));
console.log(add(undefined, ""));
//function with returnType
console.log("----------------function with returnType---------------------");
function sumfunctionWithReturnType(a, b) {
    return a + b;
}
console.log(sumfunctionWithReturnType(1, 0));
console.log("------------arrow functions in-------------------------------");
//Here we are discussing arrow functions in ES6
// 0-param
function sayHelloQ() {
    return "Hello world";
}
//related arrow Function
var sayHlo = function () { return "Hello world"; };
console.log("sayHlo--->" + sayHlo());
//1-param
function isPositiveNum(num) {
    return num >= 0;
}
//related arrow Function
var checkPtvNo = function (num) { return num >= 0; };
console.log("checkPtvNo---->" + checkPtvNo(10));
//2-param
function sum(a, b) {
    return a + b;
}
//related arrow Function
var sumVal = function (a, b) { return a + b; };
console.log("sumVal---->" + sumVal(10, 50));
// document.addEventListener("click",function(){
//          console.log("clicked")
// });
// //related arrow function
// document.addEventListener("click",()=>console.log("clicked"));
//"this" in arrow function 
var obj1 = {
    firstName: "Harish",
    lastName: "viru",
    fullName: function () {
        setTimeout(function () { return this.firstName + this.lastName; }, 1000);
    }
};
console.log("normal function--->" + obj1.fullName());
obj1.fullName = function () {
    var _this = this;
    setTimeout(function () { console.log(_this.firstName + _this.lastName); }, 100);
};
console.log(obj1.firstName);
console.log(obj1.lastName);
console.log(obj1.fullName());
console.log("*******************arrays ,Tuple ,Object **************************");
console.log("------------------------Rest operator---------------------");
//#Rest operator (syntax : ...variableName (in function arguments))
//Rest operator we place in function parameter by using ...(three dots)[...days]
var displayDays = function (message) {
    var days = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        days[_i - 1] = arguments[_i];
    }
    console.log(message);
    //console.log(arguments.length)
    for (var _a = 0, days_1 = days; _a < days_1.length; _a++) {
        var day_1 = days_1[_a];
        console.log(day_1);
    }
};
var message = "Working days.......!";
displayDays(message, "monday", "tueday", "wednesday", "Thursday", "friday");
message = "Weekdays..............!";
displayDays(message, "staurday", "sunday");
//#.Spread operator  
//Spread operator we place in function call by using ...(three dots)[...days]
console.log("------------------Spread operator --------------------");
message = "Holidays.......!";
var holidays = ["sankrithi", "vinayakachavithi"];
displayDays.apply(void 0, __spreadArrays([message], holidays));
message = "special holidays..............!";
holidays = ["ramzan", "chrismas"];
displayDays.apply(void 0, __spreadArrays([message], holidays));
//Destructuring Array
console.log("-----------Destructuring Array--------------------------");
var itEmp = ["Rajenderc", "cheerala", "Male", "juniorEngg"];
var efName = itEmp[0], elName = itEmp[1], gender = itEmp[2], position = itEmp[3];
console.log(efName);
console.log(elName);
console.log(gender);
console.log(position);
console.log();
//we can set default val 
itEmp = ["Rajenderc", "cheerala", "Male"];
var ef = itEmp[0], el = itEmp[1], gen = itEmp[2], _a = itEmp[3], pos = _a === void 0 ? "seniorEng" : _a; //we can set default val 
console.log(ef);
console.log(el);
console.log(gen);
console.log(pos);
console.log();
//we can leave empty if values  are not required to store 
var lead = ["balaram", "cheerayala", "Male"];
var gend = lead[2];
console.log(gend);
//we can use rest operator
var contact = ["ranjitha", "sahu", "Female", "juniorEngg"];
var cnFname = contact[0], contactElements = contact.slice(1); //A rest element must be last in a destructuring pattern.
console.log(cnFname);
console.log(contactElements);
//In function arguments destructing
function desFun(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
console.log(desFun([1, 2]));
console.log("----------Tuple destructuring -------------------");
//Tuple destructuring 
//Tuples may be destructured like arrays; the destructuring variables get the types of the corresponding tuple elements:
var tuple = [7, "hello", true];
var l = tuple[0], m = tuple[1], s = tuple[2]; // l: number, m: string, s: boolean
console.log(l);
console.log(m);
console.log(s);
//let [l,m,s,o] = tuple; // Error, no element at index 3
//console.log(o);
// we can rest operator in tuple
var restTuple; //declaration
restTuple = [100, "H", "O", "T"]; //intialization
var numb = restTuple[0], restTple = restTuple.slice(2); //we can leave empty ,
console.log(numb);
console.log(restTple);
//we cannot set default value to Tuple
var tupleDefVal = [1, 0];
var n1 = tupleDefVal[0], _b = tupleDefVal[1], n2 = _b === void 0 ? "100" : _b;
console.log(n1);
console.log(n2);
console.log("-------------- Object destructuring ---------------------------");
var ob = {
    w: "foo",
    q: 12,
    r: "bar"
};
var w = ob.w, q = ob.q; //we can leave empty that is not required
console.log(ob.w);
console.log(ob.q);
console.log(ob.r);
var customer = {
    custfName: "Robert",
    custlName: "Hoke",
    custage: "46"
};
var custfName = customer.custfName, custlName = customer.custlName, custage = customer.custage; //object names must have to match
console.log(custfName);
console.log(custlName);
console.log(custage);
//Here we can assign to new variable or alias
var fName = customer.custfName, lName = customer.custlName, cage = customer.custage;
console.log(fName);
console.log(lName);
console.log(cage);
var empObj = {
    empage: "46",
    empfName: "John",
    emplName: "Cena"
};
// we can use rest operator ..here
var empage = empObj.empage, empfullName = __rest(empObj, ["empage"]);
console.log(empage);
console.log(empfullName);
console.log(empfullName.empfName);
