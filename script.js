// Obtener el tiempo del documento html

const timer = document.getElementById('time');

// Declaración de variables 
var min = 0;
var sec = 0;
var ms = 0;
var stoptiempo = true;

// Función para empezar el cronómetro
function iniciarCrono() {
  if (stoptiempo == true) {
        stoptiempo = false; // Si el tiempo está detenido, iniciar cronometro
        CicloTiempo();
    }
}

// Función para detener el cronómetro
function detenerCrono() {
  if (stoptiempo == false) {
    stoptiempo = true; // Si el cronómetro está funcionando, detenerlo
    document.getElementById("resultado").innerHTML = ("Detenido en: " + timer.innerHTML); // Mostrar en que tiempo se detuvo
  }
}

// Función que maneja el ciclo del tiempo
function CicloTiempo() {
    if (stoptiempo == false) { // Si el tiempo está corriendo, continuar
      // Convertir las variables en enteros
      ms = parseInt(ms);
      sec = parseInt(sec);
      min = parseInt(min);
    
      // Sumar 1 a cada milisegundo
      ms = ms + 1;

      // Cuando el conteo de ms llegue a 100, añadir 1 segundo y devolver ms a 0
      if (ms == 100) {
        sec = sec + 1;
        ms = 0;
      }

      // Cuando el conteo de sec llegue a 60, añadir 1 minuto y devolver sec a 0
      if (sec == 60) {
        min = min + 1;
        sec = 0;
        ms = 0;
      }
    
      // Añadir un 0 extra si los ms son igual a 0 o menores que 10
      if (ms < 10 || ms == 0) {
        ms = '0' + ms;
      } 

      // Añadir un 0 extra si los sec son igual a 0 o menores que 10
      if (sec < 10 || sec == 0) {
        sec = '0' + sec;
      }

      // Añadir un 0 extra si los min son igual a 0 o menores que 10
      if (min < 10 || min == 0) {
        min = '0' + min;
      }

      // Mostrar el tiempo actual, modificando la variable obtenida desde el documento html
      timer.innerHTML = min + ':' + sec +':'+ ms;

      setTimeout("CicloTiempo()", 10); // Tiempo de espera
    }
}

// Función para reiniciar el cronómetro
function resetTiempo() {
    timer.innerHTML = "00:00:00"; // Sobreescribir la variable obtenida del documento con ceros
    stoptiempo = true; // Se detiene el cronómetro
    // Se reinician las variables
    sec = 0;
    min = 0;
    ms = 0;

}