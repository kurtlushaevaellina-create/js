let arr = [1, 2, 3, 4, 5];

let min = Math.min(...arr);
console.log(min);
let arr1 = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

let sum = func(...arr1);
console.log(sum);
