const S1 = "ABCD";
const S2 = "CDAB";

function isRotation(s1,s2){
  if(s1.length !== s2.length) return null;
  if((s1 + s1).includes(s2)){
    return s2;
  }
  return null;
}

console.log(isRotation(S1,S2));
