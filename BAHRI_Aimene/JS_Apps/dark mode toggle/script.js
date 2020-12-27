

var toogle = document.getElementById('dark-mode')
var label = document.getElementById('dark-label')

if(toogle) {
	console.log('hi')
	toogle.addEventListener('change', (e) => {
		document.body.classList.toggle('dark', e.target.cheked);
	})



}