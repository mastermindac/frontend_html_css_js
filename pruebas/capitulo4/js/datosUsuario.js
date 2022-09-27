/*
* JS Para la gestión de los datos de usuario
*
* @author Paco Gomez <paco@mastermind.ac>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/
var nick;
var tamano;
var email;
var geolocalizacionTxt;
var avatarImg;

//sessionStorage

/**
 * Almacenar los datos en el sessionStorage
 * @param  {HTMLElement} nick nick del usuario
 * @param  {HTMLElement} tamano tamaño del panel
 * @param  {HTMLElement} email email del usuario
 */
function datosUsuario(nick, tamano, email,avatarCont) {
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('tamano',tamano.value);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('geolocalizacionTxt',geolocalizacionTxt);
    sessionStorage.setItem('avatarImg',avatarCont.src);
}
/**
 * Recoge los daots de la sesion del sessionStage
 */
function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    tamano = sessionStorage.getItem('tamano');
    email = sessionStorage.getItem('email');
    avatarImg = sessionStorage.getItem('avatarImg');
}

/**
 * Comprueba si existe nick en el sessionStorage
 */
function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}
/**
 * Calcula la geolocalizacion del usuario y la almacena en geolocalizacionTxt
 */
function datoGeolocalizacion(){
    if(!navigator.geolocation){
        geolocalizacionTxt="El navegador no es compatible con API Geolocation";
    }else{
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt='Latitud:'+position.coords.latitude+',longitud:'+position.coords.longitude},
            //Error
            ()=>{geolocalizacionTxt="La geolocalizacion no se ha podido realizar";}
        )
    }
}
//localStorage
/**
 * Crea y almacena en el localStorage el histórico de entrada
 * 
 * @param  {HTMLElement} nick nick del usuario
 */
function historicoUsuarios(nick){
    let historicoStorage=localStorage.getItem('historico');
    let historico;
    if(historicoStorage==null){
        historico=[];
    }else{
        historico=JSON.parse(historicoStorage);
    }
    let registroUsuario={
        usuario:nick.value,
        fecha:Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico',JSON.stringify(historico));
}
