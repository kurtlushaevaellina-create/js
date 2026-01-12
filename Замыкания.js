function counter() {
    let count = 1; // начальное значение

    return function() {
        console.log(count);
        count++;
    };
}

let func = counter();
func(); 
func(); 
func(); 
function countdown() {
    let num = 10;

    return function() {
        console.log(num);
        num--; 
    };
}

let myCounter = countdown();
myCounter(); 
myCounter(); 
myCounter(); 
