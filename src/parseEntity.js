/**
 * 解析javabean输出为Array[FieldInfo]对象
 */
let fs = require("fs");
let FieldInfo = require("./FieldInfo");
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


module.exports = function parseFile() {
    let resultArr = [];
    fs.readFile('./src/Topic.java', 'utf8', (err, data) => {
        if (err) {
            console.log("读取文件处出错");
        }
        let text = data,
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
                console.log(s);
                resultArr.push(fieldInfo);
            }
        } while (result);
    });

    return resultArr;
};


