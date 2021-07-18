export default function ParentInfo(parentInfo) {
    return `
      <h1>Welcome Guardian!</h1>
      ${parentInfo
        .map((guardian) => {
          return `
          <h3>Guardian Name:${guardian.name}</h3>
          <p>Student Name:${guardian.students}</p>
          `;
        })
        .join("")}
      `;
  }