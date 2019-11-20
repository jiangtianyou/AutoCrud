/**
 * 返回正则匹配的第一个分组的内容
 */

export function match(reg: RegExp,text: string): string[] {
  let rtn: string[] = [];
  let result;
  do {
    result = reg.exec(text || '');
    // This is necessary to avoid infinite loops with zero-width matches
    if (result) {
      if (result.index === reg.lastIndex) {
        reg.lastIndex++;
      }
    }
    if (result && result[1]) {
      rtn.push(result[1]);
    }
  } while (result);
  return rtn;
}

export function firstMatch(reg: RegExp,text: string): string {
  return  match( reg,text)[0] || '';
}

