export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw TypeError('Brand must be a string');
    } else {
      this._brand = value;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw TypeError('Brand must be a string');
    } else {
      this._motor = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw TypeError('Color must be a string');
    } else {
      this._color = value;
    }
  }

  cloneCar() {
    return new this.constructor();
  }
}
