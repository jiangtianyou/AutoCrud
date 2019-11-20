import * as fs from 'fs';

export function readFile(fullPath: string): string {
  let text: string = '';
  try {
    text = fs.readFileSync(fullPath, 'utf8');
  }catch (e) {
    console.error(`readFile ${fullPath} Error. Cause: ${e.toString()}`)
  }
  return text.replace(/\r\n/g,'\n');
}


export function write(fullPath: string,content: string): void {

}


export function mkdir(dirName: string): boolean{
    return true;
}
