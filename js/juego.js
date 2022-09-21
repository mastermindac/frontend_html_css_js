/*
* JS Para el juego Masterdots
*
*/

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


//Capturamos Datos Usuaio
getDatosUsuario();
//Comprobamos los datos
if(!comprobacionDatosUsuario()) location="index.html";
//Rellenamos el formulario
rellenarFormularioUsuario();
pintarPanelJuego();


