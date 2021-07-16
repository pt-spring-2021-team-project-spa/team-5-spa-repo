var apiKey = "oUr2pzLOuwjgmfRew8Jna0IkUEJou0Zt30a5jIeX";

document.addEventListener("DOMContentLoaded", submitButtonsReady);

function submitButtonsReady() {
  document
    .getElementById("dateInput")
    .addEventListener("click", function (event) {
      var request = new XMLHttpRequest();
      var date = document.getElementById("dateValue").value;
      var roverName = "";

      var buttonStatus1 = document.getElementById("button1").checked;
      var buttonStatus2 = document.getElementById("button2").checked;
      var buttonStatus3 = document.getElementById("button3").checked;

      if (buttonStatus1 === true) {
        roverName = "curiosity";
      } else if (buttonStatus2 === true) {
        roverName = "opportunity";
      } else {
        roverName = "spirit";
      }
      request.open(
        "GET",
        "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
          roverName +
          "/photos?earth_date=" +
          date +
          "&api_key=" +
          apiKey,
        true
      );
      request.addEventListener("load", function () {
        if (request.status >= 200 && request.status < 400) {
          var response = JSON.parse(request.responseText);

          document.getElementById("imageStatus").textContent = "Found";
          document.getElementById("imageID").src = response.photos[0].img_src;
          document.getElementById("roverCaption").textContent =
            response.photos[0].rover.name;
          document.getElementById("landingCaption").textContent =
            response.photos[0].rover.landing_date;
          document.getElementById("endingCaption").textContent =
            response.photos[0].rover.max_date;
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
