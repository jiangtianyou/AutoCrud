let entity = require('./src/js/parseEntity')
let nunjucks = require('nunjucks')
let path = require('path')
// console.log('process.cwd()',process.cwd())
// console.log('__dirname',__dirname)
// console.log('__filename',__filename)
// console.log('./',path.resolve('./'))

let fs= require("fs")
let daoText = fs.readFileSync(__dirname+'/src/template/Dao.nunj', 'utf8', (err, data) => {
})
let javaText = fs.readFileSync(__dirname+'/src/Topic.java', 'utf8', (err, data) => {
})
let fieldsArr = entity.getFieldsInfo(javaText)
let className = entity.getClassName(javaText)
let renderString = nunjucks.renderString(daoText, {username: className, foo: {bar: '一个测试'}})
let fileWriter = require('./src/js/fileWriter')
// console.log(renderString)


// 1、检验输入文件并获取路径

let beanPath = '';
const pck = require('./package'),
    exit = process.exit,
    inquire = require('inquirer'),
    program = require('commander');
program.version(pck.version)
    .description('根据javaBean生成CRUD代码')
    .arguments('<bean> [env]')
    .action(function (bean) {
        if (!bean) {
            console.error("请输入BeanJava文件的位置")
            exit();
        } else {
            //校验文件是否存在
            beanPath = process.cwd() + '/'+bean;
            if (fs.existsSync(beanPath)) {
                if (fs.statSync(beanPath).isDirectory()) {
                    console.error('输入的路径不能是文件夹')
                    exit();
                }
            }else{
                console.error('找不到输入的文件')
                exit();
            }
            if (!beanPath.endsWith('java')) {
                console.error('输入的必须是java文件')
                exit();
            }
        }
    });
program.parse(process.argv)

// todo 添加配置项的set命令

// 2.从beanPath中提取出文件路径

