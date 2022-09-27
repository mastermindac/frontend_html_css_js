/*
* JS Para el juego Masterdots
*
*/
//VARIABLES GLOBALES
var iniciadoMarcado=false;
var adyacentes=[];
var idMarcados=[];
var classMarcada;
var tamanoPanel;
var tiempoJuego;
var idInterval;

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
    tamanoPanel=parseInt(tamano);
    document.getElementById("tmpo").value=tiempo;
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
    let color=["rojo","verde","azul"];
    let colorRnd=0;
    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if(index%2>0) colorRnd=getRandomInt(3);
        items+=`<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML=items;
}

/**
 * Calcula el array de los adyacentes
 * @param  {} idMarcado número marcado
 */
function calcularAdyacentes(idMarcado){
    adyacentes=[];
    //Adyacente superior
    if((idMarcado-tamanoPanel)>=0) adyacentes.push(idMarcado-tamanoPanel);
    //Adyacente inferior
    if((idMarcado+tamanoPanel)<(tamanoPanel*tamanoPanel)) adyacentes.push(idMarcado+tamanoPanel);
    //Adyacente izquierda
    if((idMarcado%tamanoPanel)>0) adyacentes.push(idMarcado-1);
    //Adyacente derecha
    if(((idMarcado+1)%tamanoPanel)>0) adyacentes.push(idMarcado+1);

    for (let index = 0; index < adyacentes.length; index++) {
        console.log(adyacentes[index]);
    }
}

/**
 * Funcion que realiza el conteo hacia atrás del juego
 */
function cuentaAtras(){
    let tmpoRestante=parseInt(document.getElementById("tmpo").value)-1;
    document.getElementById("tmpo").value=tmpoRestante;
    if(tmpoRestante==0){
        clearInterval(idInterval);
        //Finalizar todos los eventos
        const items=document.getElementsByClassName('item');
        for (let item of items) {
            item.removeEventListener('mousedown',comenzarMarcar);
            item.removeEventListener('mouseover',continuarMarcando);
        }
        document.removeEventListener('mouseup',finalizarMarcado);
        //Cambiar z-index paneles
        document.getElementById("juegoAcabado").classList.add('juegoAcabadoColor');
        document.getElementById("juegoAcabado").style.zIndex="2";
        document.getElementById("juego").style.zIndex="1";
        document.getElementById("nuevaPartida").addEventListener("click",(e)=>location.reload());
    }
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
    //Cuenta atrás
    idInterval=setInterval(cuentaAtras,1000)
}

/* FUNCIONES DEL JUEGO */
/**
 * Iniciar el marcado de los dots
 * @param  {} event
 */
function comenzarMarcar(event){
    let item=event.target;
    let containerItem=event.target.parentElement;
    if(item.classList.contains('rojo')){
        classMarcada='rojo';
        containerItem.classList.add('rojo');
    }
    else if(item.classList.contains('verde')){
        classMarcada='verde';
        containerItem.classList.add('verde');
    }else{
        classMarcada='azul';
        containerItem.classList.add('azul');        
    }
    if(!iniciadoMarcado) iniciadoMarcado=true;

    //Guardo los marcados
    idMarcados.push(parseInt(item.id));
    //Comienzo a calcular adyacentes
    calcularAdyacentes(parseInt(item.id));
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
        let idNuevo=parseInt(item.id);
        //Es adyacente?
        if(adyacentes.includes(idNuevo)&&item.classList.contains(classMarcada))
        {
            let containerItem=event.target.parentElement;
            if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
            else if(item.classList.contains('verde')) containerItem.classList.add('verde');
            else containerItem.classList.add('azul');
            //Guardo los marcados
            idMarcados.push(parseInt(item.id));
            calcularAdyacentes(parseInt(item.id));
        }else{
            iniciadoMarcado=false;
            adyacentes=[];
            //Desmarcar
            for (let index = 0; index < idMarcados.length; index++) {
                //Capturar el objeto
                let itemMarcado=document.getElementById(idMarcados[index]);
                itemMarcado.parentElement.classList.remove(classMarcada);
            }
            idMarcados=[];
        }

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
    adyacentes=[];
    //Añadiriamos puntuacion
    const puntuacionInput=document.getElementById("puntuacion");
    if(idMarcados.length>1){
        puntuacionInput.value=parseInt(puntuacionInput.value)+idMarcados.length;
    }
    //Trabajar con los marcados
    for (let index = 0; index < idMarcados.length; index++) {
        //Capturar el objeto
        let itemMarcado=document.getElementById(idMarcados[index]);
        itemMarcado.parentElement.classList.remove(classMarcada);
        //Cambiar el color de los objetos de forma rnd
        let color=["rojo","verde","azul"];
        let colorRnd=getRandomInt(3);
        itemMarcado.classList.remove(classMarcada);
        itemMarcado.classList.add(color[colorRnd]);
    }
    idMarcados=[];
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


