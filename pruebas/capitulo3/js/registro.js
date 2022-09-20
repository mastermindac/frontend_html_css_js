/*
* JS Para la gestión del registro
*
* @author Paco Gomez <paco@mastermind.ac>
* @link https://github.com/mastermindac/frontend_html_css_js GitHub
*/

//Inicializacion de var,objetos, DOM
const registro=document.getElementById("registro");

getDatosUsuario();
//Comprobamos los datos
if(!comprobacionDatosUsuario()) location="index.html";
//Escribimos el resultado de forma automática en el registro
registro.innerHTML=`
    <li>nombre: ${nombreValue}</li>
    <li>edad: ${edadValue}</li>
    <li>email: ${emailValue}</li>
    <li>serie1: ${serie1Value}</li>
    <li>serie2: ${serie2Value}</li>
    <li>serie3: ${serie3Value}</li>
`;