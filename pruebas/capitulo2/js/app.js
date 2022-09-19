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

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    if(nombre.value.length==0)
    {
        nombre.focus();
        event.preventDefault();
        return false;
    }else if(email.value.length==0){
        email.focus();
        event.preventDefault();
        return false;
    }else if(videojuego.value.length==0){
        videojuego.focus();
        event.preventDefault();
        return false;
    }else if((parseInt(edad.value)<=0)||(parseInt(edad.value)>8)){
        edad.focus();
        event.preventDefault();
        return false;
    }else if(plataforma.value==0){
        plataforma.focus();
        event.preventDefault();
        return false;
    }
    return true;
}


//Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);