let user, pw, userData="fer", pwData="1234", msje, offset, email, copyBtn, otCopy, cleanBtn;

//Funciones para mostrar y esconder elementos
function hideContent(element) {
	document.getElementById(element).style.display = 'none';
}

function showContent(element) {
	document.getElementById(element).style.display = 'block';
}

//Llama a la función de hideContent para el siguiente paso en el Login
hideContent("empty");
hideContent("wrong");

//Login
document.getElementById("loginBtn").addEventListener("click", () => {
    user = document.getElementById("user").value;
    pw = document.getElementById("password").value;
    if(user==userData && pw==pwData) { 
        hideContent("login");
        showContent("content");
    }else if(user==="" || pw===""){showContent("empty")
    }else if(user!=="fer" || pw!=="1234"){showContent("wrong")
    }
});

//Botón offset
document.getElementById("btnOffset").addEventListener("click", () => {
    offset = document.getElementById("offset").value;
    offset = parseInt(offset);
});

//Cifrar
document.getElementById("encode").addEventListener("click", () => {
    msje = document.getElementById("inputText").value.toUpperCase();
    document.getElementById("outputText").innerHTML = window.cipher.encode(msje, offset);
});

//Descifrar
document.getElementById("decode").addEventListener("click", () => {
    msje = document.getElementById("inputText").value;
    msje = msje.toUpperCase();
    document.getElementById("outputText").innerHTML = window.cipher.decode(msje, offset);
});

//Botón Copiar
copyBtn = document.getElementById("copy").addEventListener("click", copy, false);
function copy() {
  otCopy = document.getElementById("outputText");
  let inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", outputText.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
}

//Botón Limpiar
cleanBtn = document.getElementById("clean").addEventListener("click", () => {
    cleanBtn = document.getElementById("inputText").innerHTML = "";
    cleanBtn = document.getElementById("outputText").innerHTML = "";
})