 var config = {
    apiKey: "AIzaSyBtIwxxhd-VUEdje1Q8FhHkhWc3-ihsmUQ",
    authDomain: "fotogramashow.firebaseapp.com",
    databaseURL: "https://fotogramashow.firebaseio.com",
    projectId: "fotogramashow",
    storageBucket: "fotogramashow.appspot.com",
    messagingSenderId: "454182483820"
};

firebase.initializeApp(config);

var datosWinner = firebase.database().ref('registroConcursante');

var aux = datosWinner.orderByChild("nameImagen").equalTo("87170256_IMG_2601.JPG");

aux.once('value',function(snap){
 console.log('valor', snap.key);
 console.log('valor', snap.val());
 var datos = snap.val();
  for (var key in datos){
  	console.log('valor',datos[key].name);
  	console.log('valor',datos[key].rut);
  }

})