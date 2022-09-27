/*
* JS Para la comprobación de datos del Formulario de entrada
*
* @author Paco Gomez <paco@mastermind.ac>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/

//Inicializacion de var,objetos, DOM
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;
var avatarItems;
var itemImg;
var avatarCont;

//Funciones de evento
/**
 * Comprueba los datos correctos del formualrio de entrada
 * @param  {EventObject} event Evento que salta al realizar submit
 */
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
    //Informacion es correcta
    datosUsuario(nickInput,tamanoInput,emailInput,avatarCont);
    historicoUsuarios(nombre, serie1,serie2,serie3);
    return true;
}
function moviendoImg(event){
    itemImg=event.target;
    console.log(itemImg.src);
}
function cambiarImg(event){
    avatarCont.src=itemImg.src;
}
/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 */
function domCargado(){
    //Captura de todos los Elements
    nickInput=document.getElementById("nick");
    tamanoInput=document.getElementById("tamano");
    emailInput=document.getElementById("email");
    formEntrada=document.getElementById("formEntrada");
    error=document.getElementById("error");

    //Comprobar si hay algún error de juego.html
    if(sessionStorage.getItem('error')!=null)
    {
        error.innerText=sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }

    formEntrada.addEventListener('submit',comprobarForm);

    
    //Eventos del D&D
    avatarItems=document.getElementsByClassName("avatarImgItem");
    for(let item of avatarItems){
        item.addEventListener('dragstart',moviendoImg)
    }
    avatarCont=document.getElementById("avatarImg");
    avatarCont.addEventListener('dragover',e=>{e.preventDefault()})
    avatarCont.addEventListener('drop',cambiarImg)
}


//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded',domCargado);
//Geolocalizacion
datoGeolocalizacion();
