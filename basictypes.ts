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
 *                   void,never..etc
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
//#01.boolean
let booleanImplict=false;//implict type
var isBegginner:boolean=true;
console.log(booleanImplict);
console.log(isBegginner);

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
















