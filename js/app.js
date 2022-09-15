/*
* JS Para la comprobación de datos del Formulario de entrada
*
*/

//Inicializacion de var,objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    if(nickInput.value.length==0)
    {
        console.log("No hay nick");
        nickInput.focus();
        event.preventDefault();
        return false;
    }else if(tamanoInput.value=="0"){
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);
