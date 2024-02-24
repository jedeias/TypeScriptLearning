// while stope when the conditional change;

let reference: boolean = true; 

console.log(" ===== while and for loop ===== ");

while (reference){

    // For stop when i < 5;
    for (let i=0; i < 5; i++){
        console.log(i);

        if (i == 4){
            reference = false;
            console.log('while BREAK');
        }
    }

}

console.log(" ===== forEach ===== ");

let array: Array<string> = ["name", "description", "type"];

array.forEach(element => {

    console.log(element);

});

console.log(" ===== for... of ===== ");

let numberArray: Array<number> = [1, 2, 3, 4, 5, 6];

for (let item of numberArray){
    console.log('item >_: ' + item);
}