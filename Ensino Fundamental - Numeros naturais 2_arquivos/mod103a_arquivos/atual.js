<!--;
var agora=new Date(document.lastModified)
var meses=new Array('jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez');
var data=(agora.getDate());
if (data <=9) {data="0"+data;}
var hora=(agora.getHours());
if (hora <=9) {hora="0"+hora;}
var minutos=(agora.getMinutes());
if (minutos <=9) {minutos="0"+minutos;}
function y2k(numero) {return (numero < 1000) ? numero+1900 : numero;}
codigo=data+"/"+meses[agora.getMonth()]+"/"+(y2k(agora.getYear())+","+hora+":"+minutos);
document.write("Atualizada em:<BR>" + codigo);
// -->
