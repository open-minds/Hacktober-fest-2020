// Set the date we're counting down to
var countDownDate = new Date("Oct 30, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
console.log(now)
// Find the distance between now and the count down date
var distance = countDownDate - now;
	
// Time calculations for days, hours, minutes and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

// If the count down is over, write some text 
if (distance < 0) {
	clearInterval(x);
	document.getElementById("time_checker").innerHTML = "EXPIRED";
	document.getElementById('days').innerHTML = '-';
	document.getElementById('hours').innerHTML = '-';
	document.getElementById('minutes').innerHTML = '-';
	document.getElementById('seconds').innerHTML = '-';
}
}, 1000);

// function formatzero(time) {
// 	return time < 10 ? "0${time}" : time
// }