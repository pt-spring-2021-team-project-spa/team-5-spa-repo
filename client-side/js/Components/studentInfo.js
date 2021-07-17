export default function StudentInfo(studentInfo) {
  return `
    <h1>Welcome Students To JackR Learning Center</h1>
    <ul class="students">
    ${studentInfo
      .map((student) => {
        return `
        <li class="aStudent_name">Student Name:${student.name}</li>
     
        `;
      })
      .join("")}
    ${studentInfo
      .map((parentInfo) => {
        return `
      <li>Guardian Name: ${parentInfo.name}</li>
      `;
      })
      .join("")}
    </ul>
    `;
}
