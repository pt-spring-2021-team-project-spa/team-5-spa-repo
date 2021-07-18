export default function StudentInfo(studentInfo) {
    return `
      <h1>Welcome Students To JackR Learning Center</h1>
      <p>Student Name: ${studentInfo.name}</p>
      <p>Student Grade: ${studentInfo.grade}</p>
      <p>Guardian Name: ${studentInfo.parent}</p>
      <ul class="students">
      ${studentInfo
        .map((parent) => {
          return `
        <li>Guardian Name: ${parent}</li>
        `;
        })
        .join("")}
      </ul>
      `;
  }