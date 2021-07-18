function getRequest(location, callback) {
  fetch(location)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData))
    .catch((err) => console.log(err));
}

export default {
  getRequest,
};
