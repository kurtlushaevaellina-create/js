let a = [4, 9, 16, 25];
let b = a.map(x => Math.sqrt(x));
console.log("№1:", b);

let c = ["hello", "world", "javascript"];
let d = c.map(s => s + "!");
console.log("№2:", d);

let e = ["abc", "def", "ghi"];
let f = e.map(s => s.split('').reverse().join(''));
console.log("№3:", f);
let g = ['123', '456', '789'];
let h = g.map(s => s.split('').map(Number));
console.log("№4:", h);

let i = [2, 3, 4, 5];
let j = i.map((x, idx) => x * idx);
console.log("№5:", j);

let k = [1, 2, 3, 4];
let sum = 0;
k.forEach(x => {
    sum += x * x;
});
console.log("№1:", sum);

let l = [-3, -1, 0, 2, 4, -5];
let pos = l.filter(x => x > 0);
console.log("№1:", pos);

let neg = l.filter(x => x < 0);
console.log("№2:", neg);

let m = [-2, 0, 3, 7, 12, 15, 8];
let n = m.filter(x => x > 0 && x < 10);
console.log("№3:", n);
let o = ["hi", "hello", "javascript", "web", "development"];
let p = o.filter(s => s.length > 5);
console.log("№4:", p);

let q = [5, 8, 3, 10, 2];
let r = q.filter((x, idx) => x * idx < 30);
console.log("№5:", r);

let s = [1, 2, [3, 4], 5, [6, 7], 8];
let t = s.filter(x => !Array.isArray(x));
console.log("№6:", t);

let u = [1, 3, 5, 7, 9];
let v = u.every(x => x > 0);
console.log("№1:", v);

let w = [4, 5, 6, 7];
let x = w.every((num, idx) => num * idx < 30);
console.log("№2:", x);

let y = [-5, -3, -1, 0, 2];
let z = y.some(num => num > 0);
console.log("№1:", z);

let aa = [3, 7, 8, 10];
let bb = aa.some((num, idx) => num * idx > 30);
console.log("№2:", bb);