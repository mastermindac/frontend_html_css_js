/*
* JS Para la comprobación de datos del Formulario de entrada
*
*/

//Inicializacion de var,objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo de nick no puede comenzar con un numero";
        return false;
    }else if(tamanoInput.value=="0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="Se debe seleccionar un tamaño de panel";
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);
