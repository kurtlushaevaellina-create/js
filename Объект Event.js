"use strict";

function safeAppend(element) {
    if (document.body) {
        document.body.appendChild(element);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(element);
        });
    }
}

const element1 = document.createElement('button');
element1.textContent = 'Нажми меня';
safeAppend(element1);

element1.addEventListener('click', function(eventData) {
    console.log("Объект события:", eventData);
});

const coordinatesDisplay = document.createElement('div');
coordinatesDisplay.style.position = 'fixed';
coordinatesDisplay.style.top = '10px';
coordinatesDisplay.style.right = '10px';
coordinatesDisplay.style.padding = '10px';
coordinatesDisplay.style.backgroundColor = 'white';
coordinatesDisplay.style.border = '1px solid black';
coordinatesDisplay.textContent = '0:0';
safeAppend(coordinatesDisplay);

document.addEventListener('mousemove', function(eventData) {
    coordinatesDisplay.textContent = `${eventData.clientX}:${eventData.clientY}`;
});

const element2 = document.createElement('button');
element2.textContent = 'Клик/Двойной клик';
safeAppend(element2);

function handleEvent(eventData) {
    if (eventData.type === 'click') {
        element2.style.backgroundColor = 'green';
    } else if (eventData.type === 'dblclick') {
        element2.style.backgroundColor = 'red';
    }
}

element2.addEventListener('click', handleEvent);
element2.addEventListener('dblclick', handleEvent);

const list1 = document.createElement('ul');
list1.id = 'elem';
list1.style.padding = '30px';
list1.style.border = '1px solid red';

for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'text';
    listItem.style.listStyleType = 'none';
    listItem.style.marginBottom = '20px';
    listItem.style.border = '1px dashed black';
    list1.appendChild(listItem);
}

safeAppend(list1);

list1.addEventListener('click', function(eventData) {
    if (eventData.target.tagName === 'LI') {
        eventData.target.textContent += '!';
    } else if (eventData.target.tagName === 'UL') {
        console.log("Клик по тегу UL");
    }
});

const textInput1 = document.createElement('input');
textInput1.placeholder = 'Вводите текст здесь...';
const outputDisplay = document.createElement('div');
safeAppend(textInput1);
safeAppend(outputDisplay);

textInput1.addEventListener('keypress', function(eventData) {
    outputDisplay.textContent = `Клавиша: "${eventData.key}", Код: ${eventData.code}`;
});

const textInput2 = document.createElement('input');
textInput2.placeholder = 'Нажмите Enter или Backspace...';
safeAppend(textInput2);

textInput2.addEventListener('keydown', function(eventData) {
    if (eventData.code === 'Enter') {
        console.log("Код клавиши Enter: Enter");
    }
    if (eventData.code === 'Backspace') {
        console.log("Код клавиши Backspace: Backspace");
    }
});

const element3 = document.createElement('div');
element3.textContent = 'Кликни с Alt';
element3.style.padding = '20px';
element3.style.border = '1px solid black';
element3.style.margin = '10px';
safeAppend(element3);

element3.addEventListener('click', function(eventData) {
    if (eventData.altKey) {
        this.style.backgroundColor = 'red';
    }
});

const list2 = document.createElement('ul');
list2.id = 'elem';
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'text';
    list2.appendChild(listItem);
}
safeAppend(list2);

list2.addEventListener('click', function(eventData) {
    if (eventData.target.tagName === 'LI') {
        if (eventData.ctrlKey) {
            eventData.target.textContent += '1';
        } else if (eventData.shiftKey) {
            eventData.target.textContent += '2';
        }
    }
});

const linkElement1 = document.createElement('a');
linkElement1.href = 'https://example.com';
linkElement1.textContent = 'Ссылка 1';
const linkElement2 = document.createElement('a');
linkElement2.href = 'https://google.com';
linkElement2.textContent = 'Ссылка 2';
safeAppend(linkElement1);
safeAppend(linkElement2);

[linkElement1, linkElement2].forEach(link => {
    link.addEventListener('click', function(eventData) {
        eventData.preventDefault();
        this.textContent += ` (${this.href})`;
    });
});

