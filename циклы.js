let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    console.log(elem);
}
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    console.log(key);
}
for (let key in obj) {
    console.log(obj[key]);
}
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

i = 11;
while (i <= 33) {
    console.log(i);
    i++;
}

i = 100;
while (i >= 1) {
    console.log(i);
    i--;
}

let num = 5;
let count = 0;
while (num <= 1000) {
    num *= 3;
    count++;
    console.log("После умножения:", num);
}
console.log("Итоговое число:", num);
console.log("Количество итераций:", count);

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr2.length - 1; i++) {
    console.log(arr2[i]);
}

let arr3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}

let arr4 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

let arr7= [2, 5, 9, 15, 1, 4];
for (let elem of arr7) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}

let obj13 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj13) {
    if (obj13[key] % 2 !== 0) {
        console.log(obj13[key]);
    }
}

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 += i;
}
console.log(sum1);

let sumEven = 0;
for (let i = 2; i <= 100; i += 2) {
    sumEven += i;
}
console.log(sumEven);

let sumOdd = 0;
for (let i = 1; i < 100; i += 2) {
    sumOdd += i;
}
console.log(sumOdd);

let pro = 1;
for (let i = 1; i <= 20; i++) {
    pro *= i;
}
console.log(pro);

let a = [1, 2, 3, 4, 5];
let s1 = 0;
for (let n of a) {
    s1 += n;
}
console.log(s1);

let b = [2, 5, 9, 3, 1, 4];
let s2 = 0;
for (let x of b) {
    s2 += x;
}
console.log(s2);

let se = 0;
for (let x of b) {
    if (x % 2 === 0) {
        se += x;
    }
}
console.log(se);

let sq = 0;
for (let x of b) {
    sq += x * x;
}
console.log(sq);

let p = 1;
for (let x of b) {
    p *= x;
}
console.log(p);


let str1 = '';
for (let i = 0; i < 5; i++) {
    str1 += '-';
}
console.log(str1);

let str2 = '';
for (let i = 1; i <= 9; i++) {
    str2 += i;
}
console.log(str2);

let str3 = '';
for (let i = 9; i >= 1; i--) {
    str3 += i;
}
console.log(str3);

let str4 = '';
for (let i = 1; i <= 9; i++) {
    str4 += '-' + i;
}
str4 += '-';
console.log(str4);

for (let num = 10; num <= 1000; num++) {
    let strNum = String(num);
    console.log(strNum[0]);
}

for (let val = 10; val <= 1000; val++) {
    let s = String(val);
    let sumDigits = Number(s[0]) + Number(s[1]);
    console.log(sumDigits);
}

for (let n = 10; n <= 1000; n++) {
    let strN = String(n);
    if (strN[0] === '1') {
        console.log(n);
    }
}

for (let x = 10; x <= 1000; x++) {
    let strX = String(x);
    if (Number(strX[0]) + Number(strX[1]) === 5) {
        console.log(x);
    }
}
let alpha = [5, 8, 4, 0, 7, 2];
for (let beta of alpha) {
    if (beta === 0) {
        break;
    }
    console.log(beta);
}

let gamma = [3, 6, 9, -2, 4];
let delta = 0;
for (let omega of gamma) {
    if (omega < 0) {
        break;
    }
    delta += omega;
}
console.log(delta);

let phi = [6, 4, 3, 8, 1];
let sigma = 0;
for (let k = 0; k < phi.length; k++) {
    if (phi[k] === 3) {
        sigma = k;
        break;
    }
}
console.log(sigma);

let totalSum = 0;
let countNums = 0;
let start = 1;

while (true) {
    totalSum += start;
    countNums++;
    if (totalSum > 100) {
        break;
    }
    start++;
}

console.log(countNums);
for (let q = 1; q <= 100; q++) {
    if (q % 2 !== 0) {
        continue;
    }
    console.log(q);
}
let m1 = [1, 2, 3, 4, 5];
for (let i = 0; i < m1.length; i++) {
    m1[i] = m1[i] * m1[i];
}
console.log(m1);

let m2 = [1, 2, 3, 4, 5];
for (let i = 0; i < m2.length; i++) {
    m2[i] = m2[i] - 1;
}
console.log(m2);

let m3 = [1, 2, 3, 4, 5];
for (let i = 0; i < m3.length; i++) {
    m3[i] = m3[i] + 10;
}
console.log(m3);

let d = ['a', 'b', 'c', 'd', 'e'];
let n = [1, 2, 3, 4, 5];
let o1 = {};

for (let i = 0; i < d.length; i++) {
    o1[d[i]] = n[i];
}
console.log(o1);

let o2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let o3 = {};

for (let k in o2) {
    if (o2[k] % 2 === 0) {
        o3[k] = o2[k];
    }
}
console.log(o3);

let o4 = {};
for (let k in o2) {
    o4[o2[k]] = k;
}
console.log(o4);
let vault = {a: 10, b: 20, c: 30, d: 40, e: 50};
let totalizer = 0;

for (let marker in vault) {
    if (vault[marker] === 10 || vault[marker] === 20) {
        totalizer += vault[marker];
    }
}

console.log(totalizer);
for (let countUp = 0; countUp <= 10; countUp++) {
	console.log(countUp);
}

for (let countDown = 10; countDown >= 0; countDown--) {
	console.log(countDown);
}

let walkers = 0;
while (walkers <= 10) {
	console.log(walkers);
	walkers++;
}

let totalSumm = 0;
for (let addNum = 1; addNum <= 10; addNum++) {
	totalSumm += addNum;
}
console.log(totalSumm);

let totalMul = 1;
for (let mulNum = 1; mulNum <= 10; mulNum++) {
	totalMul *= mulNum;
}
console.log(totalMul);

let stringNums = ['1', '2', '3', '4', '5'];
let arraySum = 0;
for (let unit of stringNums) {
	arraySum += +unit;
}
console.log(arraySum);

let squareList = [1, 2, 3, 4, 5];
for (let idx = 0; idx < squareList.length; idx++) {
	squareList[idx] = squareList[idx] ** 2;
}
console.log(squareList);

let filled = [];
for (let filler = 1; filler <= 5; filler++) {
	filled.push(filler);
}
console.log(filled);

let dataBox = {a: 1, b: 2, c: 3};
let boxSum = 0;
for (let mark in dataBox) {
	boxSum += dataBox[mark];
}
console.log(boxSum);

let checkNums = [1, 2, 3, 4, 5];
let found = false;
for (let piece of checkNums) {
	if (piece === 3) {
		found = true;
		break;
	}
}
console.log(found);

let evenCheck = [1, 2, 3, 4, 5];
for (let part of evenCheck) {
	if (part % 2 === 0) {
		console.log(part);
	}
}

let oddSource = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddResult = [];
for (let val of oddSource) {
	if (val % 2 !== 0) {
		oddResult.push(val);
	}
}
console.log(oddResult);

