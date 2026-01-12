// Работа с объектом Date в JavaScript - Задание №1
let date1 = new Date();
console.log(date1.getDate());

// Работа с объектом Date в JavaScript - Задание №2
let date2 = new Date();
console.log(date2.getMonth());

// Работа с объектом Date в JavaScript - Задание №3
let date3 = new Date();
console.log(date3.getFullYear());

// Форматирование даты в JavaScript - Задание №1
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

let date4 = new Date();
let time1 = addZero(date4.getHours()) + ':' + addZero(date4.getMinutes()) + ':' + addZero(date4.getSeconds());
let dateStr1 = addZero(date4.getDate()) + '.' + addZero(date4.getMonth() + 1) + '.' + date4.getFullYear();
console.log(time1 + ' ' + dateStr1);

// Смена формата даты в JavaScript - Задание №1
let str1 = '2025-12-31';
let res1 = str1.split('-').reverse().join('.');
console.log(res1);

// Получения дня недели на JavaScript - Задание №1
let date5 = new Date();
console.log(date5.getDay());

// Получения дня недели на JavaScript - Задание №2
let date6 = new Date();
let day1 = date6.getDay();
if (day1 === 0 || day1 === 6) {
    console.log('выходной');
} else {
    console.log('рабочий');
}

// Получения дня недели на JavaScript - Задание №3
let date7 = new Date();
let day2 = date7.getDay();
let daysToSunday = 7 - day2;
if (daysToSunday === 7) {
    daysToSunday = 0;
}
console.log(daysToSunday);

// Вывод частей даты словом в JavaScript - Задание №1
let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
let date8 = new Date();
console.log(months[date8.getMonth()]);

// Установка времени в объекте Date в JavaScript - Задание №1
let birthday = new Date(1985, 6, 15);
let birthdayDay = birthday.getDay();
let daysArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysArr[birthdayDay]);

// Получение времени в формате timestamp в JavaScript - Задание №1
let date9 = new Date(2025, 0, 1);
console.log(date9.getTime());

// Разность между датами в формате timestamp в JavaScript - Задание №1
let date10 = new Date(1988, 2, 1);
let date11 = new Date(2000, 0, 10);
let diff1 = date11.getTime() - date10.getTime();
let days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
console.log(days1);

// Разность между датами в формате timestamp в JavaScript - Задание №2
let now1 = new Date();
let myBirth = new Date(1985, 6, 15);
let diff2 = now1.getTime() - myBirth.getTime();
let months1 = Math.floor(diff2 / (1000 * 60 * 60 * 24 * 30));
console.log(months1);

// Разность между объектами с датой в JavaScript - Задание №1
let date12 = new Date(2000, 8, 1);
let date13 = new Date(2010, 1, 15);
let diff3 = date13 - date12;
console.log(diff3);

// Разность между объектами с датой в JavaScript - Задание №2
let diff4 = diff3 / (1000 * 60 * 60 * 24);
console.log(diff4);

// Разность между объектами с датой в JavaScript - Задание №3
let diff5 = diff3 / (1000 * 60 * 60 * 24 * 30);
console.log(diff5);

// Разность между объектами с датой в JavaScript - Задание №4
let diff6 = diff3 / (1000 * 60 * 60 * 24 * 365);
console.log(diff6);

// Нахождение последнего дня месяца в JavaScript - Задание №1
function getLastDay(month, year) {
    let date14 = new Date(year, month + 1, 0);
    return date14.getDate();
}

// Нахождение последнего дня месяца в JavaScript - Задание №2
let date15 = new Date(2025, 5, 0);
let lastDayWeek = date15.getDay();
console.log(lastDayWeek);

// Определение високосного года в JavaScript - Задание №1
function isLeap(year) {
    let date16 = new Date(year, 2, 0);
    if (date16.getDate() == 29) {
        return true;
    } else {
        return false;
    }
}

// Проверка корректности даты в JavaScript - Задание №1
function checkDate(year, month, day) {
    let date17 = new Date(year, month, day);
    if (date17.getFullYear() == year && date17.getMonth() == month && date17.getDate() == day) {
        return true;
    } else {
        return false;
    }
}

