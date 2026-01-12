let weekDays = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
};

console.log(weekDays[1]);
console.log(weekDays[2]);
console.log(weekDays[3]);
console.log(weekDays[4]);
console.log(weekDays[5]);
console.log(weekDays[6]);
console.log(weekDays[7]);

let months = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь'
};

console.log(months);

let user = {
  name: 'Иван',
  surname: 'Иванов',
  patronymic: 'Иванович'
};

console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

let date = {
  year: 2026,
  month: 1,
  day: 7
};

console.log(date.year + '-' + date.month + '-' + date.day);

let obj = {
  '1a': 1,
  'b2': 2,
  'c-c': 3,
  'd 4': 4,
  'e5': 5
};
let obj2 = {
  '1a': 1,
  b2: 2,
  'c-c': 3,
  'd 4': 4,
  e5: 5
};

console.log(obj2['1a']);
console.log(obj2.b2);
console.log(obj2['c-c']);
console.log(obj2['d 4']);
console.log(obj2.e5);

let obj3 = {x: 1, y: 2, z: 3};

obj3.x = obj3.x ** 2;
obj3.y = obj3.y ** 2;
obj3.z = obj3.z ** 2;

console.log(obj3);

let obj4 = {};

obj4.a = 10;
obj4.b = 20;
obj4.c = 30;

console.log(obj4);
let object1 = {
    3: 'третий',
    1: 'первый',
    2: 'второй'
};

console.log(object1[1]);
console.log(object1[2]);
console.log(object1[3]);

object1 = {
    1: 'первый',
    2: 'второй',
    3: 'третий'
};

console.log(object1[1]);
console.log(object1[2]);
console.log(object1[3]);

let object11 = {x: 1, y: 2, z: 3};
let keysArray = Object.keys(object11);
console.log(keysArray);

let object14 = {x: 1, y: 2, z: 3};
let numberOfKeys = Object.keys(object14).length;
console.log(numberOfKeys);

let object12 = {x: 1, y: 2, z: 3};
let keyName = 'y';
console.log(object12[keyName]);

let object41 = {x: 1, y: 2, z: 3};
console.log(object41['x']); 
let object2 = {x: 1, y: 2, z: 3};
let keyName1 = 'x';
console.log(object2[keyName1]); 

let key = 'x';

let object18 = {
  [key]: 1,
  y: 2,
  z: 3
};

console.log(object18);

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let object24 = {
  [key1]: 1,
  [key2]: 2,
  [key3]: 3
};

console.log(object24);

let obj12 = {x: 1, y: 2, z: 3};

console.log('x' in obj12);
console.log('w' in obj12);
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);

let objjs = {x: 1, y: 2, z: 3};

console.log(objjs['x']);

let keyj = 'x';
console.log(objjs[keyj]);

let sum = objjs['x'] + objjs['y'] + objjs['z'];
console.log(sum);

console.log(Object.keys(objjs).length);








