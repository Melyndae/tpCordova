if (navigator.mediaDevices === undefined) { //mediaDevices n'est pas définit dans le navigateur 
    navigator.mediaDevices = {};
  }
  
if (navigator.mediaDevices.getUserMedia === undefined) { //invite l'utilisateur à autoriser l'utilisation d'une entrée multimédia ici audio et video
    navigator.mediaDevices.getUserMedia = function(constraints) { //contraintes
  
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; //pour adapter aux différents navigateurs
  
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser')); //si l'utilisateur n'a pas accepté l'utilisation des media
    }
  
      return new Promise(function(resolve, reject) { //si l'utilisateur accepte l'utilisation des média
        getUserMedia.call(navigator, constraints, resolve, reject); //contraintes, résolution, rejeter ?
    });
  }
}
  
 navigator.mediaDevices.getUserMedia({ audio: true, video: true }) //Activer le micro et la caméra
  .then(function(stream) {  //utilise la fonction stream
    var video = document.querySelector('video'); //retourne l'élément vidéo
    
    if ("srcObject" in video) { //si il y a la source de la video
      video.srcObject = stream; 
    } else {
      video.src = window.URL.createObjectURL(stream); //Sinon crée un nouvel objet URL, dont la durée de vie est liée au document dans la fenêtre ou il a été créé.
    }
    video.onloadedmetadata = function(e) { //chargement des méta données
      video.play(); //lancement de la caméra une fois les méta chargées
    };
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message); //Ereur
  });