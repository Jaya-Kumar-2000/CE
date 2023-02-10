
// Initialise the Latitude and logititude

let LATELEMENT;

let LONGELEMENT;


// Display the weather of the location

let weatherDisplay = function(){

    let xhr = new XMLHttpRequest();

    console.log(LATELEMENT);
    console.log(LONGELEMENT);

    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState===4){

            let JsonResponse = JSON.parse(this.response);

            // document.querySelector("#HumiValue").innerText = JsonResponse.list[0].main.humidity ;

            // get the weather values from weather api 
            document.querySelector("#HumiValue").innerText = JsonResponse.list[0].main.humidity + "%";
            
            document.querySelector("#CountryName").innerText = JsonResponse.city.name ;

            document.querySelector("#windSpeed").innerText = JsonResponse.list[0].wind.speed + "km/h" ;

            document.querySelector("#min_temp").innerText = JsonResponse.list[0].main.temp_min + " K" ;

            document.querySelector("#max_temp").innerText = JsonResponse.list[0].main.temp_max + " K" ;

            document.querySelector("#showTemparature").innerText = JsonResponse.list[0].main.temp + " K" ;

            document.querySelector("#climate").innerText = JsonResponse.list[0].weather[0].description ;

            document.querySelector("#Icon").innerHTML = Iconfunc(Icon) ;

            function Iconfunc(Icon){
                
                if (JsonResponse.list[0].weather[0].icon == "02d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-clouds-sun"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "01d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fas fa-cloud-sun"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "01n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-clouds-sun"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "03d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fas fa-clouds-sun"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "03n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fas fa-clouds-sun"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "02n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fad fa-clouds"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "04n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-cloud-meatball"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "04d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-smoke"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "09d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-cloud-showers"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "09n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fas fa-cloud-moon-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "10d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-cloud-sun-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "10n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fas fa-cloud-moon-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "11d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fal fa-poo-storm"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "11n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-poo-storm"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "13d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fal fa-cloud-snow"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "13n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fal fa-cloud-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "50d"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="far fa-cloud-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "50n"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fal fa-cloud-sun-rain"></i>` ;
                }
                if (JsonResponse.list[0].weather[0].icon == "*"){
                    document.querySelector("#defaultIcon").style.display = "none" ;
                    return `<i class="fal fa-cloud-sun-rain"></i>` ;
                }
            }


            

            console.log(document.querySelector("#CountryName").innerText);
            console.log(document.querySelector("#HumiValue").innerText);

            console.log(JsonResponse);

            // console.log("hiii");

        }

       
    }
    xhr.open("GET",`https://api.openweathermap.org/data/2.5/forecast?lat=${LATELEMENT}&lon=${LONGELEMENT}&appid=02794db330eb7e86a55efca7f9003cea`);

    xhr.send();

    // console.log(" why") 

}

// get the current location weather 
let getCurrentLocation = function(){
    function success(pos) {
      let crd = pos.coords;
      LATELEMENT = crd.latitude;
      LONGELEMENT = crd.longitude;
      weatherDisplay();
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

     navigator.geolocation.getCurrentPosition(success, error); 
  }

getCurrentLocation();





// click the change location and show the map

let showMap = function(){
    document.querySelector(".closed").style.display ="block";
    document.querySelector("#weatherApp").style.display="none";

    let map = L.map('map').setView([12.84477452278346, 80.0607204437256], 13);

    let attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=kXJOXSuYdFMERBwT0kyD',{attribution}).addTo(map);

    let theMarker = L.marker([12.84477452278346,80.0607204437256]).addTo(map);

    // console.log(" hello")

    map.on('click',function(e){
       LATELEMENT=e.latlng.lat;
       LONGELEMENT=e.latlng.lng;
        if (theMarker != undefined) {
          map.removeLayer(theMarker);
        };
        //Add a marker to show where you clicked.
        theMarker = L.marker([LATELEMENT,LONGELEMENT]).addTo(map);  
        weatherDisplay();
      });

     
}

document.querySelector(".countrySearch").addEventListener("click", showMap);

let clear = function(){
    // getCurrentLocation();
    // location.reload();
    weatherDisplay();
    document.querySelector("#weatherApp").style.display="block";
    document.querySelector(".closed").style.display = "none";
}

document.querySelector("#close").addEventListener("click",clear);


 