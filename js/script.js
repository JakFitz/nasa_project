var submit = document.querySelector("#submit");
var camId = "FHAZ";
console.log(camId);

function setCamVal() {
    var select = document.getElementById("cameraId");
    var camId = select.options[select.selectedIndex].value;
    console.log(camId);
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=" + camId +"&api_key=ueGl04f2AeAlKgT7JOzMv1onJoTXoF1zqrBidAQB";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                 appendData(data);

            })
            .catch(function (err) {
                 console.log('error: ' + err);
             });

            //Show data
        function appendData(data) {
            console.log(data)
            console.log(data.photos.length)

            // var response = JSON.parse(req.responseText);
            var mainContainer = document.getElementById("title");
            document.querySelector("#img").setAttribute("src", data.photos[1].img_src)
            mainContainer.textContent = data.title;
            // for (var i = 0; i < data.length; i++) {


            // document.getElementById("title").textContent = response.title;
            // mainContainer.appendChild(div);
            // }

            }

}


submit.addEventListener("click", setCamVal);
