class CheckValuesHelpers {
  isEmptyOrNullValue(val) {
    return val === '' || val === null ? true : false;
  }
}
module.exports = new CheckValuesHelpers();
