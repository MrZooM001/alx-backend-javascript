export default function createIteratorObject(report) {
  let employees = [];
  for (const employee of Object.values(report.allEmployees)) {
    employees = [...employees, ...employee];
  }
  return employees;
}
