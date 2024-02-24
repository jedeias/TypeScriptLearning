// while stope when the conditional change;
var reference = true;
console.log(" ===== while and for loop ===== ");
while (reference) {
    // For stop when i < 5;
    for (var i = 0; i < 5; i++) {
        console.log(i);
        if (i == 4) {
            reference = false;
            console.log('while BREAK');
        }
    }
}
console.log(" ===== forEach ===== ");
var array = ["name", "description", "type"];
array.forEach(function (element) {
    console.log(element);
});
console.log(" ===== for... of ===== ");
var numberArray = [1, 2, 3, 4, 5, 6];
for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
    var item = numberArray_1[_i];
    console.log('item >_: ' + item);
}
