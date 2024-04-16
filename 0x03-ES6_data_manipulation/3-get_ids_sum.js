export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((accumulator, student) => accumulator + student.id, 0);
}
