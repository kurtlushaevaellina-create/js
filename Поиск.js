document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector('#elem');
    if(list) {
        // Цвет первого и последнего элемента
        if(list.firstElementChild) list.firstElementChild.style.color = 'red';
        if(list.lastElementChild) list.lastElementChild.style.color = 'red';

        // Добавляем "!" ко всем элементам списка
        for(let item of list.children) {
            item.textContent += '!';
        }

        // Родители через closest
        let parentDiv = list.closest('div');
        let parentWww = list.closest('.www');

        // Соседи
        let prev = list.previousElementSibling;
        let next = list.nextElementSibling;
        let next2 = next?.nextElementSibling;

        if(prev) prev.textContent += '!';
        if(next) next.textContent += '!';
        if(next2) next2.textContent += '!';

        if(prev && next){
            let tmp = prev.textContent;
            prev.textContent = next.textContent;
            next.textContent = tmp;
        }

        list.textContent = 'Текст добавлен';

        // Цвет всех <li>
        let liItems = document.getElementsByTagName('li');
        for(let li of liItems) li.style.color = 'red';

        // Цвет всех элементов с классом www
        let classElems = document.getElementsByClassName('www');
        for(let item of classElems) item.style.color = 'red';

        // Элементы внутри #parent
        let parentBlock = document.querySelector('#parent');
        if(parentBlock){
            let elems1 = parentBlock.querySelectorAll('.www');
            let elems2 = parentBlock.querySelectorAll('.ggg');
            // Например, делаем их текст синим
            elems1.forEach(el => el.style.color = 'blue');
            elems2.forEach(el => el.style.color = 'green');
        }
    }
});
