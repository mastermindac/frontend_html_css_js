/*
* JS Para el juego Masterdots
*
*/
//VARIABLES GLOBALES
var iniciadoMarcado=false;

/* INICIALIZACIÓN DEL PANEL */
/**
 * Devuelve un numero random entre 0 y max
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param  {} max
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
/**
 * Funcion que rellena nick y src de avatar
 */
function rellenarFormularioUsuario(){
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}

/**
 * Funcion que:
 *  1.- Rellena el nick
 *  2.- Rellena el avatar
 *  3.- Pinta de forma automática el panel de juego
 */
function pintarPanelJuego(){
    document.getElementById("juego").style.gridTemplateColumns="repeat("+tamano+", 1fr)"
    document.getElementById("juego").style.gridTemplateRows="repeat("+tamano+", 1fr)"
    //Elementos de forma automatica
    let items="";
    let color=["rojo","verde"];
    let colorRnd=0;
    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if(index%2>0) colorRnd=getRandomInt(2);
        items+=`<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML=items;
}

/**
 * Añadir los eventos al juego
 */
function programarEventosJuego(){
    const items=document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown',comenzarMarcar);
        item.addEventListener('mouseover',continuarMarcando);
    }
    document.addEventListener('mouseup',finalizarMarcado);
}

/* FUNCIONES DEL JUEGO */
/**
 * Iniciar el marcado de los dots
 * @param  {} event
 */
function comenzarMarcar(event){
    let item=event.target;
    let containerItem=event.target.parentElement;
    if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else containerItem.classList.add('verde');
    if(!iniciadoMarcado) iniciadoMarcado=true;
    console.log("Pinchado sobre un circulo");
}

/* FUNCIONES DEL JUEGO */
/**
 * Continuar el marcado de los dots
 * @param  {} event
 */
 function continuarMarcando(event){
    if(iniciadoMarcado){
        let item=event.target;
        let containerItem=event.target.parentElement;
        if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
        else containerItem.classList.add('verde');
    }
    console.log("Pasando sobre un circulo");
 }

 /* FUNCIONES DEL JUEGO */
/**
 * Finalizaría el marcado de los dots
 * @param  {} event
 */
 function finalizarMarcado(event){
    iniciadoMarcado=false;
    console.log("Finalizar el marcado");
 }

/*
* MAIN
*/

//Capturamos Datos Usuaio
getDatosUsuario();
//Comprobamos los datos
if(!comprobacionDatosUsuario()) location="index.html";
//Rellenamos el formulario, panel y eventos
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();


