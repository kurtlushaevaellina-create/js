// Основные элементы
let mainSelect = document.querySelector('#mainSelect');
let outputText = document.querySelector('#outputText');
let showSelectedBtn = document.querySelector('#showSelectedBtn');

if (showSelectedBtn && mainSelect && outputText) {
  showSelectedBtn.addEventListener('click', function() {
    outputText.textContent = mainSelect.value;
  });
}

// Заполнение годов
let yearSelector = document.querySelector('#yearSelector');
let yearResult = document.querySelector('#yearResult');

if (yearSelector) {
  for (let year = 2020; year <= 2030; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
  }

  yearSelector.addEventListener('change', function() {
    let year = parseInt(this.value, 10);
    if (isNaN(year)) {
      yearResult.textContent = '';
      return;
    }
    if (isLeapYear(year)) {
      yearResult.textContent = `${year} - leap year`;
    } else {
      yearResult.textContent = `${year} - not a leap year`;
    }
  });
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Выбор рабочего/выходного дня
let weekdaySelector = document.querySelector('#weekdaySelector');
let weekdayOutput = document.querySelector('#weekdayOutput');

if (weekdaySelector && weekdayOutput) {
  weekdaySelector.addEventListener('change', function() {
    let dayNumber = parseInt(this.value, 10);
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 5) {
      weekdayOutput.textContent = 'Workday';
    } else {
      weekdayOutput.textContent = 'Weekend';
    }
  });
}

// Установка текущего месяца
let monthSelector = document.querySelector('#monthSelector');
if (monthSelector) {
  let currentMonth = new Date().getMonth() + 1;
  // Проверяем, что опция с таким value существует
  let monthOption = Array.from(monthSelector.options).find(o => o.value === String(currentMonth));
  if (monthOption) monthSelector.value = String(currentMonth);
}

// itemIndexInput -> dynamicSelect (0-based)
let itemIndexInput = document.querySelector('#itemIndexInput');
let dynamicSelect = document.querySelector('#dynamicSelect');

if (itemIndexInput && dynamicSelect) {
  itemIndexInput.addEventListener('blur', function() {
    let index = parseInt(this.value, 10);
    if (!isNaN(index) && index >= 0 && index < dynamicSelect.options.length) {
      dynamicSelect.selectedIndex = index;
    }
  });
}

// Установка текущего дня в workdaySelector (1..7)
let workdaySelector = document.querySelector('#workdaySelector');
if (workdaySelector) {
  let currentDay = new Date().getDay(); // 0..6 (0 = Sunday)
  let dayNumber = currentDay === 0 ? 7 : currentDay;
  // Устанавливаем значение, если есть опция
  let dayOption = Array.from(workdaySelector.options).find(o => o.value === String(dayNumber));
  if (dayOption) workdaySelector.value = String(dayNumber);
}

// Добавляем в текст опций fruitSelector их value
let fruitSelector = document.querySelector('#fruitSelector');
if (fruitSelector) {
  for (let i = 0; i < fruitSelector.options.length; i++) {
    let option = fruitSelector.options[i];
    option.textContent += ` [${option.value}]`;
  }
}

// Пометка simpleSelect: добавить '!' для выбранной, '?' для остальных
let simpleSelect = document.querySelector('#simpleSelect');
if (simpleSelect) {
  for (let i = 0; i < simpleSelect.options.length; i++) {
    let option = simpleSelect.options[i];
    if (option.selected) {
      option.textContent += '!';
    } else {
      option.textContent += '?';
    }
  }
}

// selectLastBtn -> выбрать последний option в positionSelect
let positionSelect = document.querySelector('#positionSelect');
let selectLastBtn = document.querySelector('#selectLastBtn');
if (positionSelect && selectLastBtn) {
  selectLastBtn.addEventListener('click', function() {
    let lastIndex = positionSelect.options.length - 1;
    if (lastIndex >= 0) positionSelect.selectedIndex = lastIndex;
  });
}

// showTextBtn -> показать текст выбранной опции в textSelect
let textSelect = document.querySelector('#textSelect');
let showTextBtn = document.querySelector('#showTextBtn');
let selectedItemText = document.querySelector('#selectedItemText');
if (textSelect && showTextBtn && selectedItemText) {
  showTextBtn.addEventListener('click', function() {
    let selectedOption = textSelect.options[textSelect.selectedIndex];
    if (selectedOption) selectedItemText.textContent = selectedOption.textContent;
  });
}

// addExclamationBtn -> добавить '!' к выбранной опции modifiableSelect
let modifiableSelect = document.querySelector('#modifiableSelect');
let addExclamationBtn = document.querySelector('#addExclamationBtn');
if (modifiableSelect && addExclamationBtn) {
  addExclamationBtn.addEventListener('click', function() {
    let selectedOption = modifiableSelect.options[modifiableSelect.selectedIndex];
    if (selectedOption) selectedOption.textContent += '!';
  });
}