/**
 * 字段对象类
 */
var util = require('util');
module.exports = function (filedName, filedType,required) {
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
    this.setRequired = function (required) {
        this.required = required;
    };
    this.unknownType = function () {
        return this.filedType !== 'String' && this.filedType !== 'Date' && this.filedType !== 'List' ;
    };
    this.genApiParam = function () {
        return util.format('@RequestParam(value = "%s",require=false) String %s', filedName, filedName);
    }
};