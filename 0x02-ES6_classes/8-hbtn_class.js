export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw TypeError('Size must be a number');
    } else {
      this._size = value;
    }
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw TypeError('Location must be a string');
    } else {
      this._location = value;
    }
  }

  [Symbol.toPrimitive](myType) {
    return myType === 'number' ? this._size : this._location;
  }
}
