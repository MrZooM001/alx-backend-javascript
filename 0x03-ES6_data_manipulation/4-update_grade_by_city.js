export default function updateStudentGradeByCity(listStudents, city, newGradesArr) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const matchGrade = newGradesArr.filter((gradeObj) => gradeObj.studentId === student.id);
    const grade = matchGrade.length > 0 ? matchGrade[0].grade : 'N/A';
    return { ...student, grade };
  });
}
