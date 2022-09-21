/*
* JS Para la comprobación de datos del Formulario de entrada
*
*/

//Inicializacion de var,objetos, DOM
var nombre;
var emailInput;
var edad;
var serie1;
var serie2;
var serie3;
var error;

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    //Comprobar cambios
    if(nombre.value.match(/(?<!\S)[0-9]/))
    {
        nombre.focus();
        event.preventDefault();
        error.innerText="El campo de nombre no puede comenzar con un numero";
        return false;
    }else if(email.value.length==0){
        email.focus();
        event.preventDefault();
        error.innerText="El campo de email está vacío";
        return false;
    }else if((parseInt(edad.value)<=0)||(parseInt(edad.value)>8)){
        edad.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado la edad";
        return false;
    }else if(serie1.value==0){
        serie1.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado ninguna serie1";
        return false;
    }else if(serie2.value==0){
        serie2.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado ninguna serie2";
        return false;
    }else if(serie3.value==0){
        serie3.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado ninguna serie3";
        return false;
    }
    datosUsuario(nombre, edad, email,serie1,serie2,serie3);
    return true;
}


/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 */
 function domCargado(){
    //Captura de todos los Elements
    nombre=document.getElementById("nombre");
    email=document.getElementById("email");
    edad=document.getElementById("edad");
    serie1=document.getElementById("serie1");
    serie2=document.getElementById("serie2");
    serie3=document.getElementById("serie3");
    error=document.getElementById("error");

    //Comprobar si hay algún error de juego.html
    if(sessionStorage.getItem('error')!=null)
    {
        error.innerText=sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }

    //Inicio de carga de eventos
    formEntrada.addEventListener('submit',comprobarForm);

}

//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded',domCargado);
//Geolocalizacion
datoGeolocalizacion();