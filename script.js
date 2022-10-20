var horas = 6000;
var minutos = 0; // 0
var segundos = 0;
var anos = 0;
var dia = 0;
var mes = 0;

minutos = horas * 60;
console.log(minutos , 'minutos');
segundos = minutos * 60;
console.log(segundos , 'segundos');
horas = (segundos / 60) | 0;
console.log(horas , 'horas');

dia = (horas / 24) | 0;
horas = horas % 24;
mes = (dia / 30) | 0;
dia = dia % 30;
anos = (mes / 12) | 0;
mes = mes % 12;
console.log(dia , 'dia' , mes , 'mes' , anos , 'anos');