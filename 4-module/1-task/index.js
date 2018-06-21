'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul');

    for (let user of friends) {
        let li = document.createElement('li');
        li.innerHTML = user.firstName + ' ' + user.lastName;
        ul.appendChild(li);
    }

    return ul
}
