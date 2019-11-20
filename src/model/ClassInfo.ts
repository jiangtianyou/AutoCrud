/**
 * javaBean信息
 */

enum Type {
    String = 'String',
    Integer = 'Integer',
    Date = 'Date',
    List = 'List'
}

interface UrlencodedArg {
    key: string,
    type: string,  // 暂时全部为text
    value: string
}

export default class EntityInfo {
    type: Type;
    filedName: string;
    argsArr: string[];
    fullPath: string | undefined;
    moduleName: string | undefined;
}

