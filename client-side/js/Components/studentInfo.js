export default function StudentInfo(studentInfo) {
  return `
    <h1>Welcome Students To JackR Learning Center</h1>
    <ul class="students">
    ${studentInfo
      .map((student) => {
        return `
        <li class="aStudent_name">${student.name}</li>
        <li class="student_grade">${student.grade}</li>
        `;
      })
      .join("")}
    </ul>
    `;
}
