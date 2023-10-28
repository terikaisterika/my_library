class CheckObjectHelpers {
  /**
   * убрать лишнюю вложенность массивов
   * @param {array} largeNestingArray
   * @returns
   */
  removeNestingАrray(largeNestingArray) {
    const resultingList = [];
    largeNestingArray.map((el) => {
      if (el instanceof Array) {
        el.map((el2) => resultingList.push(el2));
      } else {
        resultingList.push(el);
      }
    });
    return resultingList;
  }
  /**
   * Поиск в объекте пустых строк, null, на всякий случай undefined
   * @param {object} obj
   * @returns
   */
  checkingEmptyValues(obj) {
    const arrFromObj = Object.entries(obj);
    const arrEmtyValues = [];
    arrFromObj.forEach((el, ind) => {
      if (typeof el[1] === 'object' && el[1] !== null) {
        const res = this.checkingEmptyValues(el[1]);
        if (res.length > 0) {
          arrEmtyValues.push(res);
        }
      } else if (
        el[1] === '' ||
        typeof el[1] === 'undefined' ||
        el[1] === null
      ) {
        arrEmtyValues.push(el);
      }
    });
    const resultEmty = this.removeNestingАrray(arrEmtyValues);
    return resultEmty;
  }
  /**
   * Запуск проверки на пустой объект и дальнейших проверок:
   * на значения null, пустых строк
   * @param {*} obj
   * @returns
   */
  checkEmptyObj(obj) {
    if (Object.keys(obj).length === 0)
      return 'Заполните данные. Объект вообще пустой';
    const result = this.checkingEmptyValues(obj);
    return result;
  }
}
module.exports = new CheckObjectHelpers();
