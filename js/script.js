var vibrateButton = document.getElementById('myButton'); //button

vibrateButton.addEventListener('click', vibre) //Ajouter l'evenement clique et vibre

function vibre() { 
    window.navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]) //theme2 Mario
    //window.navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100]) //theme1 James Bond
    //window.navigator.vibrate([2000, 1000, 2000])
}