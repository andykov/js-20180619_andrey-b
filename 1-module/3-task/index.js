'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; ++i) {
        // console.log(parseInt(arr[i]));
        // console.log(isNaN(arr[i]));
        // console.log(!isNaN(parseFloat(arr[i])) && isFinite(arr[i]));

        // if (parseInt(parseFloat(arr[i]))) {
        //     console.log(arr[i]);
        // }

        if (!isNaN(parseInt(arr[i]))) {
            console.log(arr[i]);
        }
    }
}

console.log(getMinMax(inputData)); // ожидается [-5.8, 73]

