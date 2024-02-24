// declaration → var name → : -> var type and = atributes

// sting
let text:string  = "texte";

console.log('let text', text);

// number, 
let value:number  = 23;

console.log('value is ', value);

//enum, 
enum computers { "Linux", "Mac", "Windows"};

//boolean, 
let isReal = true;
let isFalse = false;

//any, 
let any: any;
any = null;
any = Array(1, 2, 3, 4);
any = "text";
any = 1;
any = 1.5;

//array, 

let arrayNumber: Array<number>;

arrayNumber =[1, 2, 3, 4];

let arrayString: Array<string>;

arrayString =['type', 'text', 'menu'];

//tuple

let tuple : [number, number, string, string];

tuple = [1, 2, "string", "number"];
