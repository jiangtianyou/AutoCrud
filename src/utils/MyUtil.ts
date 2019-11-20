import * as fs from 'fs';
/**
* 一些不容易分类的杂乱Util
*/


export function fetalErr(msg: string): void {
    console.error(msg);
    process.exit();
}
