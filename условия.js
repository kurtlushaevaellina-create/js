let test = 15; 
if (test > 10) {
    console.log(' test больше 10');
} else {
    console.log('test не больше 10');
}

if (test < 10) {
    console.log(' test меньше 10');
} else {
    console.log(' test не меньше 10');
}

if (test >= 10) {
    console.log('test больше или равен 10');
} else {
    console.log(' test меньше 10');
}

if (test <= 10) {
    console.log(' test меньше или равен 10');
} else {
    console.log('test больше 10');
}

if (test == 10) {
    console.log('test равна 10'); 
} else {
    console.log('test не равна 10');
}

if (test != 10) {
    console.log('test не равна 10'); 
} else {
    console.log('test равна 10');
}
let test1 = 7;
let test2 = 10;

if (test1 > test2) {
    console.log('test1 больше test2');
} else if (test2 > test1) {
    console.log('test2 больше test1');
} else {
    console.log('test1 и test2 равны'); 
}

if (test1 == test2) {
    console.log('test1 и test2 равны');
} else {
    console.log('test1 и test2 не равны');
}
let test3 = 'hello';
let test4 = 'world';

if (test3 == test4) {
    console.log('test3 и test4 равны');
} else {
    console.log('test3 и test4 не равны');
}

let test5 = '123';

let test6 = 123;


if (test5 == test6) {
    console.log('test5 и test6 равны'); 
} else {
    console.log('test5 и test6 не равны');
}
let num = 3;
let num1 = 1;
let num2 = 4;

if (num > 0 && num < 5) {
    console.log('№1: num больше 0 и меньше 5');
} else {
    console.log('№1: условие не выполнено');
}

if (num >= 10 && num <= 20) {
    console.log('№2: num >= 10 и <= 20');
} else {
    console.log('№2: условие не выполнено');
}

if (num1 <= 1 && num2 >= 3) {
    console.log('№3: num1 <= 1 и num2 >= 3');
} else {
    console.log('№3: условие не выполнено');
}

if (!(num1 >= 0 || num2 <= 10)) {
    console.log('+++');
} else {
    console.log('---');
}
let test11 = true;

if (test11 === true) {
    console.log('№1: test11 равна true');
} else {
    console.log('№1: test11 не равна true');
}

if (test11 === false) {
    console.log('№2: test11 равна false');
} else {
    console.log('№2: test11 не равна false');
}

if (test11) {
    console.log('+++');
} else {
    console.log('---');
}
if (test == 10) {
    console.log('yes');
}

if (test > 0) console.log('+++'); else console.log('---');
if (test > 0) console.log('+++');

let day = 35; 

if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
} else {
    console.log('Ошибка: неверное значение переменной day');
}

if (num >= 10 && num <= 99) {
    let tens = Math.floor(num / 10);
    let units = num % 10;          
    let sum = tens + units;

    if (sum <= 9) {
        console.log('Сумма цифр однозначна');
    } else {
        console.log('Сумма цифр двухзначна');
    }
} else {
    console.log('Число не попадает в диапазон от 10 до 99');
}


let lang = 'ru';

switch (lang) {
    case 'ru':
        console.log('rus');
        break;
    case 'en':
        console.log('eng');
        break;
    case 'de':
        console.log('deu');
        break;
    default:
        console.log('language not supported');
        break;
}

let res = (num >= 0) ? '1' : '2';

console.log(res);

let a = 2 * (3 - 1); 
let b = 6 - 2;       
let result = (a == b);
console.log(result);

let a1 = 5 * (7 - 4); 
let b1 = 1 + 2 + 7;   
let result1 = (a1 > b1);
console.log(result1); 

let a2 = 2 ** 4; 
let b2 = 4 ** 2; 

let result2 = (a2 != b2);
console.log(result2); 


let isAdult = confirm('Вам уже есть 18 лет?');

if (isAdult) {
    console.log('Добро пожаловать!');
} else {
    console.log('Доступ запрещен.');
}


let min = 37;

if (min >= 0 && min <= 19) {
    console.log('1 треть часа');
} else if (min >= 20 && min <= 39) {
    console.log('2 треть часа');
} else if (min >= 40 && min <= 59) {
    console.log('3 треть часа');
} else {
    console.log('Ошибка: неверное количество минут');
}


let str1 = 'apple';

if (str1[0] == 'a') {
    console.log('№1: строка начинается на "a"');
}

let str2 = 'hellox';

if (str2[str2.length - 1] == 'x') {
    console.log('№2: строка заканчивается на "x"');
}

let str3 = 'banana';

if (str3[0] == 'a' || str3[0] == 'b') {
    console.log('№3: строка начинается на "a" или "b"');
}

let rest = num % 2;

if (rest === 0) {
    console.log(num + ' — чётное число');
} else {
    console.log(num + ' — нечётное число');
}

let rest1 = num % 3;

if (rest1 === 0) {
    console.log(num + ' делится на 3 нацело');
} else {
    console.log(num + ' не делится на 3 нацело, остаток: ' + rest1);
}


let num11 = '1';
let num22 = '2';

if (Number(num11) + Number(num22) === 3) {
    console.log('+++'); 
} else {
    console.log('---');
}

let num10 = '1';
let num20 = '2';

if (Number(num10) + Number(num20) === 3) {
    console.log('+++'); 
} else {
    console.log('---');
}


let number = 123;

if (String(number)[0] === '1') {
    console.log('+++'); 
} else {
    console.log('---');
}

let number2 = 12;

if (String(number2).length === 2) {
    console.log('+++'); 
} else {
    console.log('---');
}

let number3 = 12;

if (String(number3).length === 2) {
    console.log('+++'); 
} else {
    console.log('---');
}


let number4 = 12;

if (String(number4).length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

let a11 = 1;
let b22 = 2;

if (a11 + b22 === 3) {
    console.log('+++'); 
} else {
    console.log('---');
}


let c = '1';
let d = '2';

if (Number(c) + Number(d) === 3) {
    console.log('+++'); 
} else {
    console.log('---');
}


let e = '1';
let f = '2';

if (Number(e) + Number(f) === 3) {
    console.log('+++'); 
} else {
    console.log('---');
}


let g = 123;

if (String(g)[0] === '1') {
    console.log('+++'); 
} else {
    console.log('---');
}


let h = 456;
let i = String(h)[0];

if (i === '4') {
    console.log('+++'); 
} else {
    console.log('---');
}


let j = 78;

if (String(j).length === 2) {
    console.log('+++'); 
} else {
    console.log('---');
}


let k = 21;
let l = k % 3;

if (l === 0) {
    console.log(k + ' делится на 3 нацело');
} else {
    console.log(k + ' не делится на 3 нацело, остаток: ' + l);
}


let m = '123033'; 
let n = Number(m[0]) + Number(m[1]) + Number(m[2]);
let o = Number(m[3]) + Number(m[4]) + Number(m[5]);

if (n === o) {
    console.log('суммы равны'); 
} else {
    console.log('суммы не равны');
}
