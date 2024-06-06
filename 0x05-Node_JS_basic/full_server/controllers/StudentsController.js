import readDatabase from '../utils';

const allowedFields = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path).then((studentGroups) => {
      const responseParts = ['This is the list of our students'];
      const storedFields = (fieldA, fieldB) => {
        if (fieldA[0].toLowerCase() < fieldB[0].toLowerCase()) {
          return -1;
        }
        if (fieldA[0].toLowerCase() > fieldB[0].toLowerCase()) {
          return 1;
        }
        return 0;
      };

      for (const [field, group] of Object.entries(studentGroups).sort(storedFields)) {
        responseParts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }
      response.status(200).send(responseParts.join('\n'));
    }).catch((err) => {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    if (!allowedFields.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path).then((studentGroups) => {
      let text = '';
      if (Object.keys(studentGroups).includes(major)) {
        const group = studentGroups[major];
        text = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }
      response.status(200).send(text);
    }).catch((err) => {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
