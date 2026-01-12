function func(...nums) {
	let sum = 0;

	for (let num of nums) {
		sum += num;
	}

	return sum / nums.length;
}

console.log(func(1, 2, 3));       // 2
console.log(func(1, 2, 3, 4));    // 2.5
console.log(func(1, 2, 3, 4, 5)); // 3
