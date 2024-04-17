export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) { throw new Error('Position outside range'); }

  const bfr = new ArrayBuffer(length);
  const view = new Int8Array(bfr);
  view[position] = value;
  return new DataView(bfr);
}
