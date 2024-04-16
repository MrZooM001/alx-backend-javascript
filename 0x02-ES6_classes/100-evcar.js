import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, car, range) {
    super(brand, motor, car);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'string') {
      throw TypeError('Range must be a string');
    } else {
      this._range = value;
    }
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
