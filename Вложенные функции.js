test(
	function() { return 1; },
	function() { return 2; },
	function() { return 3; }
);

function test(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}
function test1(a, b, c) {
	return a() + b() + c();
}

function first() {
	return 1;
}
function second() {
	return 2;
}
function third() {
	return 3;
}

console.log(test1(first, second, third));

let one = function() {
	return 1;
};
let two = function() {
	return 2;
};
let three = function() {
	return 3;
};

console.log(test1(one, two, three));
function calc(number, action1, action2) {
	return action1(number) + action2(number);
}

let answer = calc(
	3,
	function(digit) {
		return digit * digit;          
	},
	function(digit) {
		return digit * digit * digit;
	}
);

console.log(answer);

function transform(data, processor) {
	for (let position = 0; position < data.length; position++) {
		data[position] = processor(data[position]);
	}
	return data;
}

let outcome = transform([1, 3, 5], function(element) {
	return element * element * element;
});

console.log(outcome);
function compute(val1, val2) {
	function power2(n) {
		return n * n;
	}

	function power3(m) {
		return m * m * m;
	}

	return power2(val1) + power3(val2);
}

console.log(compute(2, 3)); 
function func1() {
	return function() {
		return 1;
	};
}

function func2() {
	return function() {
		return 2;
	};
}

let sum = func1()() + func2()();

console.log(sum);

function func() {
	return function() {
		return function() {
			return function() {
				return function() {
					return '!';
				};
			};
		};
	};
}

console.log(func()()()()()); 

function each(list, callback) {
	let output = [];
	for (let item of list) {
		output.push(callback(item));
	}
	return output;
}

let numbers = [1, 2, 3, 4, 5];
let doubled = each(numbers, function(value) {
	return value * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

let words = ['hello', 'world', 'javascript'];
let reversed = each(words, function(text) {
	return text.split('').reverse().join('');
});

console.log(reversed); // ['olleh', 'dlrow', 'tpircsavaj']
let phrases = ['apple', 'banana', 'cherry'];
let capitalized = each(phrases, function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(capitalized); // ['Apple', 'Banana', 'Cherry']
function cube(num) {
    return num ** 3;
}

function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

let numbers1 = [1, 2, 3, 4, 5];
let cubed = each(numbers1, cube);
console.log(cubed); // [1, 8, 27, 64, 125]

function func21() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}

console.log(func21()()()()()); // '!'





