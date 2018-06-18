'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
    var arr = str.match(/-?\d+(\.\d+)?/g).map(function (n) {
        return +n;
    });

    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);

    return {min, max}
}

console.log(getMinMax(inputData)); // ожидается [-5.8, 73]

