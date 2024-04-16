export default function updateStudentGradeByCity(listStudents, city, newGradesArr) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const newGrade = newGradesArr.find((grade) => grade.studentId === student.id);
    return {
      ...student, grade: newGrade ? newGrade.grade : 'N/A'
    };
  });
}
