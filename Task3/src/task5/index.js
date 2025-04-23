
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    // Все версии массива
    const history = [initialCommit ? [...initialCommit] : []];

    return {
        // Возвращает последнюю версию массива
        head() {
            return [...history[history.length - 1]];
        },
        
        // Возвращает полную историю версий массива
        history() {
            return history.map(version => [...version]);
        },
        
        // Добавляет новый элемент и сохраняет новую версию массива
        push(element) {
            const newVersion = [...this.head(), element];
            history.push(newVersion);
        },
        
        // Удаляет последний элемент и сохраняет новую версию массива
        pop() {
            const current = this.head();
            if (current.length === 0) {
                throw new Error("Can't pop from empty array");
            }
            const popped = current.pop();
            history.push([...current]);
            return popped;
        }
    };
};