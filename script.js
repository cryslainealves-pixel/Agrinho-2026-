
function calcular(){
let litros=document.getElementById('litros').value||0;
let anual=litros*365;
document.getElementById('resultado').innerHTML=
'🌎 Economia anual estimada: <strong>'+anual+' litros</strong>';
}
function quiz(correto){
const r=document.getElementById('quizResultado');
if(correto){
r.innerHTML='✅ Correto! Drones ajudam no monitoramento das lavouras.';
}else{
r.innerHTML='❌ Resposta incorreta. Tente novamente.';
}
}
