
let entity = require('./src/js/parseEntity');
let nunjucks = require('nunjucks');
let {readFileSync} = require("fs");
let daoText = readFileSync('./src/template/Dao.nunj', 'utf8', (err, data) => {});
let javaText = readFileSync('./src/Topic.java', 'utf8', (err, data) => {});
let fieldsArr = entity.getFieldsInfo(javaText);
let className = entity.getClassName(javaText);
let renderString = nunjucks.renderString(daoText, { username:className,foo: {bar:'一个测试'} });

console.log(renderString);


let fileWriter = require('./src/js/fileWriter');

fileWriter.setBaseDir('helloworld');

