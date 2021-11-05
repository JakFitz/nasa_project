
var camId = "FHAZ";
var photoCount = document.querySelector("phoCnt");
var select = document.querySelector("#cameraId");
var photoSelect = document.querySelector("#photoSelect");
var photos = [];

console.log(camId);
getPic();


//function setCamVal() {
    //var select = document.getElementById("cameraId");
   // camId = select.options[select.selectedIndex].value;
    //console.log(camId);
   // getPic();
//}

function handleSelectChange(e){
    console.log(e.target.value);
    camId = e.target.value;
    getPic();
}

function handlePhotoSelect(e){
    var index = e.target.value;
    console.log(index)
    if(isNaN(index) || index > photos.length || index < 1) return 
    console.log("GOOD")
    document.querySelector("#img").setAttribute("src", photos[index-1].img_src)
}   


function getPic() {
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=" + camId +"&api_key=ueGl04f2AeAlKgT7JOzMv1onJoTXoF1zqrBidAQB";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                 appendData(data);
                photos = data.photos;
            })
            .catch(function (err) {
                 console.log('error: ' + err);
             });

            //Show data
        function appendData(data) {
            console.log(data)
            console.log(data.photos.length);
            document.querySelector("#photoSelect").setAttribute("placeholder", `Please enter a number between 1 and ${data.photos.length}`)
            photoCount = data.photos.length;
            // var response = JSON.parse(req.responseText);
            var mainContainer = document.getElementById("title");
            document.querySelector("#img").setAttribute("src", data.photos[1].img_src)
            mainContainer.textContent = data.title;

            //set limit on number input
            photoSelect.setAttribute("max", data.photos.length);
            photoSelect.setAttribute("min", 1);
            // for (var i = 0; i < data.length; i++) {


            // document.getElementById("title").textContent = response.title;
            // mainContainer.appendChild(div);
            // }

        }
    }

    
//submit.addEventListener("click", setCamVal);
select.addEventListener("change", handleSelectChange);
photoSelect.addEventListener("input", handlePhotoSelect);