export default function ParentInfo(parentInfo) {
  return `
      <h1>Welcome Guardian!</h1>
      ${parentInfo
        .map((parent) => {
          return `
          <h3>Guardian Name:${parent.name}</h3>
          <p>Student Name:${parent.students}</p>
          `;
        })
        .join("")}
      `;
}
