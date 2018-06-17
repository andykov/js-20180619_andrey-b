/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    return Math.pow(Number(m), Number(n).toFixed(0));
}

pow(prompt('Введите число:'), prompt('Введите степень:'));
