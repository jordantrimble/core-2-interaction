//Variables
//--------------------------------------

var key = '6a46d512603c52cc716ed5e9208a93b9';
var zip = '10011';

// API URL
//--------------------------------------

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;

// FETCH REQUEST
//--------------------------------------

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(data);
    })
    

// RENDER FUNCTION 
//------------------------------------

function render(data){

   var containerElement = document.querySelector('.Container');
   var weatherVaneElement = document.querySelector('.WeatherVane');
   var infoElement = document.querySelector('.Info');

   // edit info element
   infoElement.innerHTML = `
    <p>${ zip }</p>
    <p>Temp:${ data.main.temp }</p>
    <P>Wind Direction: ${ data.wind.deg }deg</p>
    <P>Wind Speed: ${ data.wind.speed }deg</p>
   `;

   //edit the container
   containerElement.style.background =`hsl(${ data.main.temp }20, 100%, 50%)`;

   // edit the weather vane
   weatherVaneElement.style.transform = `rotate(${ data.wind.edg }deg)`;
   weatherVaneElement.style.animationDuration = `${ data.wind.speed / 20}s`;


   console.log(data);

}