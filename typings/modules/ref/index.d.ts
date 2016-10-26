declare module 'ref' {
  interface ctype {
    name: string;
    size: number;
    get: Function;
    set: Function;
    alignment: number;
  }

  interface types {
    void: ctype,
    int8: ctype,
    uint8: ctype,
    int16: ctype,
    uint16: ctype,
    int32: ctype,
    uint32: ctype,
    int64: ctype,
    uint64: ctype,
    float: ctype,
    double: ctype,
    CString: ctype,
    bool: ctype,
    byte: ctype,
    char: ctype,
    uchar: ctype,
    short: ctype,
    ushort: ctype,
    int: ctype,
    uint: ctype,
    long: ctype,
    ulong: ctype,
    longlong: ctype,
    ulonglong: ctype,
    size_t: ctype
  }

  export function alloc(type: any, value?: any): any;
  export function deref(buf: any): any;
  export function refType(arg: any): any;
  export function allocCString(str: string, charset: string): any;
  export let types: types;
}