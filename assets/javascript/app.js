let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.5241, lng: -77.4223 },
    zoom: 12

  });
}

initMap();


function currentWeather() {
  var key = '184eb6450fef976a167dbae5ef669d22';
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.5241&lon=-77.4223&appid=' + key)
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}


// function weatherRadar() {
//   var key = '184eb6450fef976a167dbae5ef669d22';
//   fetch('http://maps.openweathermap.org/maps/2.0/weather/TA2/{12}/{37.5241}/{-77.4223}?date=000107092019&opacity=0.9&fill_bound=true&palette=0:FF0000;10:00FF00;20:0000FF&appid=' + key)
//     .then(function (resp) { return resp.json() }) // Convert data to json
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }


window.onload = function () {
  currentWeather();
  // weatherRadar();
}


function drawWeather(d) {
  // var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

  document.getElementById('description').innerHTML = titleCase(d.weather[0].description);
  document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}

function titleCase(string) {
  string = string.toLowerCase().split(" ").map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(" ");

  return string
}

var radar = L.map('radar', {
  center: [37.5241, -77.4223],
  zoom: 12,
  minZoom: 9,
  maxZoom: 14,
  zoomControl: false,
})

var key = '184eb6450fef976a167dbae5ef669d22';
var radarTemp = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/TA2/{12}/{37.5241}/{-77.4223}?date=010007092019&opacity=0.8&fill_bound=true&appid' + key,{
minZoom: 9,
maxZoom: 14
}).addTo(radar);


















// // function drawTemp(d){
// //     document.getElementById('radar')
// // }


// //Google Maps API key - Curtis
// //AIzaSyCuRk6NNaEEnPYbqhunY4xCs96MvlNoPIw

// //Storm Glass API call example
// /*const lat = 36.4124;
// const lng = 74.0319;
// const params = 'seaLevel';

// fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': '11ed69c2-9d29-11e9-9e74-0242ac130004-11ed6ab2-9d29-11e9-9e74-0242ac130004'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//   console.log(jsonData);
// });*/