/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
};
