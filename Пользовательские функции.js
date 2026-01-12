function showName() {
	console.log('Эллина');
}

showName();

function showSum() {
	let sum = 0;
	for (let i = 1; i <= 100; i++) {
		sum += i;
	}
	console.log(sum);
}

showSum();

function cube(num) {
	console.log(num ** 3);
}

cube(2);

function checkNum(num) {
	if (num > 0) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

checkNum(-5);

function sumThree(a, b, c) {
	console.log(a + b + c);
}

sumThree(1, 2, 3);

function func(a, b, c) {
	console.log(a + b + c);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3);

function func(num = 5) {
	console.log(num * num);
}

function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

function cube(num) {
	return num ** 3;
}

let res = cube(3);
function sqrt(num) {
	return Math.sqrt(num);
}

let sum = sqrt(3) + sqrt(4);
console.log(sum);

function func(num) {
	let count = 0;

	while (num >= 10) {
		num = num / 2;
		count++;
	}

	return count;
}

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func(3, 4));

function allEven(arr) {
	for (let num of arr) {
		if (num % 2 !== 0) {
			return false;
		}
	}
	return true;
}

console.log(allEven([2, 4, 6])); 
console.log(allEven([2, 3, 4])); 

function allDigitsOdd(num) {
	let str = String(num);
	for (let ch of str) {
		if (Number(ch) % 2 === 0) {
			return false;
		}
	}
	return true;
}

console.log(allDigitsOdd(1357)); 
console.log(allDigitsOdd(1358)); 

function hasConsecutiveDuplicates(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			return true;
		}
	}
	return false;
}

console.log(hasConsecutiveDuplicates([1, 2, 2, 3])); 
console.log(hasConsecutiveDuplicates([1, 2, 3, 4])); 

function func(a, b) {
	return a == b;
}

function func(a, b) {
	return a != b;
}

function func(a, b) {
	return (a + b) >= 10;
}

function func(num) {
	return num >= 0;
}

function divisors(num) {
	let result = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			result.push(i);
		}
	}
	return result;
}

console.log(divisors(12)); 

function commonDivisors(a, b) {
	let result = [];
	for (let i = 1; i <= Math.min(a, b); i++) {
		if (a % i === 0 && b % i === 0) {
			result.push(i);
		}
	}
	return result;
}

console.log(commonDivisors(12, 18)); 

function sumDigits(num) {
	let sum = 0;
	let str = String(Math.abs(num));
	for (let ch of str) {
		sum += Number(ch);
	}
	return sum;
}

console.log(sumDigits(1234)); 

function currentWeekday() {
	const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
	let today = new Date();
	return days[today.getDay()];
}

console.log(currentWeekday());

function weekdayByDate(date) {
	const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
	let d = new Date(date);
	return days[d.getDay()];
}

console.log(weekdayByDate('2026-01-08')); 

function secondsToDays(seconds) {
	return Math.floor(seconds / 86400);
}

console.log(secondsToDays(200000));

function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2024)); 
console.log(isLeapYear(2100)); 

function isPrime(num) {
	if (num < 2) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

console.log(isPrime(7)); 
console.log(isPrime(12)); 







