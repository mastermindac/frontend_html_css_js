    var frutaTxt;
    function moviendoFruta(event){
        frutaTxt=event.target.innerText;
    }
    function contarletras(event){
        console.log(frutaTxt);
        event.target.innerText=frutaTxt.length;
    }
    //Eventos del D&D
    items=document.getElementsByClassName("fruta");
    for(let item of items){
        item.addEventListener('dragstart',moviendoFruta)
    }
    cuentaletras=document.getElementById("cuentaLetras");
    cuentaletras.addEventListener('dragover',e=>{e.preventDefault()})
    cuentaletras.addEventListener('drop',contarletras)