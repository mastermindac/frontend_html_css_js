/*
* JS Para la comprobación de datos del Formulario de entrada
*
*/

//Inicializacion de var,objetos, DOM
const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const edad=document.getElementById("edad");
const videojuego=document.getElementById("videojuego");
const plataforma=document.getElementById("plataforma");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    //Comprobar cambios
    if(nombre.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo de nombre no puede comenzar con un numero";
        return false;
    }else if(email.value.length==0){
        email.focus();
        event.preventDefault();
        error.innerText="El campo de email está vacío";
        return false;
    }else if(videojuego.value.length==0){
        videojuego.focus();
        event.preventDefault();
        error.innerText="El campo de videojuego está vacío";
        return false;
    }else if((parseInt(edad.value)<=0)||(parseInt(edad.value)>8)){
        edad.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado la edad";
        return false;
    }else if(plataforma.value==0){
        plataforma.focus();
        event.preventDefault();
        error.innerText="No se ha seleccionado la plataforma";
        return false;
    }
    return true;
}


//Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);