let map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 37.5241, lng: -77.4223},
   zoom: 14
 });
}

initMap();











































//Google Maps API key - Curtis
//AIzaSyCuRk6NNaEEnPYbqhunY4xCs96MvlNoPIw

//Storm Glass API call example
/*const lat = 36.4124;
const lng = 74.0319;
const params = 'seaLevel';

fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '11ed69c2-9d29-11e9-9e74-0242ac130004-11ed6ab2-9d29-11e9-9e74-0242ac130004'
  }
}).then((response) => response.json()).then((jsonData) => {
  console.log(jsonData);
});*/