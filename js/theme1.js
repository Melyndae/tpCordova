var vibrateInterval = document.getElementById('myButton');

vibrateInterval.addEventListener('click', vibre)

function vibre() {
   window.navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100])
}