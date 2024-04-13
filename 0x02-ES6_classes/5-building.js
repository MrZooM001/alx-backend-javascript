export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = value;
  }
}
