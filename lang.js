
let arbc = document.getElementById("ar");
let english = document.getElementById("en");
let op1 =document.getElementById("op1");
let op2 = document.getElementById("op2");
let h31 =document.getElementById("h3r");
let h32 =document.getElementById("h32");
let title= document.getElementById("title");

arbc.onclick= ()=>{
setlng("arbc");
localStorage.setItem("lang","arbc");
};
english.onclick= ()=>{
  setlng("english");
  localStorage.setItem("lang","english");
};

onload = ()=>{
 setlng(localStorage.getItem("lang"));
};
function setlng(getlng){
  if(getlng === "arbc"){
    op1.innerHTML="تشفير";
    op2.innerHTML="فك التشفير";
    h31.innerHTML="النص";
    h32.innerHTML="النتائج";
    title.innerHTML="لتشفير WS";
}else if(getlng === "english"){
    op1.innerHTML="Encode";
    op2.innerHTML="Decode";
    h31.innerHTML="Text";
    h32.innerHTML="Result";
title.innerHTML="WS.ENCODER";
}
}
