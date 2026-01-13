"use strict";

function appendElement(el) {
    if (document.body) {
        document.body.appendChild(el);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(el);
        });
    }
}

const container = document.createElement('div');
container.id = 'block1';
appendElement(container);

const numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
    const p = document.createElement('p');
    p.textContent = n;
    p.addEventListener('click', function() {
        this.textContent = Number(this.textContent) + 1;
    });
    container.appendChild(p);
}

const list = document.createElement('ul');
list.id = 'list1';
appendElement(list);

const items = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];
for (let item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    let clicked = false;
    li.addEventListener('click', function() {
        if (!clicked) {
            this.textContent += '!';
            clicked = true;
        }
    });
    list.appendChild(li);
}

const grid = document.createElement('table');
grid.id = 'grid1';
grid.style.borderCollapse = 'collapse';
appendElement(grid);

for (let r = 0; r < 5; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 5; c++) {
        const cell = document.createElement('td');
        cell.textContent = 'x';
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

const inputW = document.createElement('input');
inputW.type = 'number';
inputW.placeholder = 'Ширина';
const inputH = document.createElement('input');
inputH.type = 'number';
inputH.placeholder = 'Высота';
const createBtn = document.createElement('button');
createBtn.textContent = 'Создать таблицу';
const gridHolder = document.createElement('div');

appendElement(inputW);
appendElement(inputH);
appendElement(createBtn);
appendElement(gridHolder);

createBtn.addEventListener('click', () => {
    const w = parseInt(inputW.value) || 5;
    const h = parseInt(inputH.value) || 5;
    const newTable = document.createElement('table');
    newTable.style.borderCollapse = 'collapse';
    
    for (let r = 0; r < h; r++) {
        const row = document.createElement('tr');
        for (let c = 0; c < w; c++) {
            const cell = document.createElement('td');
            cell.textContent = `${r+1}-${c+1}`;
            cell.style.border = '1px solid black';
            cell.style.padding = '10px';
            row.appendChild(cell);
        }
        newTable.appendChild(row);
    }
    
    gridHolder.innerHTML = '';
    gridHolder.appendChild(newTable);
});

const table1 = document.createElement('table');
table1.style.borderCollapse = 'collapse';
appendElement(table1);

let num = 1;
for (let r = 0; r < 5; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 5; c++) {
        const cell = document.createElement('td');
        cell.textContent = num++;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table1.appendChild(row);
}

const table2 = document.createElement('table');
table2.style.borderCollapse = 'collapse';
appendElement(table2);

let evenNum = 2;
for (let r = 0; r < 5; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 5; c++) {
        const cell = document.createElement('td');
        cell.textContent = evenNum;
        evenNum += 2;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table2.appendChild(row);
}

const table3 = document.createElement('table');
table3.style.borderCollapse = 'collapse';
appendElement(table3);

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
for (let rowData of matrix) {
    const row = document.createElement('tr');
    for (let val of rowData) {
        const cell = document.createElement('td');
        cell.textContent = val * val;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table3.appendChild(row);
}

const table4 = document.createElement('table');
table4.style.borderCollapse = 'collapse';
appendElement(table4);

const people = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600}
];

for (let person of people) {
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = person.name;
    nameCell.style.border = '1px solid black';
    nameCell.style.padding = '10px';
    row.appendChild(nameCell);
    
    const ageCell = document.createElement('td');
    ageCell.textContent = person.age;
    ageCell.style.border = '1px solid black';
    ageCell.style.padding = '10px';
    ageCell.addEventListener('click', function() {
        this.textContent = Number(this.textContent) + 1;
    });
    row.appendChild(ageCell);
    
    const salaryCell = document.createElement('td');
    salaryCell.textContent = person.salary;
    salaryCell.style.border = '1px solid black';
    salaryCell.style.padding = '10px';
    row.appendChild(salaryCell);
    
    table4.appendChild(row);
}

const table5 = document.createElement('table');
table5.style.borderCollapse = 'collapse';
const addRowBtn = document.createElement('button');
addRowBtn.textContent = 'Добавить ряд';

