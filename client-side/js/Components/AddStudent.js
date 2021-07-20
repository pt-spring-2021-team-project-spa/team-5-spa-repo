export default function AddStudent(newStudents) {
  return `
    <h1>New Student Center</h1>
    <ul class='new_students_list'>
    ${newStudents
      .map((newStudent) => {
        return `
        <h2 class='new_student_name>Hello,${newStudent.name}. Welcome to the Space Jackr Student Center</h2>
        <h3 class='new_student_grade'>According to our calculations, you are in the ${newStudent.gradeLevel}</h3>
        `;
      })
      .join("")}
    </ul>
    `;
}
