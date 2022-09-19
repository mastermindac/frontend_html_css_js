/*
* JS Para la gestión de los datos de usuario
*
*/
var nick;

function datosUsuario(nick){

    sessionStorage.setItem('nick',nick.value);
}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}
function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}