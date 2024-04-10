export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments (allEmployees) {
      let departmentsCount = 0;
      for (const employee in allEmployees) {
        departmentsCount += 1;
      }
      return departmentsCount;
    },
  };

  return reportObj;
}
