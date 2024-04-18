interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [properyName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacher {
  (firstName: string, lastName: string): string;
}

const printDirector: printTeacher = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printDirector('Hazem', 'Magdy'));


interface StudentClsInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClsInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}