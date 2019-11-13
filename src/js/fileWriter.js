
let {readFileSync} = require("fs");
let FieldInfo = require("../bean/FieldInfo");
let baseDir = '';

function getRequiredFields() {

}

module.exports = {
    setBaseDir: function(dir){
      baseDir = dir;
    },
    writeDao: function (text) {
    },
    writeApi: function (text) {
    },
    writeService: function (text) {
    },
    writeController: function (text) {
    },
    writerEntity: function (text) {
    },
};



