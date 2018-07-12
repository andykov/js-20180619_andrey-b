'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let arr = Array.from(table.querySelectorAll('tbody tr'));

    arr.forEach(function (row, index) {

        if (row.children[3].hasAttribute('data-available')) {
            if (row.children[3].dataset.available === 'true') {
                row.classList.add('available');
            } else if (row.children[3].dataset.available === 'false') {
                row.classList.add('unavailable');
            }
        } else {
            row.hidden = true;
        }

        if (row.children[2].innerHTML === 'm') {
            row.classList.add('male');
        } else if (row.children[2].innerHTML === 'f') {
            row.classList.add('female');
        }

        if (Number(row.children[1].innerHTML) < 18) {
            row.style.textDecoration = 'line-through';
        }

    });
}