// Получение дня текущего года в JavaScript - Задание №1
let now2 = new Date();
let date18 = new Date(now2.getFullYear(), 11, 31);
let lastDayYear = date18.getDay();
console.log(lastDayYear);

// День следующего или предыдущего года - Задание №1
let now3 = new Date();
let date19 = new Date(now3.getFullYear() + 1, 11, 31);
let nextYearLastDay = date19.getDay();
console.log(nextYearLastDay);

// День следующего или предыдущего года - Задание №2
let now4 = new Date();
let date20 = new Date(now4.getFullYear() + 1, now4.getMonth(), now4.getDate());
let nextYearSameDay = date20.getDay();
console.log(nextYearSameDay);

// День следующего или предыдущего года - Задание №3
let now5 = new Date();
let date21 = new Date(now5.getFullYear() - 1, now5.getMonth(), now5.getDate());
let lastYearSameDay = date21.getDay();
console.log(lastYearSameDay);

// Разность моментов - Задание №1
let now6 = new Date();
let date22 = new Date(now6.getFullYear(), 0, 1);
let date23 = new Date(now6.getFullYear(), 8, 10);
let diff7 = date23 - date22;
let days2 = Math.floor(diff7 / (1000 * 60 * 60 * 24));
console.log(days2);

// Разность моментов - Задание №2
let now7 = new Date();
let date24 = new Date(now7.getFullYear(), now7.getMonth(), 20);
let date25 = new Date(now7.getFullYear(), now7.getMonth() + 1, 10);
let diff8 = date25 - date24;
let days3 = Math.floor(diff8 / (1000 * 60 * 60 * 24));
console.log(days3);

// Момент времени дня - Задание №1
let now8 = new Date();
let yesterdayNoon = new Date(now8.getFullYear(), now8.getMonth(), now8.getDate() - 1, 12);
let diff9 = now8 - yesterdayNoon;
let hours1 = Math.floor(diff9 / (1000 * 60 * 60));
console.log(hours1);

// Начало дня в JavaScript - Задание №1
let now9 = new Date();
let startOfDay = new Date(now9.getFullYear(), now9.getMonth(), now9.getDate());
let diff10 = now9 - startOfDay;
let hours2 = Math.floor(diff10 / (1000 * 60 * 60));
console.log(hours2);

// Конец дня в JavaScript - Задание №1
let now10 = new Date();
let endOfDay = new Date(now10.getFullYear(), now10.getMonth(), now10.getDate() + 1);
let diff11 = endOfDay - now10;
let hours3 = Math.floor(diff11 / (1000 * 60 * 60));
console.log(hours3);

// Циклическая проверка моментов времени в JavaScript - Задание №1
let now11 = new Date();
let currentYear = now11.getFullYear();
let count = 0;
for (let year = 2000; year <= currentYear; year++) {
    let date26 = new Date(year, 0, 1);
    let day3 = date26.getDay();
    if (day3 === 0 || day3 === 6) {
        count++;
    }
}
console.log(count);

// Практика на получение моментов времени в JavaScript - Задание №1
let now12 = new Date();
let startOfDay2 = new Date(now12.getFullYear(), now12.getMonth(), now12.getDate());
let diff12 = now12 - startOfDay2;
let seconds1 = Math.floor(diff12 / 1000);
console.log(seconds1);

// Практика на получение моментов времени в JavaScript - Задание №2
let now13 = new Date();
let endOfDay2 = new Date(now13.getFullYear(), now13.getMonth(), now13.getDate() + 1);
let diff13 = endOfDay2 - now13;
let seconds2 = Math.floor(diff13 / 1000);
console.log(seconds2);

// Практика на получение моментов времени в JavaScript - Задание №3
let now14 = new Date();
let nextYear = new Date(now14.getFullYear() + 1, 0, 1);
let diff14 = nextYear - now14;
let days4 = Math.floor(diff14 / (1000 * 60 * 60 * 24));
console.log(days4);

