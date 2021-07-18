export default function Parents(parents) {
  return `
<h1>Welcome Guardians</h1>
<ul>
${parents.map((parent) => {
  return `
    <li class="parentInfo">
    <h3 class="parent-name">Guardian Name: ${parent.name}</h3>
    <h3 class="parent-name">Student Name: ${parent.students}</h3>
    <input type='hidden' id='parentId' value='${parent.id}'>
    </li>
    `;
})}
</ul>
`;
}
