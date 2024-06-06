const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }

  if (path) {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const resultParts = [];
        const studentGroups = {};
        const lines = data.toString('utf-8').trim().split('\n');
        const dbField = lines[0].split(',');
        const studentNames = dbField.slice(0, dbField.length - 1);

        for (const line of lines.slice(1)) {
          // eslint-disable-next-line no-continue
          if (line.trim() === '') continue;

          const record = line.split(',');
          const values = record.slice(0, record.length - 1);
          const field = record[record.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentNames.map((name, index) => [name, values[index]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups)
          .reduce((previous, current) => (previous || []).length + current.length);

        resultParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          resultParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }

        resolve(resultParts.join('\n'));
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
