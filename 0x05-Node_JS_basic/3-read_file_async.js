const fs = require('fs').promises;

/**
 * Count students in a specific field
*
* @param {string} path: database .csv file path
* @returns {Promise<void>}
*/
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const studentNames = lines.shift().split(',').slice(0, -1);

    /* eslint-disable no-param-reassign */
    const studentGroups = lines.reduce((groups, line) => {
      const record = line.split(',');
      const values = record.slice(0, -1);
      const field = record[record.length - 1];
      groups[field] = groups[field] || [];

      groups[field].push(Object.fromEntries(studentNames
        .map((name, index) => [name, values[index]])));
      return groups;
    }, {});

    const totalStudents = Object.values(studentGroups)
      .reduce((previous, current) => previous + current.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const namesList = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}, List: ${namesList}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
