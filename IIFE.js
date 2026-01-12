"use strict";

(function() {
    const message = '!';
    console.log(message);
})();

let funcResult = (function() {
    return '!';
})();
console.log(funcResult);

(function(num1, num2) {
    console.log("Результат сложения:", num1 + num2);
})(5, 3);

let additionResult = 10 + (function() { return 5; })();
console.log("Результат выражения:", additionResult);

let nestedFuncResult = (function(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
})(1)(2)(3);
console.log("Сумма трех значений:", nestedFuncResult);

let incrementor = (function() {
    let currentValue = 1;
    return function() {
        console.log(currentValue);
        currentValue++;
    };
})();

incrementor();
incrementor();
incrementor();

let limitedIncrementor = (function() {
    let currentValue = 1;
    return function() {
        if (currentValue <= 5) {
            console.log(currentValue);
            currentValue++;
        } else {
            currentValue = 1;
            console.log(currentValue);
            currentValue++;
        }
    };
})();

for (let i = 0; i < 8; i++) {
    limitedIncrementor();
}