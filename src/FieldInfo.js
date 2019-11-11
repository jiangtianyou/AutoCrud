/**
 * 字段对象类
 */
var util = require('util');
module.exports = function (filedName, filedType, required) {
    this.filedName = filedName;
    this.filedType = filedType;
    this.required = required;
    this.isString = function () {
        return this.filedType === 'String';
    };
    this.isDate = function () {
        return this.filedType === 'Date';
    };
    this.isList = function () {
        return this.filedType === 'List';
    };
    this.isInteger = function () {
        return this.filedType === 'Integer';
    };
    this.unknownType = function () {
        return this.filedType !== 'String'
            && this.filedType !== 'Date'
            && this.filedType !== 'List'
            && this.filedType !== 'Integer';
    };
    this.genApiParam = function () {
        let requireInfo = !this.required ? ',require = false' : '', //空即require = true
            validateInfo = isString() && this.required ? '@NotBlank' : '';
        return util.format('@RequestParam(value = "%s" %s) %s %s %s',
            filedName, requireInfo, validateInfo, filedType, filedName);
    }
};