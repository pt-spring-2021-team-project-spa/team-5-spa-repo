export default function ParentInfo(parentInfo) {
  return `
    <h1>${parentInfo.name}</h1>
    ${parentInfo.results
      .map((guardian) => {
        return `
        <h3>${guardian.name}</h3>
        `;
      })
      .join("")}
    `;
}
