setInterval(() => {
	console.log('Сообщение каждые 3 секунды');
}, 3000);

let count100 = 100;
setInterval(() => {
	console.log(--count100);
}, 1000);

let count10 = 10;
let timerTS = setInterval(() => {
	console.log(--count10);
	if (count10 <= 0) {
		clearInterval(timerTS);
	}
}, 1000);

let startBtn = document.querySelector('#start');

startBtn.addEventListener('click', function () {
	let i = 100;
	setInterval(() => {
		console.log(i--);
	}, 1000);
});

startBtn.addEventListener('click', function func() {
	let i = 100;
	setInterval(() => {
		console.log(i--);
	}, 1000);

	this.removeEventListener('click', func);
});

let startS = document.querySelector('#start');
let stopS  = document.querySelector('#stop');

let value = 100;
let timerSB;

startS.addEventListener('click', function () {
	timerSB = setInterval(() => {
		console.log(--value);
		if (value <= 0) {
			clearInterval(timerSB);
		}
	}, 1000);
});

stopS.addEventListener('click', function () {
	clearInterval(timerSB);
});

let timerId2;

startS.addEventListener('click', function () {
	timerId2 = setInterval(() => {
		let d = new Date();
		console.log(d.getMinutes() + ' ' + d.getSeconds());
	}, 1000);
});

stopS.addEventListener('click', function () {
	clearInterval(timerId2);
});

let timerId3;

startS.addEventListener('click', function () {
	timerId3 = setInterval(() => {
		let d = new Date();
		console.log(d.getMinutes() + ' ' + d.getSeconds());
	}, 1000);
});

stopS.addEventListener('click', function () {
	clearInterval(timerId3);
});

let start4 = document.querySelector('#start');
let stop4  = document.querySelector('#stop');

let timerId4;

start4.addEventListener('click', function () {
	timerId4 = setInterval(() => {
		let d = new Date();
		console.log(d.getMinutes() + ' ' + d.getSeconds());
	}, 1000);
});

stop4.addEventListener('click', function () {
	clearInterval(timerId4);
});

let timerId5;

start4.addEventListener('click', function () {
	timerId5 = setInterval(() => {
		let d = new Date();
		console.log(d.getMinutes() + ' ' + d.getSeconds());
	}, 1000);
});

stop4.addEventListener('click', function () {
	clearInterval(timerId5);
});

start4.addEventListener('click', function func() {
	timerId4 = setInterval(() => {
		console.log('!');
	}, 1000);

	this.removeEventListener('click', func);
});

stop4.addEventListener('click', function () {
	clearInterval(timerId4);
});

let inp = document.querySelector('#elem');

setInterval(() => {
	inp.value = Number(inp.value) - 1;
}, 1000);

let timerDm = setInterval(() => {
	inp.value = Number(inp.value) - 1;
	if (inp.value <= 0) {
		clearInterval(timerDm);
	}
}, 1000);

let btn = document.querySelector('#elem');

btn.addEventListener('click', function () {
	let self = this;

	setInterval(() => {
		self.value = Number(self.value) + 1;
	}, 1000);
});

let p1 = document.querySelector('#p1');
let b1 = document.querySelector('#b1');

b1.addEventListener('click', () => {
	setInterval(() => {
		p1.textContent = Number(p1.textContent) + 1;
	}, 1000);
});

let p2 = document.querySelector('#p2');
let b2 = document.querySelector('#b2');

b2.addEventListener('click', () => {
	let t = setInterval(() => {
		p2.textContent = Number(p2.textContent) - 1;
		if (p2.textContent <= 0) clearInterval(t);
	}, 1000);
});

let inpSq = document.querySelector('#sq');

setInterval(() => {
	inpSq.value = inpSq.value ** 2;
}, 1000);

let inpBlur = document.querySelector('#blur');
let pBlur = document.querySelector('#pBlur');

inpBlur.addEventListener('blur', function () {
	let n = Number(this.value);
	let t = setInterval(() => {
		pBlur.textContent = n--;
		if (n < 0) clearInterval(t);
	}, 1000);
});

let inp5 = document.querySelector('#i5');
let b5 = document.querySelector('#b5');
let p5 = document.querySelector('#p5');

b5.addEventListener('click', () => {
	let n = Number(inp5.value);
	p5.textContent = n;

	let t = setInterval(() => {
		p5.textContent = --n;
		if (n <= 0) clearInterval(t);
	}, 1000);
});

let p6 = document.querySelector('#p6');
let s6 = document.querySelector('#s6');
let st6 = document.querySelector('#st6');

let i6 = 0;
let t6;

s6.addEventListener('click', () => {
	t6 = setInterval(() => {
		p6.textContent = ++i6;
	}, 1000);
});

st6.addEventListener('click', () => {
	clearInterval(t6);
});

let p7 = document.querySelector('#p7');

setInterval(() => {
	p7.style.color = p7.style.color === 'red' ? 'green' : 'red';
}, 1000);

let pDelay = document.querySelector('#delay');

setTimeout(() => {
	pDelay.textContent = 'Прошло 10 секунд';
}, 10000);

let iDT = 0;

function timerDT() {
	setTimeout(() => {
		console.log(iDT++);
		timerDT();
	}, 1000);
}

timerDT();
