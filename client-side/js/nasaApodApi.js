let imageButton = document.querySelector("#image");

imageButton.addEventListener("click", () => {
  console.log("button clicked");
  sendApiRequest();
});

async function sendApiRequest() {
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX"
  );

  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}
function useApiData(data) {
  document.querySelector("#content").innerHTML += data.explanation;
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`;
}
