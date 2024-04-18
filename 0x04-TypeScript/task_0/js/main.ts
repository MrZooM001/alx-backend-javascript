interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Tom',
  lastName: 'Cruise',
  age: 14,
  location: 'USA'
};

const student2: Student = {
  firstName: 'Denzel',
  lastName: 'Washington',
  age: 17,
  location: 'USA'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headersRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headersRow.appendChild(firstNameHeader);
headersRow.appendChild(locationHeader);
thead.appendChild(headersRow);
table.appendChild(thead);

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
