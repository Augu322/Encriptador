
let limpiar = document.getElementById("clear");



function encriptador(){
    let textEncript = document.getElementById("addText").value.toLowerCase();

    let cifrar = textEncript.replaceAll(/e/igm,"enter");
     cifrar = cifrar.replaceAll(/o/igm,"ober");
     cifrar = cifrar.replaceAll(/i/igm,"imes");
     cifrar = cifrar.replaceAll(/a/igm,"ai");
     cifrar = cifrar.replaceAll(/u/igm,"ufat");

    
     document.getElementById("encripText").innerHTML = cifrar;
    

}
function desencriptar(){
    let textEncript = document.getElementById("addText").value.toLowerCase();
    
    let cifrar = textEncript.replaceAll(/enter/igm,"e");
     cifrar = cifrar.replaceAll(/ober/igm,"o");
     cifrar = cifrar.replaceAll(/imes/igm,"i");
     cifrar = cifrar.replaceAll(/ai/igm,"a");
     cifrar = cifrar.replaceAll(/ufat/igm,"u");
  
     document.getElementById("encripText").innerHTML = cifrar;
    
    
}



function copiar(){
    document.getElementById("encripText")
    navigator.clipboard.writeText(encripText.value)
    alert("Copiado")

}

const copy = document.getElementById("copy");
copy.onclick = copiar;









