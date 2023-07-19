 
 function fetchWeatherData(location) {
    fetch(`https://wttr.in/${location}?format=j1`)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          updateWeatherOnHTML(data)
       })
       .catch(err => console.warn("some err: ", err))
 }
 
 let place = localStorage.getItem("location") || 'Delhi'
 document.getElementById('location').innerHTML = `${place}`;
 document.getElementById("edit-location").addEventListener('click', (e) => {
    let address = prompt("Enter name of Disctrict or City", place)
    localStorage.setItem("location", address);
    document.getElementById('location').innerHTML = `${address}`;
    fetchWeatherData(address)
 })
 
 fetchWeatherData(place)
 function updateWeatherOnHTML(weatherData) {
    document.getElementById("temperature").innerHTML = `${weatherData.current_condition[0].temp_C}&deg;C`
    document.getElementById("description").innerHTML = `${weatherData.current_condition[0].weatherDesc[0].value}`
    document.getElementById("humidity").innerHTML = `${weatherData.current_condition[0].humidity}%`
    document.getElementById("pressure").innerHTML = `${weatherData.current_condition[0].pressure} mB`
    document.getElementById("windSpeed").innerHTML = `${weatherData.current_condition[0].windspeedKmph} km/h`
 }
 
 // setting the background image
 body = document.getElementsByTagName('body')[0]
 // https://source.unsplash.com/random/widthxheight`
 unsplashImageUrl = `https://source.unsplash.com/collection/158642/${window.screen.width - 1}x${window.screen.height - 1}` || `https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80`
 //id : 928423 , 158642 , 1163637
 body.style.backgroundImage = `
 linear-gradient(rgba(0, 0, 0, 0.5),
 rgba(0, 0, 0, 0.5)),
 url(${unsplashImageUrl})
 `
 //https://picsum.photos/width/height