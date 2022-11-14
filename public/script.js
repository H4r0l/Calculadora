//Declaramos variables
let operandoa;
let operandob;
let operacion;

function Inicio(){
  //variables
  let resultado = document.getElementById('resultado');
  let reset = document.getElementById('reset');
  let suma = document.getElementById('suma');
  let resta = document.getElementById('resta');
  let multiplicacion = document.getElementById('multiplicacion');
  let division = document.getElementById('division');
  let igual = document.getElementById('igual');
  let uno = document.getElementById('uno');
  let dos = document.getElementById('dos');
  let tres = document.getElementById('tres');
  let cuatro = document.getElementById('cuatro');
  let cinco = document.getElementById('cinco');
  let seis = document.getElementById('seis');
  let siete = document.getElementById('siete');
  let ocho = document.getElementById('ocho');
  let nueve = document.getElementById('nueve');
  let cero = document.getElementById('cero');
  let eliminar = document.getElementById('eliminar');
//Eventos de click
uno.onclick = function(e){
  resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
  resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
  resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
  resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
  resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
  resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
  resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
  resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
  resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
  resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
  resetear();
}
suma.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
eliminar.onclick = function(e){
  resultado.textContent = resultado.textContent.slice(0,-1);
}
resta.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
multiplicacion.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
}

division.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}
igual.onclick = function(e){
  operandob = resultado.textContent;
  resolver();
}
function limpiar(){
  resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
  
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

//Funcion para Dark mode en Tailwind
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // Hace switch a los botones
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
  });
}