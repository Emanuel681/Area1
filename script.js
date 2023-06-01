window.addEventListener('load', function() {
  var myElement = document.getElementById('my-element');
  if (myElement) {
    myElement.addEventListener('click', mostrarMensaje);
  }

  cambiarColorFondo();
});
