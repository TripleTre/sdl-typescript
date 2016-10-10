declare module 'ffi' {
  namespace ffi {
    function Library(libfile: string, funcs: Array<any>, lib: any): any;
  }

  export default ffi;
}
