/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

var obj = { test: 1 };


function clone (obj) {

}

clone(obj) !== obj; // это разные объекты
clone(obj).test === obj.test; // но содежат одни и те же поля