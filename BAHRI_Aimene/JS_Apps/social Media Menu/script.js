
var topLeft = document.getElementById("top_left");
var topRight = document.getElementById("top_right");
var bottomLeft = document.getElementById("bottom_left");
var bottomRight = document.getElementById("bottom_right");
var mediaContainer = document.getElementById("mediaContainer")


topLeft.onclick = function(){
	console.log('hi')
	mediaContainer.className = 'topleft'
}

topRight.onclick = function(){
	console.log('hi')
	mediaContainer.className = 'topright'
}

bottomLeft.onclick = function(){
	console.log('hi')
	mediaContainer.className = 'btmleft'

}

bottomRight.onclick = function(){
	console.log('hi')
	mediaContainer.className = 'btmright'

}

