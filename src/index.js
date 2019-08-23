let msje, offset;

document.getElementById("btnOffset").addEventListener("click", () => {
    offset = document.getElementById("offset").value;
    offset = parseInt(offset);
});

document.getElementById("encode").addEventListener("click", () => {
    msje = document.getElementById("inputText").value.toUpperCase();
    document.getElementById("outputText").innerHTML = window.cipher.encode(msje, offset);
});

document.getElementById("decode").addEventListener("click", () => {
    msje = document.getElementById("inputText").value;
    msje = msje.toUpperCase();
    document.getElementById("outputText").innerHTML = window.cipher.decode(msje, offset);
});
