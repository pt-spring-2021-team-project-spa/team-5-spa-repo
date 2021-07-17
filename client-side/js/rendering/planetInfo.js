function ParentInfo(parentInfo){
    return `
    <h1>Welcome Parents To JackR Learning Center</h1>
    <ul class="students">
    ${parentInfo
      .map((parent) => {
        return `
        <li class="aStudent_name">${parent.name}</li>
        <li class="student_grade">${student.grade}</li>
        `;
      })
      .join("")}
    </ul>
    `;
    `
}