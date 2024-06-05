const fs = require('fs');

/**
 * Count students in a specific field
*
* @param {string} path: database .csv file path
* @returns {Promise<void>}
*/
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.access(path, fs.constants.F_OK, (accessErr) => {
    if (accessErr) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, 'utf8', (readErr, data) => {
      if (readErr) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const studentNames = lines.shift().split(',').slice(0);

      /* eslint-disable no-param-reassign */
      const studentGroups = lines.reduce((groups, line) => {
        if (line.trim() === '') return groups;

        const record = line.split(',');
        const values = record.slice(0);
        const field = record[record.length - 1];
        groups[field] = groups[field] || [];

        // eslint-disable-next-line max-len
        groups[field].push(Object.fromEntries(studentNames.map((name, index) => [name, values[index]])));
        return groups;
      }, {});

      // eslint-disable-next-line max-len
      const totalStudents = Object.values(studentGroups).reduce((previous, current) => previous + current.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const namesList = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${namesList}`);
      }

      resolve();
    });
  });
});

module.exports = countStudents;
