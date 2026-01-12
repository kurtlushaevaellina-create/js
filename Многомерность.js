let arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log(arr1[3][2]); 
console.log(arr1[1][1]); 
console.log(arr1[2][0]); 
console.log(arr1[0][0]); 


let arr2 = [[1, 2], [3, 4], [5, 6]];

console.log(arr2[0][0] + arr2[0][1]); 
console.log(arr2[1][0] + arr2[1][1]); 
console.log(arr2[2][0] + arr2[2][1]); 

let matrix = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

let total = 0;

for (let x = 0; x < matrix.length; x++) {
	for (let y = 0; y < matrix[x].length; y++) {
		for (let z = 0; z < matrix[x][y].length; z++) {
			total += matrix[x][y][z];
		}
	}
}

console.log(total); 

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];

console.log(sum);


let array2D = [[1, 2, 3], [4, 5], [6]];
let sum2D = 0;

for (let subArray of array2D) {
	for (let num of subArray) {
		sum2D += num;
	}
}

console.log(sum2D); 


let array3D = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum3D = 0;

for (let subArray2D of array3D) {
	for (let subArray of subArray2D) {
		for (let num of subArray) {
			sum3D += num;
		}
	}
}

console.log(sum3D); 


let pqr = [];

for (let a = 0; a < 3; a++) {
	pqr[a] = [];
	for (let b = 0; b < 5; b++) {
		pqr[a].push(b + 1);
	}
}

console.log(pqr);

let stu = [];

for (let c = 0; c < 3; c++) {
	stu[c] = [];
	for (let d = 0; d < 4; d++) {
		stu[c].push('x');
	}
}

console.log(stu);

let vwx = [];

for (let e = 0; e < 3; e++) {
	vwx[e] = [];
	for (let f = 0; f < 2; f++) {
		vwx[e][f] = [];
		for (let g = 0; g < 5; g++) {
			vwx[e][f].push(g + 1);
		}
	}
}

console.log(vwx);

let mno = {
	key1: { key1: 1, key2: 2, key3: 3 },
	key2: { key1: 4, key2: 5, key3: 6 },
	key3: { key1: 7, key2: 8, key3: 9 },
};

let sumMno = mno.key1.key1 + mno.key1.key2 + mno.key1.key3 +
             mno.key2.key1 + mno.key2.key2 + mno.key2.key3 +
             mno.key3.key1 + mno.key3.key2 + mno.key3.key3;

console.log(sumMno); 

let pqrObj = {
	1: { 1: 'a1', 2: 'a2', 3: 'a3' },
	2: { 1: 'b1', 2: 'b2', 3: 'b3' },
	3: { 1: 'c1', 2: 'c2', 3: 'c3' },
};

console.log(pqrObj[2][2]); 
console.log(pqrObj[3][1]); 

let stuObj = {
	key1: { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5 },
	key2: { g: 6, h: 7 },
};

let totalStu = stuObj.key1.a + stuObj.key1.b + stuObj.key1.c.d + stuObj.key1.c.e + stuObj.key1.f +
               stuObj.key2.g + stuObj.key2.h;

console.log(totalStu); 

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};

console.log(students['group3'][0]); 


let d = {
	1: ['data11', 'data12', 'data13'],
	2: ['data21', 'data22', 'data23'],
	3: ['data31', 'data32', 'data33'],
	4: ['data41', 'data42', 'data43'],
};

for (let k in d) {
	for (let v of d[k]) {
		console.log(v);
	}
}

let e = [
	{ 1: 'data11', 2: 'data12', 3: 'data13' },
	{ 1: 'data21', 2: 'data22', 3: 'data33' },
	{ 1: 'data31', 2: 'data32', 3: 'data33' },
];

for (let o of e) {
	for (let k in o) {
		console.log(o[k]);
	}
}


let f = [
	{ 1: ['data111','data112','data113'], 2: ['data121','data122','data123'] },
	{ 1: ['data211','data212','data213'], 2: ['data221','data222','data223'] },
	{ 1: ['data411','data412','data413'], 2: ['data421','data422','data423'] },
];

for (let o of f) {
	for (let k in o) {
		for (let v of o[k]) {
			console.log(v);
		}
	}
}

let employees1 = [
	{ name: 'name1', salary: 300 },
	{ name: 'name2', salary: 400 },
	{ name: 'name3', salary: 500 },
];

for (let employee of employees1) {
	console.log(employee.name + ' - ' + employee.salary);
}

let employees2 = [
	{ name: 'name1', salary: 300 },
	{ name: 'name2', salary: 400 },
	{ name: 'name3', salary: 500 },
];

let totalSalary = 0;
for (let employee of employees2) {
	totalSalary += employee.salary;
}
console.log(totalSalary); 

let employees3 = [
	{ name: 'name1', salary: 300, age: 28 },
	{ name: 'name2', salary: 400, age: 29 },
	{ name: 'name3', salary: 500, age: 30 },
	{ name: 'name4', salary: 600, age: 31 },
	{ name: 'name5', salary: 700, age: 32 },
];

let totalSalary30 = 0;
for (let employee of employees3) {
	if (employee.age >= 30) {
		totalSalary30 += employee.salary;
	}
}
console.log(totalSalary30); 

// №1 — обращение по ключам из переменных
let obj = {
	'sub1': ['11', '12', '13'],
	'sub2': ['21', '22', '23'],
};

let key1 = 'sub2';
let key2 = 1;

console.log(obj[key1][key2]); // '22'

// №2 — обращение по ключам в многомерной структуре с годами, месяцами и днями
let affairs = {
	'2018': {
		11: {
			29: ['name111', 'name112', 'name113'],
			30: ['name121', 'name122', 'name123'],
		},
		12: {
			30: ['name211', 'name212', 'name213'],
			31: ['name221', 'name222', 'name223'],
		},
	},
	'2019': {
		12: {
			29: ['name311', 'name312', 'name313'],
			30: ['name321', 'name322', 'name323'],
			31: ['name331', 'name332', 'name333'],
		}
	},
};

let year = '2018';
let month = 12;
let day = 30;

console.log(affairs[year][month][day]); 

let obj3 = {
	key1: { key2: '12', key3: '13' },
	key2: { key4: '24', key5: '25' },
};

let key1_3 = 'key2';
let key2_3 = 'key4';

console.log(obj3[key1_3][key2_3]); 

let obj4 = {
	key1: { key2: '12', key3: '13' },
	key2: { key4: '24', key5: '25' },
};

let key1_4 = 'key2';
let key2_4 = 'key4';

console.log(obj4[key1_4][key2_4]); 

let obj5 = {
	key1: { key2: '12', key3: '13' },
	key2: { key4: '24', key5: '25' },
};

let key1_5 = 'key2';

console.log(obj5[key1_5]['key4']); 

let affairs1 = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
};

affairs1['2019-12-29'].push('data24');

if (!affairs1['2019-12-31']) {
	affairs1['2019-12-31'] = [];
}
affairs1['2019-12-31'].push('data41', 'data42');

let students1 = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

students1.group1.subgroup11.push('student114');

students1.group1.subgroup13 = ['student131', 'student132'];

students1.group4 = {};
students1.group4.subgroup41 = ['student411', 'student412'];



