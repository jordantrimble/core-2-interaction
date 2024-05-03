var lat = 40.7
var lon = -73.9
var URL = `https://moon-phase.p.rapidapi.com/advanced?lat=${lat}&lon=${lon}`;
var key = 'fb17a5b661mshd65f0506b9963c2p1e4e6djsn1174d5435dae';

fetch(URL, {
    headers: {
        'x-rapidapi-host':'moon-phase.p.rapidapi.com',
        'x-rapidapi-key': key
    }
})

    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        var backgroundElement = document.querySelector(".background");
        if (data.moon.stage == "waxing") {
            // waxing animation
            backgroundElement.style.right = "0";
            backgroundElement.style.width = `${data.moon.phase * 100}%`;
        } else if (data.moon.stage == "waning") {
            // waning animation
            backgroundElement.style.left = "0";
            backgroundElement.style.width = `${(1 - data.moon.phase) * 100}%`;
        }
    })