const numberInput1 = document.createElement('input');
numberInput1.type = 'number';
const numberInput2 = document.createElement('input');
numberInput2.type = 'number';
const resultParagraph = document.createElement('p');
resultParagraph.textContent = 'Сумма: ';
const linkElement3 = document.createElement('a');
linkElement3.href = '#';
linkElement3.textContent = 'Посчитать сумму';
safeAppend(numberInput1);
safeAppend(numberInput2);
safeAppend(linkElement3);
safeAppend(resultParagraph);

linkElement3.addEventListener('click', function(eventData) {
    eventData.preventDefault();
    const total = Number(numberInput1.value) + Number(numberInput2.value);
    resultParagraph.textContent = `Сумма: ${total}`;
});

const container1 = document.createElement('div');
container1.style.padding = '50px';
container1.style.backgroundColor = 'green';
container1.textContent = 'Зеленый (родитель)';

const container2 = document.createElement('div');
container2.style.padding = '30px';
container2.style.backgroundColor = 'blue';
container2.textContent = 'Голубой (ребенок)';

const container3 = document.createElement('div');
container3.style.padding = '20px';
container3.style.backgroundColor = 'red';
container3.textContent = 'Красный (внук)';

container2.appendChild(container3);
container1.appendChild(container2);
safeAppend(container1);

[container1, container2, container3].forEach((elem, index) => {
    elem.addEventListener('click', function(eventData) {
        console.log(`Клик по ${['зеленому', 'голубому', 'красному'][index]} блоку`);
    });
});

const container4 = document.createElement('div');
container4.style.padding = '20px';
container4.style.border = '1px solid red';

const list3 = document.createElement('ul');
list3.style.border = '1px solid orange';
list3.style.padding = '20px';

for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    listItem.style.border = '1px solid green';
    listItem.style.padding = '20px';
    listItem.style.listStyleType = 'none';
    list3.appendChild(listItem);
}

container4.appendChild(list3);
safeAppend(container4);

container4.addEventListener('click', function(eventData) {
    if (eventData.target.matches('li')) {
        eventData.target.textContent += '!';
        console.log("Клик по li");
    } else if (eventData.target.matches('ul')) {
        console.log("Клик по ul");
    } else if (eventData.target.matches('div')) {
        console.log("Клик по div");
    }
});

const parentContainer = document.createElement('div');
parentContainer.id = 'parent';
parentContainer.style.padding = '50px';
parentContainer.style.border = '1px solid black';

const element4 = document.createElement('button');
element4.textContent = 'click me';

const hiddenBlock = document.createElement('div');
hiddenBlock.id = 'block';
hiddenBlock.textContent = 'Скрытый блок';
hiddenBlock.style.padding = '20px';
hiddenBlock.style.border = '1px solid blue';
hiddenBlock.style.display = 'none';

parentContainer.appendChild(element4);
parentContainer.appendChild(hiddenBlock);
safeAppend(parentContainer);

element4.addEventListener('click', function(eventData) {
    eventData.stopPropagation();
    hiddenBlock.style.display = 'block';
});

parentContainer.addEventListener('click', function() {
    hiddenBlock.style.display = 'none';
});

const dynamicList = document.createElement('ul');
dynamicList.style.padding = '20px';
dynamicList.style.border = '1px solid red';

for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `item ${i}`;
    dynamicList.appendChild(listItem);
}

const addItemButton = document.createElement('button');
addItemButton.textContent = 'Добавить новый пункт';
safeAppend(dynamicList);
safeAppend(addItemButton);

dynamicList.addEventListener('click', function(eventData) {
    eventData.target.textContent = eventData.target.textContent + '!';
});

addItemButton.addEventListener('click', function() {
    const newListItem = document.createElement('li');
    newListItem.textContent = `Новый item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newListItem);
});

const complexList = document.createElement('ul');
complexList.style.padding = '20px';
complexList.style.border = '1px solid blue';

for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `item <i>italic</i> item`;
    complexList.appendChild(listItem);
}

const addComplexButton = document.createElement('button');
addComplexButton.textContent = 'Добавить сложный пункт';
safeAppend(complexList);
safeAppend(addComplexButton);

complexList.addEventListener('click', function(eventData) {
    const listItem = eventData.target.closest('li');
    if (listItem) {
        listItem.innerHTML = listItem.innerHTML + '!';
    }
});

addComplexButton.addEventListener('click', function() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `Новый item <i>italic</i> item`;
    complexList.appendChild(newListItem);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM загружен, все элементы добавлены");
    });
} else {
    console.log("DOM уже загружен, все элементы добавлены");
}