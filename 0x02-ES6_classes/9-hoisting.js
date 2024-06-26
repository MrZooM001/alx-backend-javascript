export class HolbertonClass {
  constructor(year, location) {
    if (typeof year !== 'number') { throw new TypeError('Year must be a number'); }
    if (typeof location !== 'string') { throw new TypeError('Location must be a string'); }

    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value === 'number') {
      this._year = value;
    } else {
      throw new TypeError('Year must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new TypeError('Location must be a string');
    }
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName !== 'string') { throw new TypeError('First name must be a string'); }
    if (typeof lastName !== 'string') { throw new TypeError('Last name must be a string'); }
    if (!(holbertonClass instanceof HolbertonClass)) { throw new TypeError('holbertonClass must be an instance of HolbertonClass'); }

    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(value) {
    if (typeof value === 'string') {
      this._firstName = value;
    } else {
      throw new TypeError('First name must be a string');
    }
  }

  set lastName(value) {
    if (typeof value === 'string') {
      this._lastName = value;
    } else {
      throw new TypeError('Last name must be a string');
    }
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass._year} - ${this._holbertonClass._location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export default [student1, student2, student3, student4, student5];
