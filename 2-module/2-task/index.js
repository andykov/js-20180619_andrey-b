/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(data, value) {
    var result = [];

    for (var key in data) {
        var keyVal = data[key];

        if (typeof keyVal === 'object') {
            var tempRes = find(keyVal, value);
            // result.push(key + '.' + tempRes[keyVal]);

            if(tempRes.length > 0) {
                for (var tempKey in tempRes) {
                    result.push(key + '.' + tempRes[tempKey]);
                }
            }

        } else if (keyVal == value) {
            result.push(key);
        }

    }

    return result;
}

var obj = {
    options: {
        color: 'red'
    },
    style: {
        border: {
            color: 'red'
        }
    }
};

console.log(find(obj, 'red'));