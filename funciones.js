//Variables generales
var op1 = null; //Se guarda el primer operador
var op2 = null; //Se guarda el segundo operador
var resultado = null; //Se guarda el resultado de la operacion de op1 con op2
var operacion = null; //Se guarda el simbolo de la operacion (+, -, /, x)
var cadena = null; //Cadena que todo lo que se muestra en la pantalla de la calculadora
var ultimoValor = null;
//----------------------------------------------------------------------------------------------------------

//Función que recibe un parametro y lo imprime en el cuadro de texto de la calculadora
function addContent(value){

    if (resultado != null && value != resultado) {
      reset();
    }

    if (operacion==null || (operacion!=null && (value!="+" && value!="-" && value!="*" && value!="/"))) {
      cadena = document.getElementById("cadena").value += value;
      ultimoValor = value;
    }else {
      alert("Simbolo repetido");
    }

    if (value >= 0 && value <= 10 || value == ".") { //Comprueba que value es un numero entre el 1 y 10 para no añadir signos a op1 y op2
      if (operacion == null) { //Si no está declarada la variable operacion es que está escribiendo el primer operando
        if (op1 == null) { //Si op1 no está declarada aún igualamos a value para que null se sobreescriba
            op1 = value.toString();
        }else { //Si op1 ya está declarada añadimos el value en vez de sobreescribir
          op1 += value.toString();
        }
      }else{ //Si está declarada la variable operacion es que ya está escribiendo el op2
        if (op2 == null) {
            op2 = value.toString();
        }else {
          op2 += value.toString();
        }
      }
    }
}
//----------------------------------------------------------------------------------------------------------

//Funciones que llaman a la funcion addContent() enviando como parametro el numeró seleccionado
function addNumber0(){
  addContent(0);
}
function addNumber1(){
  addContent(1);
}
function addNumber2(){
  addContent(2);
}
function addNumber3(){
  addContent(3);
}
function addNumber4(){
  addContent(4);
}
function addNumber5(){
  addContent(5);
}
function addNumber6(){
  addContent(6);
}
function addNumber7(){
  addContent(7);
}
function addNumber8(){
  addContent(8);
}
function addNumber9(){
  addContent(9);
}
function addDecimal(){
  addContent(".");
}
//----------------------------------------------------------------------------------------------------------

//Funciones que son llamadas cuando se pulsan en las operaciones
function sumaSelected(){
  addContent("+");
  asignarOperacion("+");
}
function restaSelected(){
  addContent("-");
  asignarOperacion("-");
}
function multiplicacionSelected(){
  addContent("*");
  asignarOperacion("*");
}
function divisionSelected(){
  addContent("/");
  asignarOperacion("/");
}
function asignarOperacion(signo){ //Gracias a esta funcion se consigue no reemplazar la variable operacion por otro simbolo
  if (operacion == null) {
    operacion = signo;
  }
}
//----------------------------------------------------------------------------------------------------------

//OPERACION FINAL Comprueba que operacion se ha seleccionado y calcula el resultado
function calcular(){
  if (op1 != null && operacion != null && op2 != null && resultado == null) {
    addContent("=");
    //Se pone un + delante de la variable para transformar un string en integer
    if (operacion == "+") {
      resultado = parseFloat(op1) + parseFloat(op2);
    }else if (operacion == "-") {
      resultado = parseFloat(op1) - parseFloat(op2);
    }else if (operacion == "*") {
      resultado = parseFloat(op1) * parseFloat(op2);
    }else if (operacion == "/") {
      resultado = parseFloat(op1) / parseFloat(op2);
    }
    addContent(resultado);
  }
}
//----------------------------------------------------------------------------------------------------------

//FUNCIONES DE MEMORIA
var memoria = null;
//----------------------------------------------------------------------------------------------------------
function guardarMemoria(){
  if (ultimoValor != null) {
    memoria = ultimoValor;
    document.getElementById("memoria").innerHTML = "Memoria: " + memoria;
  }else {
    alert("No hay ningun valor para guardar");
  }
}
function recuperarMemoria(){
  if (memoria != null) {
    addContent(memoria);
  }else {
    alert("No hay ningun valor almacenado en memoria.");
  }
}
function limpiarMemoria(){
  memoria = null;
  document.getElementById("memoria").innerHTML = "Memoria: vacía";
}

//OTRAS FUNCIONES
//Funcion que resetea todas las variables y cuadro de texto de la calculadora
function reset(){
  op1 = null;
  op2 = null;
  operacion = null;
  cadena = null;
  resultado = null;
  document.getElementById("cadena").value = null;
}
