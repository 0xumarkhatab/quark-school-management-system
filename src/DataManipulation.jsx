export function getTeacherClasses(Identifier, list) {
  let mine = [];
  mine = list?.filter((item) => item.Teacher === Identifier);
  return mine;
}

export function getStudentClasses(Identifier, list) {
  let mine = [];
  mine = list?.filter((item) => item.Students.indexOf(Identifier) >= 0);
  return mine;
}
