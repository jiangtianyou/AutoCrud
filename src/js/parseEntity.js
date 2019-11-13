/**
 * 解析javabean输出为Array[FieldInfo]对象
 */
let {readFileSync} = require("fs");
let FieldInfo = require("../bean/FieldInfo");
/**
* 必填字段
*/
function getRequiredFields(text){
    let reg = /@NotNull[\s\S]+?private [\w<>]+ (\w+)/g,
        tmp,
        result = [];
    do {
        tmp = reg.exec(text);
        if (tmp && tmp[1]) {
            result.push(tmp[1]);
        }
    } while (tmp);
    return result;
}

module.exports = {
    getFieldsInfo:function (text) {
        if (!text) {
            console.log("文件内容不能为空");
            process.exit();
        }
        let resultArr = [],
            requiredFields = getRequiredFields(text),
            reg = /private ([\w<>]+) (\w+)/g;
        let result;
        do {
            result = reg.exec(text);
            if (result && result[1] && result[2]) {
                let fieldType = result[1],
                    fieldName = result[2],
                    required = false;
                if (requiredFields.indexOf(fieldName) !== -1) {
                    required = true;
                }
                let fieldInfo = new FieldInfo(fieldName, fieldType, required);
                let s = fieldInfo.genApiParam();
                resultArr.push(fieldInfo);
            }
        } while (result);

        return resultArr;
    },
    getClassName: function(text) {
        let reg = /class\s(\w+)\s{/;
        let result = reg.exec(text);
        if (result) {
            return result[1];
        }
        return 'UnknownClass';
    },

};



