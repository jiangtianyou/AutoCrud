import {readFile} from '../utils/FileUtil';
import * as fs from 'fs';
import {firstMatch, match} from '../utils/RegexUtil';
import {normalize} from 'path';
import ClassInfo from "../model/ClassInfo";

let BASE_URL = '';

/**
 * 解析Bean返回完整Class相关的所有信息
 */
export function parse(bean: string) :ClassInfo {
  let fullPath = getFullPath(bean);
  let beanText = readFile(fullPath);

  // todo 解析成ClassInfo格式
  return null;
}





/**
 * 提取出参数名例如[id,siteId,pageNo]
 */
function _extractArgs(text: string): string[] {
  let reg = /(?: String|Integer|List<\w+>|Set<\w+>|Long)\s+(\w+)[^\w]/g;
  return match(reg,text);
}


/**
 * 提取Mapping注解值
 */
function _extractMappingValue(text: string): string {
  let reg = /Mapping[^\n]*?"([\w|\/${}]+)"/g;
  return firstMatch(reg, text);
}

/**
 * 提取operation注解的值
 */
function _extractOperationValue(text: string): string {
  let reg = /Operation[^\n]*?"(\S+)"/g;
    return firstMatch(reg, text);
}
/**
 * 提取出方法名
 */
function _extractMethodName(text: string): string {
  let reg = /ReturnMsg\S*\s+(\w+)/g;
  return firstMatch(reg, text);
}



/**
 * 提取Controller里的每个方法签名 和 Controller签名部分(如果有的话)
 */
function _extractMethodSignature(apiText: string): string[] {
  let reg = /(@\w+Mapping[^{]*?[{;])/g;
    return match(reg, apiText);
}



function setBaseUrl(baseUrl: string): void {
  BASE_URL = baseUrl;
}

function initContext(originText: string, char: string): void {

}



function getFullPath(bean: string): string {
  bean = bean.endsWith('.java') ? bean : bean + '.java';
  let fullPath = process.cwd() + '/' + bean;
  if (fs.existsSync(fullPath)) {
    if (fs.statSync(fullPath).isDirectory()) {
      console.error('输入的路径不能是文件夹');
      process.exit();
    }
  } else {
    console.error('找不到输入的文件');
    process.exit();
  }
  if (!fullPath.endsWith('java')) {
    console.error('输入的必须是java文件');
    process.exit();
  }
  return normalize(fullPath);
}