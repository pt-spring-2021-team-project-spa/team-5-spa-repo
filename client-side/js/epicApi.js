var apiKey = "oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX";

document.addEventListener("DOMContentLoaded", submitButtonsReady);

function submitButtonsReady() {
  document
    .getElementById("dateInput")
    .addEventListener("click", function (event) {
      var request = new XMLHttpRequest();

      var date = document.getElementById("dateValue").value;
      var dateArray = date.split("-");
      var year = dateArray[0];
      var month = dateArray[1];
      var day = dateArray[2];

      request.open(
        "GET",
        "https://api.nasa.gov/EPIC/api/natural/date/" +
          date +
          "?api_key=" +
          apiKey,
        true
      );
      request.addEventListener("load", function () {
        if (request.status >= 200 && request.status < 400) {
          var response = JSON.parse(request.responseText);

          if (typeof response[0].image === "string") {
            document.getElementById("imageStatus").textContent = "Found";
            document.getElementById("imageID").src =
              "https://epic.gsfc.nasa.gov/archive/natural/" +
              year +
              "/" +
              month +
              "/" +
              day +
              "/jpg/" +
              response[0].image +
              ".jpg";
            document.getElementById("imageCaption").textContent =
              response[0].caption;
          }
        } else {
          console.log("Error in network request: " + request.statusText);
        }
      });
      document.getElementById("imageStatus").textContent =
        "Please try a different date or check your syntax!";
      request.send(null);
      event.preventDefault();
    });
}
