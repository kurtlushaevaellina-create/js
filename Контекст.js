function safeAppend(element) {
    if (document.body) {
        document.body.appendChild(element);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(element);
        });
    }
}

const input1 = document.createElement('input');
input1.id = 'elem1';
input1.value = 'test';
safeAppend(input1);

input1.addEventListener('blur', parentFunction);

function parentFunction() {
    console.log("№1 - parent this.value:", this.value);
    
    function childFunction() {
        console.log("№1 - child this.value:", this.value);
    }
    childFunction();
}

const input2 = document.createElement('input');
input2.id = 'elem2';
input2.value = '3';
safeAppend(input2);

input2.addEventListener('blur', calculateSquare);

function calculateSquare() {
    let contextHolder = this;
    
    function computeSquare() {
        return contextHolder.value * contextHolder.value;
    }
    
    alert(computeSquare());
}

const input3 = document.createElement('input');
input3.id = 'elem3';
input3.value = '3';
safeAppend(input3);

input3.addEventListener('blur', triggerCalculation);

function triggerCalculation() {
    calculateWithParam(this);
}

function calculateWithParam(contextParam) {
    alert(contextParam.value * contextParam.value);
}

const input4 = document.createElement('input');
input4.id = 'elem4';
input4.value = '3';
safeAppend(input4);

input4.addEventListener('blur', calculateWithArrow);

function calculateWithArrow() {
    const arrowCalculation = () => {
        alert(this.value * this.value);
    };
    arrowCalculation();
}

const input5 = document.createElement('input');
input5.id = 'elem5';
input5.value = 'text1';
const input6 = document.createElement('input');
input6.id = 'elem6';
input6.value = 'text2';
const input7 = document.createElement('input');
input7.id = 'elem7';
input7.value = 'text3';

safeAppend(input5);
safeAppend(input6);
safeAppend(input7);

function showValue() {
    console.log(this.value);
}

showValue.call(input5);
showValue.call(input6);
showValue.call(input7);

const input8 = document.createElement('input');
input8.id = 'elem8';
input8.value = 'hello';
safeAppend(input8);

function formatMessage(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

formatMessage.call(input8, 'Smit', 'John');

const input9 = document.createElement('input');
input9.id = 'elem9';
input9.value = 'hello';
safeAppend(input9);

function formatWithApply(surname, name) {
    console.log(this.value + ', ' + surname + ', ' + name);
}

formatWithApply.apply(input9, ['Smit', 'John']);

const input10 = document.createElement('input');
input10.id = 'elem10';
input10.value = 'hello';
safeAppend(input10);

function boundFunction(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

boundFunction = boundFunction.bind(input10);

boundFunction('John', 'Smith');
boundFunction('Eric', 'Luis');

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM загружен, все элементы добавлены");
    });
} else {
    console.log("DOM уже загружен, все элементы добавлены");
}