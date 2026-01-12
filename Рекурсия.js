let arr = [1, 2, 3, 4, 5];

function printArrayRecursively(array) {
    console.log(array.shift());
    if (array.length !== 0) {  
        printArrayRecursively(array); 
    }
}

printArrayRecursively(arr);
let numbers = [1, 2, 3, 4, 5];

function sumOfSquares(array) {
    let num = array.shift();
    let square = num ** 2;

    if (array.length !== 0) {
        square += sumOfSquares(array);
    }

    return square;
}

console.log(sumOfSquares(numbers));
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function printPrimitives(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            printPrimitives(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

printPrimitives(obj);

let arr1 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function flattenArray(arr1) {
    let result = [];

    for (let elem of arr1) {
        if (Array.isArray(elem)) {
            result = result.concat(flattenArray(elem));
        } else {
            result.push(elem);
        }
    }

    return result;
}

let flat = flattenArray(arr1);
console.log(flat);
let obj1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function sumObject(obj1) {
    let sum = 0;

    for (let key in obj1) {
        if (typeof obj1[key] === 'object') {
            sum += sumObject(obj1[key]);
        } else {
            sum += obj1[key];
        }
    }

    return sum;
}

console.log(sumObject(obj1));
let arr2 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function joinArray(arr2) {
    let result = '';

    for (let elem of arr2) {
        if (Array.isArray(elem)) {
            result += joinArray(elem);
        } else {
            result += elem; 
        }
    }

    return result;
}

console.log(joinArray(arr2));
let arr3 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function squareElements(arr3) {
    for (let i = 0; i < arr3.length; i++) {
        if (Array.isArray(arr3[i])) {
            arr3[i] = squareElements(arr3[i]); 
        } else if (typeof arr3[i] === 'number') {
            arr3[i] = arr3[i] ** 2; 
        }
    }
    return arr3;
}

console.log(squareElements(arr3));

