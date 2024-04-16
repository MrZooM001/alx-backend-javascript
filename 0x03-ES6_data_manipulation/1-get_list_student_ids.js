export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  }

  return arrObj.map((obj) => obj.id);
}
