/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    if (typeof obj === 'object' && obj !== null) {
        let objClone = {};

        for (var key in obj) {
            objClone.prop = 'value';
            objClone[key] = obj[key];
        }

        return objClone;
    }
};

let obj = {test: { test2: { test3: null } }};

console.log(clone(obj) !== obj); // это разные объекты
console.log(clone(obj).test === obj.test); // но содежат одни и те же поля
console.log(clone(obj).prop === obj.prop); // но содежат одни и те же поля

console.log(clone(obj));
console.log(typeof clone(obj).test.test2 === 'object' && typeof obj.test.test2 === 'object');
