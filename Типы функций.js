console.log("=== Задача 1 ===");
function func() {
    return '!';
}

console.log(func());
console.log(func);

console.log("\n=== Задача 2 ===");
function func() {
    return 'какая-то строка';
}

console.log(func());
console.log(func);

func = 123;
console.log(func);

console.log("\n=== Задача 3 ===");
function getThree() {
    return 3;
}

let copyFunc = getThree;
console.log(getThree() + copyFunc());

console.log("\n=== Задача 4 ===");
let func1 = function() {
    return 1;
};

let func2 = function() {
    return 2;
};

console.log(func1() + func2());

console.log("\n=== Задача 5 ===");
testFunc();

function testFunc() {
    console.log('Function Declaration работает!');
}

try {
    testFunc2();
} catch (error) {
    console.log('Ошибка: ' + error.message);
}

let testFunc2 = function() {
    console.log('Function Expression работает!');
};

testFunc2();

console.log("\n=== Задача: Точка с запятой при объявлении функций ===");

let showMessage1 = function() {
    console.log('Сообщение 1!');
};

let showMessage2 = function() {
    console.log('Сообщение 2!');
};

function showMessage3() {
    console.log('Сообщение 3!');
}

showMessage1();
showMessage2();
showMessage3();

console.log("\n=== Задача: Нюансы функциональных выражений ===");

console.log("№1 - Function Declaration:");
function greetUser() {
    console.log('Привет!');
}

console.log("№2 - Function Expression:");
let showAlert = function() {
    console.log('Внимание!');
};

console.log("№3 - Function Expression (с +):");
+function() {
    console.log('Функция с плюсом!');
};

console.log("№4 - Function Expression (с !):");
!function displayWarning() {
    console.log('Предупреждение!');
};

console.log("№5 - Function Expression (с -):");
-function showError() {
    console.log('Ошибка!');
};

console.log("№6 - Function Expression (сложение с 1):");
1 + function calculate() {
    console.log('Вычисление!');
};

console.log("№7 - Function Expression (в круглых скобках):");
(function processData() {
    console.log('Обработка данных!');
});

console.log("№8 - Function Expression (аргумент console.log):");
console.log(
    function() {
        console.log('Функция как аргумент!');
        return 'Возвращаемое значение';
    }
);

greetUser();
showAlert();

console.log("\n=== Задача: Проверка типа функции ===");

console.log("№1 - Проверяем функцию let test = function func() {...}");
try {
    checkTest();
    console.log("№1 - Function Declaration");
} catch (error) {
    console.log("№1 - Function Expression (ошибка при вызове выше объявления)");
}

let checkTest = function myFunc() {
    console.log('Функция №1 работает!');
};

console.log("\n№2 - Проверяем console.log(function func() {...})");
try {
    checkArgFunc();
    console.log("№2 - Function Declaration");
} catch (error) {
    console.log("№2 - Function Expression (ошибка при вызове выше объявления)");
}

console.log(
    function argFunc() {
        console.log('Функция №2 работает!');
        return 'Значение функции №2';
    }
);

console.log("\n№3 - Проверяем +function func() {...}");
try {
    plusFunc();
    console.log("№3 - Function Declaration");
} catch (error) {
    console.log("№3 - Function Expression (ошибка при вызове выше объявления)");
}

+function plusFunc() {
    console.log('Функция №3 работает!');
};

console.log("\n№4 - Проверяем function func() {...}");
try {
    normalFunc();
    console.log("№4 - Function Declaration (вызов выше объявления работает!)");
} catch (error) {
    console.log("№4 - Function Expression (была ошибка)");
}

function normalFunc() {
    console.log('Функция №4 работает!');
}

console.log("\n--- Проверка после объявления ---");
checkTest();
normalFunc();

console.log("\n=== Задача: Выражение справа функции ===");

console.log("=== ПРОВЕРКА №1 ===");
console.log("№1 - Function Declaration");
function func11() {
    console.log('Функция 1 работает!');
}
+1;

console.log("\n=== ПРОВЕРКА №2 ===");
console.log("№2 - Function Declaration");
function func22() {
    console.log('Функция 2 работает!');
} + 1;

console.log("\n=== ПРОВЕРКА №3 ===");
console.log("№3 - Function Expression");
+function func3() {
    console.log('Функция 3 работает!');
} + 1;

console.log("\n=== ПРОВЕРКА №4 ===");
console.log("№4 - Function Expression");
+
function func4() {
    console.log('Функция 4 работает!');
} + 1;

console.log("\n=== ПРОВЕРКА №5 ===");
console.log("№5 - Function Declaration");
+ 1
function func5() {
    console.log('Функция 5 работает!');
} + 1;

console.log("\n=== ПРОВЕРКА №6 ===");
console.log("№6 - Function Declaration");
function func6() {
    console.log('Функция 6 работает!');
} + console.log('Восклицательный знак справа!');

console.log("\n--- Проверка работы функций после объявления ---");
func11();
func22();
func5();
func6();

console.log("\n=== Задача: Массив с анонимными функциями ===");

let arr = [
    function() { return 1; },
    function() { return 2; },
    function() { return 3; }
];

console.log("Число 3 из массива функций:", arr[2]());

let sum = arr[0]() + arr[1]() + arr[2]();
console.log("Сумма результатов функций:", sum);

console.log("\nРезультаты всех функций через цикл:");
for (let func of arr) {
    console.log(func());
}

console.log("\n=== Задача: Объект с анонимными функциями ===");

let obj = {
    getOne: function() { return 1; },
    getTwo: function() { return 2; },
    getThree: function() { return 3; }
};

let summm = obj.getOne() + obj.getTwo() + obj.getThree();
console.log("Сумма чисел из объекта:", summm);

console.log("\nРезультаты функций объекта через цикл:");
for (let key in obj) {
    if (typeof obj[key] === 'function') {
        console.log(`${key}:`, obj[key]());
    }
}

console.log("\nТоже самое через Object.keys:");
Object.keys(obj).forEach(function(key) {
    console.log(`${key}:`, obj[key]());
});

console.log("\n=== Задача: Применение объекта с функциями ===");

let mathOperations = {
    sumArray: function(arr) {
        let total = 0;
        for (let num of arr) {
            total += num;
        }
        return total;
    },
    
    sumSquares: function(arr) {
        let total = 0;
        for (let num of arr) {
            total += num * num;
        }
        return total;
    },
    
    sumCubes: function(arr) {
        let total = 0;
        for (let num of arr) {
            total += num * num * num;
        }
        return total;
    }
};

let numbers = [1, 2, 3, 4];
console.log("Массив для проверки:", numbers);
console.log("Сумма элементов:", mathOperations.sumArray(numbers));
console.log("Сумма квадратов:", mathOperations.sumSquares(numbers));
console.log("Сумма кубов:", mathOperations.sumCubes(numbers));

let testArray = [2, 3];
console.log("\nДругой массив:", testArray);
console.log("Сумма:", mathOperations.sumArray(testArray));
console.log("Сумма квадратов:", mathOperations.sumSquares(testArray));
console.log("Сумма кубов:", mathOperations.sumCubes(testArray));