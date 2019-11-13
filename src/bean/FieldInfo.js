/**
 * 字段对象类
 */
let util = require('util');
module.exports = function (filedName, filedType, required) {
    this.filedName = filedName;
    this.filedType = filedType;
    this.required = filedName === 'id' ? true : required;
    this.isString = function () {
        return this.filedType === 'String';
    };
    this.isDate = function () {
        return this.filedType === 'Date';
    };
    this.isList = function () {
        return this.filedType.indexOf('List') !== -1;
    };
    this.isInteger = function () {
        return this.filedType === 'Integer';
    };
    this.unknownType = function () {
        return !this.isString()
            && !this.isDate()
            && !this.isList()
            && !this.isInteger();
    };
    this.genApiParam = function () {
        let requireInfo = !this.required ? ',require = false' : '', //空即require = true
            validateInfo = this.isString() && this.required ? '@NotBlank' : '';
        return util.format('@RequestParam(value = "%s" %s) %s %s %s',
            filedName, requireInfo, validateInfo, filedType, filedName);
    }
};