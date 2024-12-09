
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
let cityName=`${latitude},${longitude}`
if(cityName){
    getWeather(cityName);
}else{
    alert('please enter your city name')
}

    })


        , function (error) {
            console.log(error);

            alert("Unable to retrieve location. Please enable location services.");

        }
}
let allWeather = [];
async function getWeather(cityName) {
    let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=182a8f7d6826422d84701915240812&q=${cityName}&days=3`);
    let finalResult = await weather.json();
    allWeather.push(finalResult);

    display();
}

function display() {
    cartona = '';
    for (let i = 0; i < allWeather.length; i++) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdau', 'Friday', 'Saturday'];
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dateDisc = new Date(allWeather[i].location.localtime);
        let nextDay = new Date(allWeather[i].forecast.forecastday[1].date);
        let thirdDay = new Date(allWeather[i].forecast.forecastday[2].date);

        let dayNum = dateDisc.getDay();
        let dayName = days[dayNum];
        let monthNum = dateDisc.getMonth();
        let monthName = months[monthNum];
        let dayOfMonth = dateDisc.getDate();
        let nextDayNum = nextDay.getDay();
        let nextDayName = days[nextDayNum];
        let thirdDayNum = thirdDay.getDay();
        let thirdDayName = days[thirdDayNum];


        cartona += `<div class="cardes rounded-2 mt-5 ">

                 <div class="today-card col-md-4 ">
                     <div class="card-head py-1 d-flex justify-content-around text-white-50">
                         <div class="day">${dayName}</div>
                         <div class="date">${dayOfMonth} ${monthName}</div>
                     </div>
                     <div class="card-content p-4 text-white">
                         <div class="location pb-2 fs-3 text-white-50">${allWeather[i].location.name}</div>
                         <div class="degree pb-2">${allWeather[i].current.feelslike_c}ْ C</div>
                         <div><img src="${allWeather[i].current.condition.icon}" alt=""></div>
                         <div class="text-info">${allWeather[i].current.condition.text}</div>
                         <div class="details py-4">
                             <span><img src="images/icon-umberella@2x.png" alt="">${allWeather[i].current.humidity}%</span>
                             <span><img src="images/icon-wind@2x.png" alt="">${allWeather[i].current.wind_kph}km/h</span>
                             <span><img src="images/icon-compass@2x.png" alt="">${allWeather[i].current.wind_dir}</span>
                         </div>
                     </div>
                 </div>

                 <div class="tomorrow-card col-md-4 ">
                     <div class="card-head2 py-1 d-flex justify-content-around text-white-50">
                         <div class="day">${nextDayName}</div>
                     </div>
                     <div class="card-content p-4 text-white text-center">
                         <div class="mt-3"><img src="${allWeather[i].forecast.forecastday[1].day.condition.icon}" alt=""></div>
                         <div class="high-degree fs-1 fw-bolder">${allWeather[i].forecast.forecastday[1].day.maxtemp_c}ْ C</div>
                         <div class="small-degree text-white-50 pt-4">${allWeather[i].forecast.forecastday[1].day.mintemp_c}ْ C</div>
                         <div class="text-info mt-5 fs-5">${allWeather[i].forecast.forecastday[1].day.condition.text}</div>
                     </div>
                 </div>

                 <div class="after-tomorrow-card col-md-4 ">
                     <div class="card-head py-1 d-flex justify-content-around text-white-50">
                         <div class="day">${thirdDayName}</div>
                     </div>
                     <div class="card-content p-4 text-white text-center">
                         <div class="mt-3"><img src="${allWeather[i].forecast.forecastday[2].day.condition.icon}" alt=""></div>
                         <div class="high-degree fs-1 fw-bolder">${allWeather[i].forecast.forecastday[2].day.maxtemp_c}ْ </div>
                         <div class="small-degree text-white-50 pt-4">${allWeather[i].forecast.forecastday[2].day.mintemp_c}ْ </div>
                         <div class="text-info mt-5 fs-5">${allWeather[i].forecast.forecastday[2].day.condition.text}</div>
                     </div>
                 </div>

             </div>`
    }
    document.getElementById('inner').innerHTML = cartona
}




let searchBtnInput = document.getElementById('searchBtn');

searchBtnInput.addEventListener('input', function () {
    let cityName=searchBtnInput.value
    if(searchBtnInput.value.length >= 3){
 
    
        let allWeather = [];
        async function getWeather(cityName) {
            let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=182a8f7d6826422d84701915240812&q=${cityName}&days=3`);
            let finalResult = await weather.json();
            allWeather.push(finalResult);

            display();
        }
        getWeather(cityName);


        function display() {
            cartona = '';
            for (let i = 0; i < allWeather.length; i++) {
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdau', 'Friday', 'Saturday'];
                let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                let dateDisc = new Date(allWeather[i].location.localtime);
                let nextDay = new Date(allWeather[i].forecast.forecastday[1].date);
                let thirdDay = new Date(allWeather[i].forecast.forecastday[2].date);

                let dayNum = dateDisc.getDay();
                let dayName = days[dayNum];
                let monthNum = dateDisc.getMonth();
                let monthName = months[monthNum];
                let dayOfMonth = dateDisc.getDate();
                let nextDayNum = nextDay.getDay();
                let nextDayName = days[nextDayNum];
                let thirdDayNum = thirdDay.getDay();
                let thirdDayName = days[thirdDayNum];


                cartona += `<div class="cardes rounded-2 mt-5 ">
 
                         <div class="today-card col-md-4 ">
                             <div class="card-head py-1 d-flex justify-content-around text-white-50">
                                 <div class="day">${dayName}</div>
                                 <div class="date">${dayOfMonth} ${monthName}</div>
                             </div>
                             <div class="card-content p-4 text-white">
                                 <div class="location pb-2 fs-3 text-white-50">${allWeather[i].location.name}</div>
                                 <div class="degree pb-2">${allWeather[i].current.feelslike_c}ْ C</div>
                                 <div><img src="${allWeather[i].current.condition.icon}" alt=""></div>
                                 <div class="text-info">${allWeather[i].current.condition.text}</div>
                                 <div class="details py-4">
                                     <span><img src="images/icon-umberella@2x.png" alt="">${allWeather[i].current.humidity}%</span>
                                     <span><img src="images/icon-wind@2x.png" alt="">${allWeather[i].current.wind_kph}km/h</span>
                                     <span><img src="images/icon-compass@2x.png" alt="">${allWeather[i].current.wind_dir}</span>
                                 </div>
                             </div>
                         </div>
 
                         <div class="tomorrow-card col-md-4 ">
                             <div class="card-head2 py-1 d-flex justify-content-around text-white-50">
                                 <div class="day">${nextDayName}</div>
                             </div>
                             <div class="card-content p-4 text-white text-center">
                                 <div class="mt-3"><img src="${allWeather[i].forecast.forecastday[1].day.condition.icon}" alt=""></div>
                                 <div class="high-degree fs-1 fw-bolder">${allWeather[i].forecast.forecastday[1].day.maxtemp_c}ْ C</div>
                                 <div class="small-degree text-white-50 pt-4">${allWeather[i].forecast.forecastday[1].day.mintemp_c}ْ C</div>
                                 <div class="text-info mt-5 fs-5">${allWeather[i].forecast.forecastday[1].day.condition.text}</div>
                             </div>
                         </div>
 
                         <div class="after-tomorrow-card col-md-4 ">
                             <div class="card-head py-1 d-flex justify-content-around text-white-50">
                                 <div class="day">${thirdDayName}</div>
                             </div>
                             <div class="card-content p-4 text-white text-center">
                                 <div class="mt-3"><img src="${allWeather[i].forecast.forecastday[2].day.condition.icon}" alt=""></div>
                                 <div class="high-degree fs-1 fw-bolder">${allWeather[i].forecast.forecastday[2].day.maxtemp_c}ْ </div>
                                 <div class="small-degree text-white-50 pt-4">${allWeather[i].forecast.forecastday[2].day.mintemp_c}ْ </div>
                                 <div class="text-info mt-5 fs-5">${allWeather[i].forecast.forecastday[2].day.condition.text}</div>
                             </div>
                         </div>
 
                     </div>`
            }
            document.getElementById('inner').innerHTML = cartona
        }


     
}else{
   
    console.log('error');
    
}

});



