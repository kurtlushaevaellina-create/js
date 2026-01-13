"use strict";

function addToBody(el) {
    if (document.body) {
        document.body.appendChild(el);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(el);
        });
    }
}

(function(btnId, inputClass) {
    const button = document.querySelector(btnId);
    const inputs = document.querySelectorAll(inputClass);
    
    if (button && inputs.length > 0) {
        button.addEventListener('click', () => {
            let total = 0;
            for (let input of inputs) {
                total += Number(input.value) || 0;
            }
            console.log(total);
        });
    }
})('#calcBtn', '.numberInput');

const demoArea = document.createElement('div');
demoArea.innerHTML = `
    <input type="number" class="numberInput" placeholder="Первое число">
    <input type="number" class="numberInput" placeholder="Второе число">
    <input type="number" class="numberInput" placeholder="Третье число">
    <button id="calcBtn">Подсчитать сумму</button>
`;
addToBody(demoArea);

(function() {
    const moduleStr1 = "первая строка модуля";
    const moduleStr2 = "вторая строка модуля";
    const moduleStr3 = "третья строка модуля";
    
    function firstFunc() {
        console.log("первая функция");
    }
    
    function secondFunc() {
        console.log("вторая функция");
    }
    
    function thirdFunc() {
        console.log("третья функция");
    }
    
    window.publicStr = moduleStr1;
    window.publicFuncA = firstFunc;
    window.publicFuncB = secondFunc;
})();

if (typeof publicFuncA === 'function') {
    publicFuncA();
}
if (typeof publicFuncB === 'function') {
    publicFuncB();
}

(function() {
    const textA = 'переменная A';
    const textB = 'переменная B';
    const textC = 'переменная C';
    
    function funcA() {
        console.log('функция A');
    }
    
    function funcB() {
        console.log('функция B');
    }
    
    function funcC() {
        console.log('функция C');
    }
    
    function funcD() {
        console.log('функция D');
    }
    
    function funcE() {
        console.log('функция E');
    }
    
    window.moduleObj = {
        textA,
        textB,
        funcA,
        funcB,
        funcC,
        funcD,
        funcE
    };
})();

if (window.moduleObj) {
    console.log(moduleObj.textA);
    moduleObj.funcA();
    moduleObj.funcB();
}

(function() {
    function calculate(arr, power) {
        let result = 0;
        for (let num of arr) {
            result += Math.pow(num, power);
        }
        return result;
    }
    
    function average1(nums) {
        return calculate(nums, 1) / nums.length;
    }
    
    function average2(nums) {
        return calculate(nums, 2) / nums.length;
    }
    
    function average3(nums) {
        return calculate(nums, 3) / nums.length;
    }
    
    window.mathUtils = {
        average1,
        average2,
        average3
    };
})();

if (window.mathUtils) {
    const sample = [1, 2, 3, 4, 5];
    console.log(mathUtils.average1(sample));
    console.log(mathUtils.average2(sample));
    console.log(mathUtils.average3(sample));
}

(function() {
    const utils = {};
    
    utils.forEach = function(collection, callback) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection);
            }
        } else if (typeof collection === 'object') {
            for (let key in collection) {
                if (collection.hasOwnProperty(key)) {
                    callback(collection[key], key, collection);
                }
            }
        }
    };
    
    utils.map = function(collection, callback) {
        const output = [];
        utils.forEach(collection, function(value, key, coll) {
            output.push(callback(value, key, coll));
        });
        return output;
    };
    
    utils.filter = function(collection, condition) {
        const output = [];
        utils.forEach(collection, function(value, key, coll) {
            if (condition(value, key, coll)) {
                output.push(value);
            }
        });
        return output;
    };
    
    utils.find = function(collection, condition) {
        let found;
        utils.forEach(collection, function(value, key, coll) {
            if (condition(value, key, coll) && found === undefined) {
                found = value;
            }
        });
        return found;
    };
    
    utils.reduce = function(collection, callback, initial) {
        let result = initial;
        utils.forEach(collection, function(value, key, coll) {
            result = callback(result, value, key, coll);
        });
        return result;
    };
    
    utils.includes = function(collection, target) {
        return utils.reduce(collection, function(acc, value) {
            return acc || value === target;
        }, false);
    };
    
    utils.extract = function(collection, property) {
        return utils.map(collection, function(item) {
            return item[property];
        });
    };
    
    utils.exclude = function(array, ...values) {
        return utils.filter(array, function(item) {
            return !utils.includes(values, item);
        });
    };
    
    utils.sequence = function(start, end, step = 1) {
        const output = [];
        if (end === undefined) {
            end = start;
            start = 0;
        }
        for (let i = start; i < end; i += step) {
            output.push(i);
        }
        return output;
    };
    
    window.util = utils;
})();

if (window.util) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const people = [
        {name: 'Анна', age: 25},
        {name: 'Борис', age: 30},
        {name: 'Виктор', age: 35}
    ];
    
    console.log(util.map(numbers, n => n * 2));
    console.log(util.filter(numbers, n => n % 2 === 0));
    console.log(util.find(numbers, n => n > 5));
    console.log(util.reduce(numbers, (sum, n) => sum + n, 0));
    console.log(util.includes(numbers, 5));
    console.log(util.exclude(numbers, 3, 5, 7));
    console.log(util.sequence(10));
    console.log(util.extract(people, 'name'));
}