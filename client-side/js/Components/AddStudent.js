export default function AddStudent(newStudents) {
  return `
  <h1>Welcome to the Learning Center!</h1>

  <section class="add_student">
    <input
      type="text"
      class="add_student_name"
      placeholder="Enter Student Name"
    />
    <button class="submit">Continue</button>

    <h2>Little Kids</h2>
  </section>
  <select name="gradeLevel" id="grade">
    <option value="0">Select Your Grade</option>
    <option value="1">1st Grade</option>
    <option value="2">2nd Grade</option>
    <option value="3">3rd Grade</option>
    <option value="4">4th Grade</option>
  </select>
  <h3>Big Kids</h3>
  <select name="bigKids" id="bigKids">
    <option value="0">Select Your Grade</option>
    <option value="5">5th Grade</option>
    <option value="6">6th Grade</option>
    <option value="7">7th Grade</option>
    <option value="8">8th Grade</option>
  </select>
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
