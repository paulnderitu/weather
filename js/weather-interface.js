var apiKey='17f929bc6838cf4d74a448f4e737440f';


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in "+ city + " is " + response.main.humidity + "%");
      
    });
  });
});








// var Weather = require('./../js/weather.js').weatherModule;
//
// var displayHumidity = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// };
//
// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentWeatherObject.getWeather(city, displayHumidity);
//   });
// });
