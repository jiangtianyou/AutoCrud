var jwt = require('jsonwebtoken'),
    option = {algorithm: 'HS512'},
    secret = Buffer.from('f8b2e52038588f89b67cde581c0f9eb5','base64');
if (process.argv.length < 3) {
    console.log('参数错误');
    process.exit();
}
var input = process.argv[2].replace(":",";");

if (input.indexOf(";") === -1) {
    //是解析token
    try {
        var verify = jwt.verify(input, secret, option);
        var strings = verify.sub.split(';');
        console.log("memberId: "+strings[0],"siteId: "+strings[1]);
        process.exit();
    }catch (e) {
        console.log('解析token错误');
        process.exit();
    }
    console.log();

}

var payload = {
    sub: input,
    iat: 1516239022
};
var token = jwt.sign(payload, secret, option);
console.log(token);
