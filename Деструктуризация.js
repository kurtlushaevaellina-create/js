// Деструктуризация массивов в JavaScript - Задание №1
let arr1 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name1, surname1, department1, position1, salary1] = arr1;

// Деструктуризация массива из функции в JavaScript - Задание №1
function func1() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name2, surname2, department2, position2, salary2] = func1();

// Пропуск элементов массива при деструктуризации в JavaScript - Задание №1
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [, , department3, position3] = arr2;

// Остаток массива при деструктуризации в JavaScript - Задание №1
let arr3 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name3, surname3, ...info1] = arr3;

// Значения по умолчанию при деструктуризации массива в JavaScript - Задание №1
let arr4 = ['John', 'Smit', 'development', 'programmer'];
let [name4, surname4, department4, position4 = 'trainee'] = arr4;

// Функции по умолчанию при деструктуризации массива в JavaScript - Задание №1
function getDay() {
    return (new Date).getDate();
}
function getMonth() {
    return (new Date).getMonth() + 1;
}
function getYear() {
    return (new Date).getFullYear();
}
let arr5 = ['John', 'Smit', 'development', 'programmer'];
let [name5, surname5, department5, position5 = 'trainee', year1 = getYear(), month1 = getMonth(), day1 = getDay()] = arr5;

// Деструктуризация объектов в JavaScript - Задание №1
let options1 = {
    color: 'red',
    width:  400,
    height: 500,
};
let {color1, width1, height1} = options1;

// Имена переменных при деструктуризации объектов в JavaScript - Задание №1
let options2 = {
    color: 'red',
    width:  400,
    height: 500,
};
let {color: c1, width: w1, height: h1} = options2;

// Значения по умолчанию при деструктуризации объектов в JavaScript - Задание №1
let options3 = {
    width:  400,
    height: 500,
};
let {color2 = 'black', width2, height2} = options3;

// Переменные и значения по умолчанию в JavaScript - Задание №1
let options4 = {
    width:  400,
    height: 500,
};
let {color: c2 = 'black', width: w2, height: h2} = options4;

// Деструктуризация параметров функций в JavaScript - Задание №1
function func2([name6, surname6, department6, position6, salary3]) {
}
func2( ['John', 'Smit', 'development', 'programmer', 2000] );

// Деструктуризация параметров функций в JavaScript - Задание №2
function func3([name7, surname7, ...info2]) {
}
func3( ['John', 'Smit', 'development', 'programmer', 2000] );

// Деструктуризация параметров функций в JavaScript - Задание №3
function func4([name8, surname8, department7, position7 = 'junior']) {
}
func4( ['John', 'Smit', 'development'] );

// Деструктуризация параметров функций в JavaScript - Задание №4
function func5(department8, [name9, surname9], [year2, month2, day2]) {
}
func5( 'development', ['John', 'Smit'], [2018, 12, 31] );

// Деструктуризация объектов параметров функций в JavaScript - Задание №1
function func6({color3, width3, height3}) {
}
func6( {color: 'red', width: 400, height: 500} );

// Деструктуризация объектов параметров функций в JavaScript - Задание №2
function func7({width4, height4, color4 = 'black'}) {
}
func7( {color: 'red', width: 400, height: 500} );