for (let r = 0; r < 2; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 2; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${c+1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table5.appendChild(row);
}

appendElement(table5);
appendElement(addRowBtn);

addRowBtn.addEventListener('click', () => {
    const cols = table5.rows[0].cells.length;
    const row = document.createElement('tr');
    
    for (let c = 0; c < cols; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${table5.rows.length + 1}-${c+1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    
    table5.appendChild(row);
});

const table6 = document.createElement('table');
table6.style.borderCollapse = 'collapse';
const expandBtn = document.createElement('button');
expandBtn.textContent = 'Расширить таблицу';

for (let r = 0; r < 2; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 2; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${c+1}`;
        cell.style.width = '80px';
        cell.style.height = '50px';
        cell.style.border = '1px solid black';
        row.appendChild(cell);
    }
    table6.appendChild(row);
}

appendElement(table6);
appendElement(expandBtn);

expandBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const cols = table6.rows[0].cells.length;
    
    for (let c = 0; c < cols; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${table6.rows.length + 1}-${c+1}`;
        cell.style.width = '80px';
        cell.style.height = '50px';
        cell.style.border = '1px solid black';
        newRow.appendChild(cell);
    }
    table6.appendChild(newRow);
    
    const rows = table6.querySelectorAll('tr');
    for (let r = 0; r < rows.length; r++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${rows[r].cells.length + 1}`;
        cell.style.width = '80px';
        cell.style.height = '50px';
        cell.style.border = '1px solid black';
        rows[r].appendChild(cell);
    }
});

const table7 = document.createElement('table');
table7.style.borderCollapse = 'collapse';
const doubleBtn = document.createElement('button');
doubleBtn.textContent = 'Удвоить числа';

for (let r = 0; r < 3; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 3; c++) {
        const cell = document.createElement('td');
        cell.textContent = (r * 3 + c + 1) * 10;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table7.appendChild(row);
}

appendElement(table7);
appendElement(doubleBtn);

doubleBtn.addEventListener('click', () => {
    const cells = table7.querySelectorAll('td');
    for (let cell of cells) {
        cell.textContent = Number(cell.textContent) * 2;
    }
});

const list2 = document.createElement('ul');
list2.id = 'list2';
const addItemBtn = document.createElement('button');
addItemBtn.textContent = 'Добавить элемент';

for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Элемент ${i}`;
    list2.appendChild(li);
}

appendElement(list2);
appendElement(addItemBtn);

function addRemoveHandler(item) {
    item.addEventListener('click', function() {
        this.remove();
    });
}

list2.querySelectorAll('li').forEach(addRemoveHandler);

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Новый элемент ${list2.children.length + 1}`;
    addRemoveHandler(li);
    list2.appendChild(li);
});

const list3 = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Элемент ${i}`;
    list3.appendChild(li);
}

list3.querySelectorAll('li').forEach(li => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = ' удалить';
    link.style.marginLeft = '10px';
    link.style.color = 'red';
    
    link.addEventListener('click', function(e) {
        li.remove();
        e.preventDefault();
    });
    
    li.appendChild(link);
});

appendElement(list3);

const table8 = document.createElement('table');
table8.style.borderCollapse = 'collapse';

for (let r = 0; r < 3; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 3; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${c+1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    
    const removeCell = document.createElement('td');
    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.textContent = 'удалить';
    removeLink.style.color = 'red';
    
    removeLink.addEventListener('click', function(e) {
        row.remove();
        e.preventDefault();
    });
    
    removeCell.appendChild(removeLink);
    removeCell.style.border = '1px solid black';
    removeCell.style.padding = '10px';
    row.appendChild(removeCell);
    
    table8.appendChild(row);
}

appendElement(table8);

const editArea = document.createElement('div');
const textDisplay = document.createElement('p');
textDisplay.textContent = 'Исходный текст';
const textInput = document.createElement('input');

editArea.appendChild(textDisplay);
editArea.appendChild(textInput);
appendElement(editArea);

textInput.value = textDisplay.textContent;
textInput.addEventListener('input', function() {
    textDisplay.textContent = this.value;
});

const editableList = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Элемент ${i}`;
    editableList.appendChild(li);
}

editableList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function edit() {
        const input = document.createElement('input');
        input.value = this.textContent;
        
        this.textContent = '';
        this.appendChild(input);
        input.focus();
        
        const save = () => {
            li.textContent = this.value;
            li.addEventListener('click', edit);
        };
        
        input.addEventListener('blur', save);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') save.call(this);
        });
        
        li.removeEventListener('click', edit);
    });
});

appendElement(editableList);

const editableTable = document.createElement('table');
editableTable.style.borderCollapse = 'collapse';

for (let r = 0; r < 3; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 3; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${c+1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        
        cell.addEventListener('click', function editCell() {
            const input = document.createElement('input');
            input.value = this.textContent;
            input.style.width = '100%';
            
            this.textContent = '';
            this.appendChild(input);
            input.focus();
            
            const save = () => {
                cell.textContent = this.value;
                cell.addEventListener('click', editCell);
            };
            
            input.addEventListener('blur', save);
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') save.call(this);
            });
            
            cell.removeEventListener('click', editCell);
        });
        
        row.appendChild(cell);
    }
    editableTable.appendChild(row);
}

appendElement(editableTable);

const editContainer = document.createElement('div');
for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = `Текст ${i}`;
    p.appendChild(span);
    editContainer.appendChild(p);
}

editContainer.querySelectorAll('p').forEach(p => {
    const span = p.querySelector('span');
    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.textContent = ' удалить';
    removeLink.style.marginLeft = '10px';
    removeLink.style.color = 'red';
    
    removeLink.addEventListener('click', function(e) {
        p.remove();
        e.preventDefault();
    });
    
    p.appendChild(removeLink);
    
    span.addEventListener('click', function editSpan() {
        const input = document.createElement('input');
        input.value = this.textContent;
        
        this.textContent = '';
        this.appendChild(input);
        input.focus();
        
        const save = () => {
            span.textContent = this.value;
            span.addEventListener('click', editSpan);
        };
        
        input.addEventListener('blur', save);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') save.call(this);
        });
        
        span.removeEventListener('click', editSpan);
    });
});

appendElement(editContainer);

const styleContainer = document.createElement('div');
for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = `Текст ${i}`;
    p.appendChild(span);
    styleContainer.appendChild(p);
}

styleContainer.querySelectorAll('p').forEach(p => {
    const span = p.querySelector('span');
    const styleLink = document.createElement('a');
    styleLink.href = '#';
    styleLink.textContent = ' перечеркнуть';
    styleLink.style.marginLeft = '10px';
    styleLink.style.color = 'blue';
    
    styleLink.addEventListener('click', function(e) {
        span.style.textDecoration = 'line-through';
        this.remove();
        e.preventDefault();
    });
    
    p.appendChild(styleLink);
});

appendElement(styleContainer);

const colorTable = document.createElement('table');
colorTable.style.borderCollapse = 'collapse';

for (let r = 0; r < 3; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < 3; c++) {
        const cell = document.createElement('td');
        cell.textContent = `${r+1}-${c+1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    
    const styleCell = document.createElement('td');
    const styleLink = document.createElement('a');
    styleLink.href = '#';
    styleLink.textContent = ' раскрасить';
    styleLink.style.color = 'green';
    
    let colored = false;
    
    styleLink.addEventListener('click', function(e) {
        if (!colored) {
            row.style.backgroundColor = 'lightgreen';
            colored = true;
        } else {
            row.style.backgroundColor = '';
            colored = false;
        }
        e.preventDefault();
    });
    
    styleCell.appendChild(styleLink);
    styleCell.style.border = '1px solid black';
    styleCell.style.padding = '10px';
    row.appendChild(styleCell);
    
    colorTable.appendChild(row);
}

appendElement(colorTable);

const toggleText = document.createElement('p');
toggleText.textContent = 'Скрываемый текст';
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Показать/Скрыть';

appendElement(toggleText);
appendElement(toggleButton);

let visible = true;
toggleButton.addEventListener('click', () => {
    if (visible) {
        toggleText.style.display = 'none';
        visible = false;
    } else {
        toggleText.style.display = 'block';
        visible = true;
    }
});

const activeList = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Пункт ${i}`;
    activeList.appendChild(li);
}

activeList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function() {
        if (this.style.backgroundColor === 'red') {
            this.style.backgroundColor = '';
        } else {
            this.style.backgroundColor = 'red';
        }
    });
});

appendElement(activeList);