var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "L0OJs7oDz2zUWKWzCpYFwYuggr5eEzlOjgTK4Pxg";

req.open("GET", url + api_key);
req.send();

// Getting picture of the day data from API
req.addEventListener("load", function () {
  if (req.status == 200 && req.readyState == 4) {
    var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    console.log(title);
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
});
