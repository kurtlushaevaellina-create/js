const targetElement = document.getElementById('elem');
console.log('lastChild:', targetElement.lastChild);
console.log('lastElementChild:', targetElement.lastElementChild);
console.log('nextSibling:', targetElement.nextSibling);
console.log('nextElementSibling:', targetElement.nextElementSibling);

console.log('previousSibling:', targetElement.previousSibling);
console.log('previousElementSibling:', targetElement.previousElementSibling);

console.log('--- childNodes (все узлы) ---');
for (let childNode of targetElement.childNodes) {
    console.log(childNode);
}

console.log('--- nodeName каждого узла ---');
for (let childNode of targetElement.childNodes) {
    console.log(childNode.nodeName);
}

console.log('--- только элементы и текстовые узлы ---');
for (let childNode of targetElement.childNodes) {
    if (childNode.nodeType === 1 || childNode.nodeType === 3) {
        console.log(childNode);
    }
}

console.log('--- textContent или data ---');
for (let childNode of targetElement.childNodes) {
    console.log(childNode.textContent || childNode.data);
}

console.log('--- текстовые узлы и комментарии ---');
for (let childNode of targetElement.childNodes) {
    if (childNode.nodeType === 3 || childNode.nodeType === 8) {
        console.log(childNode.data);
    }
}

console.log('--- элементы и текст отдельно ---');
for (let childNode of targetElement.childNodes) {
    if (childNode.nodeType === 1) {
        console.log('Элемент:', childNode.textContent);
    } else if (childNode.nodeType === 3) {
        console.log('Текст:', childNode.data);
    }
}

console.log('--- модификация DOM: добавляем типы ---');
for (let childNode of targetElement.childNodes) {
    let nodeTypeName;
    switch(childNode.nodeType) {
        case 1: nodeTypeName = 'элемент'; break;
        case 3: nodeTypeName = 'текст'; break;
        case 8: nodeTypeName = 'комментарий'; break;
        default: nodeTypeName = 'другой тип';
    }
    
    if (childNode.nodeType === 1) {
        childNode.textContent += ` [${nodeTypeName}]`;
    } else if (childNode.nodeType === 3 || childNode.nodeType === 8) {
        childNode.data += ` [${nodeTypeName}]`;
    }
}