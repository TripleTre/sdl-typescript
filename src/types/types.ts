import {types} from 'ref';
import * as ref from 'ref';

export default {
  void: types.void,
  int8: types.int8,
  uint8: types.uint8,
  int16: types.int16,
  uint16: types.uint16,
  int32: types.int32,
  uint32: types.uint32,
  int64: types.int64,
  uint64: types.uint64,
  float: types.float,
  double: types.double,
  CString: types.CString,
  bool: types.bool,
  byte: types.byte,
  char: types.char,
  uchar: types.uchar,
  short: types.short,
  ushort: types.ushort,
  int: types.int,
  uint: types.uint,
  long: types.long,
  ulong: types.ulong,
  longlong: types.longlong,
  ulonglong: types.ulonglong,
  sizet: types.size_t,
  void_p: ref.refType(types.void)
}
