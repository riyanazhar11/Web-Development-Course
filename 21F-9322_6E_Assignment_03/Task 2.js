$(document).ready(function() {
    $('#search-btn').click(function() {
        var city = $('#city-input').val();
        var unit = $('#unit-select').val();
        var apiKey = 'bf0507e271600269053d9ac7a5d54d29';
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(response) {
                $('#current-condition').text(response.weather[0].description + ', Temperature: ' + response.main.temp + '°');
                fetchForecast(city, apiKey, unit);
            },
            error: function(error) {
                console.error('Error fetching weather data:', error);
                $('#current-condition').text('Weather data not available');
            }
        });
    });

    function fetchForecast(city, apiKey, unit) {
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(response) {
                var forecast = response.list.slice(0, 5);
                forecast.forEach(function(item, index) {
                    $(`#day-${index + 1}`).text(item.weather[0].description + ', Temperature: ' + item.main.temp + '°');
                });
            },
            error: function(error) {
                console.error('Error fetching forecast data:', error);
                $('.forecast-days').text('Forecast data not available');
            }
        });
    }
});
