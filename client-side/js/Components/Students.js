import plantImg from "../../assets/planetsCard.jpg";
export default function Students(students) {
  return `
    <h1>Welcome Students</h1>
    <ul>
    ${students.map((student) => {
      return `
        <li class="student-info">
        <h3 class='student-name'>Student Name: ${student.name}</h3>
        <h3>Student Grade: ${student.gradeLevel}</h3>
        <h3>Guardian Name: ${student.parents}</h3>
        <input type='hidden' id='studentid' value='${student.id}'>
        </li>
        `;
    })}
    </ul>
    `;
}
