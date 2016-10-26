declare module 'ffi' {
  namespace ffi {
    function Library(libfile: string, funcs: Array<any>, lib: any): any;
    function Function(ret: any, arg: any): any;
  }

  export = ffi;
}
