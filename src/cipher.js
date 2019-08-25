window.cipher = {
  encode: (msje, offset) => { let ascii, alfEncode, ot = "";
    for(let i=0; i < msje.length; i++){
      ascii = msje[i].charCodeAt()
      if(ascii===32){
        alfEncode = String.fromCharCode(32);
      }else{
        alfEncode = (parseInt(ascii) - 65 + offset) % 26 + 65;
        alfEncode = String.fromCharCode(alfEncode);
      }
      ot = ot + alfEncode;
    }
    return ot;
  },

  decode: (msje, offset) => { let ascii, alfEncode, ot = "";
    for(let i=0; i < msje.length; i++){
      ascii = msje[i].charCodeAt()
      if(ascii===32){
        alfEncode = String.fromCharCode(32);
      }else{
        alfEncode = (parseInt(ascii) - 90 - offset) % 26 + 90;
        alfEncode = String.fromCharCode(alfEncode);
      }
      ot = ot + alfEncode;
    }
    return ot;
  }
};