// Практика на получение моментов времени в JavaScript - Задание №4
let now15 = new Date();
let currentYear2 = now15.getFullYear();
let count2 = 0;
for (let month = 0; month < 12; month++) {
    let date27 = new Date(currentYear2, month, 13);
    if (date27.getDay() === 5) {
        count2++;
    }
}
console.log(count2);

// Практика на получение моментов времени в JavaScript - Задание №5
let now16 = new Date();
let threeMonthsAgo = new Date(now16.getFullYear(), now16.getMonth() - 3, now16.getDate());
console.log(threeMonthsAgo.getFullYear());

// Практика на получение моментов времени в JavaScript - Задание №6
let now17 = new Date();
let lastDayMonth = new Date(now17.getFullYear(), now17.getMonth() + 1, 0);
console.log(lastDayMonth.getDay());

// Практика на получение моментов времени в JavaScript - Задание №7
let now18 = new Date();
let year2 = now18.getFullYear();
let date28 = new Date(year2, 2, 0);
if (date28.getDate() == 29) {
    console.log('високосный');
} else {
    console.log('не високосный');
}

// Практика на получение моментов времени в JavaScript - Задание №8
let now19 = new Date();
let currentYear3 = now19.getFullYear();
let prevLeap = currentYear3;
while (!isLeap(prevLeap)) {
    prevLeap--;
}
console.log(prevLeap);

// Практика на получение моментов времени в JavaScript - Задание №9
let now20 = new Date();
let currentYear4 = now20.getFullYear();
let nextLeap = currentYear4;
while (!isLeap(nextLeap)) {
    nextLeap++;
}
console.log(nextLeap);

// Строковое сравнение дат на JavaScript - Задание №1
let date29 = '2020-11-30';
let date30 = '2020-12-01';
if (date29 > date30) {
    console.log('date29 больше');
} else if (date29 < date30) {
    console.log('date30 больше');
} else {
    console.log('даты равны');
}

// Сравнение даты без года в JavaScript - Задание №1
let date31 = '09-21';
let date32 = '09-23';
if (date31 > date32) {
    console.log('date31 больше');
} else if (date31 < date32) {
    console.log('date32 больше');
} else {
    console.log('даты равны');
}

// Попадание даты в промежуток - Задание №1
let date33 = '08-20';
if (date33 >= '03-21' && date33 <= '04-19') {
    console.log('Овен');
} else if (date33 >= '04-20' && date33 <= '05-20') {
    console.log('Телец');
} else if (date33 >= '05-21' && date33 <= '06-20') {
    console.log('Близнецы');
} else if (date33 >= '06-21' && date33 <= '07-22') {
    console.log('Рак');
} else if (date33 >= '07-23' && date33 <= '08-22') {
    console.log('Лев');
} else if (date33 >= '08-23' && date33 <= '09-22') {
    console.log('Дева');
} else if (date33 >= '09-23' && date33 <= '10-22') {
    console.log('Весы');
} else if (date33 >= '10-23' && date33 <= '11-21') {
    console.log('Скорпион');
} else if (date33 >= '11-22' && date33 <= '12-21') {
    console.log('Стрелец');
} else if (date33 >= '12-22' && date33 <= '01-19') {
    console.log('Козерог');
} else if (date33 >= '01-20' && date33 <= '02-18') {
    console.log('Водолей');
} else if (date33 >= '02-19' && date33 <= '03-20') {
    console.log('Рыбы');
}

// Сравнение объектов с датами в JavaScript - Задание №1
let now21 = new Date();
let noonToday = new Date(now21.getFullYear(), now21.getMonth(), now21.getDate(), 12);
if (now21 > noonToday) {
    console.log('полдень уже прошел');
} else {
    console.log('полдень еще не наступил');
}

// Сравнение объектов с датами в JavaScript - Задание №2
let now22 = new Date();
let fifteenth = new Date(now22.getFullYear(), now22.getMonth(), 15);
if (now22 > fifteenth) {
    console.log('половина месяца прошла');
} else {
    console.log('половина месяца еще не прошла');
}