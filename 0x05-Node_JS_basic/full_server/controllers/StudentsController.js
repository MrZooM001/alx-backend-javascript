import readDatabase from '../utils';

const allowedFields = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(path)
      .then((studentGroups) => {
        const resultParts = ['This is the list of our students'];

        // eslint-disable-next-line max-len
        const sortedFields = Object.entries(studentGroups).sort(([fieldA], [fieldB]) => fieldA.toLowerCase().localeCompare(fieldB.toLowerCase()));

        for (const [field, group] of sortedFields) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          resultParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
        response.status(200).send(resultParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(`Cannot load the database: ${err.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!allowedFields.includes(major)) {
      response.status(400).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((studentGroups) => {
        if (!studentGroups[major]) {
          response.status(200).send('List: ');
          return;
        }

        const studentNames = studentGroups[major].map((student) => student.firstname).join(', ');
        response.status(200).send(`List: ${studentNames}`);
      })
      .catch((err) => {
        response.status(500).send(`Cannot load the database: ${err.message}`);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
