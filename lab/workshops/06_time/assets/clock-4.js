//Period
//------------------------------------------------------
var dateObject = new Date();
var hours = dateObject.getHours();
var period = (hours <= 12) ? 'am' : 'pm'; // ternary operator
console.log ('period', period);

var periodElement = document.querySelector('.period')
periodElement.innerHTML = period;