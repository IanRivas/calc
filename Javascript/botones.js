import calc from './calculator.js';

const parrafo = document.getElementById('pantalla-calc');
const cero = document.getElementById('cero');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicar = document.getElementById('multiplicar');
const division = document.getElementById('division');
const punto = document.getElementById('punto');
const del = document.getElementById('del');
const reset = document.getElementById('reset');
const igual = document.getElementById('igual');
const ans = document.getElementById('ansContainer');
// NUMEROS
cero.addEventListener('click', function(){
    if(parrafo.innerHTML.length === 0){
        return;
    }
    parrafo.innerHTML += '0';

});
uno.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '1';
});
dos.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '2';
});
tres.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '3';
});
cuatro.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '4';
});
cinco.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '5';
});
seis.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '6';
});
siete.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '7';
});
ocho.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '8';
});
nueve.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    parrafo.innerHTML += '9';
});

// CUENTAS
suma.addEventListener('click', function(){
    let str = parrafo.innerHTML;
    if(str.indexOf("-")>=0 || str.indexOf("x")>=0 || str.indexOf("÷")>=0 || str.indexOf("+")>=0 || parrafo.innerHTML.length === 0){
        return;
    }
    parrafo.innerHTML += '+';
});
resta.addEventListener('click', function(){
    let str = parrafo.innerHTML;
    if(str.indexOf("+")>=0 || str.indexOf("x")>=0 || str.indexOf("÷")>=0 || str.indexOf("-")>=0 || parrafo.innerHTML.length === 0){
        return;
    }
    parrafo.innerHTML += '-';
});
multiplicar.addEventListener('click', function(){
    let str = parrafo.innerHTML;
    if(str.indexOf("-")>=0 || str.indexOf("+")>=0 || str.indexOf("÷")>=0 || str.indexOf("x")>=0 || parrafo.innerHTML.length === 0){
        return;
    }
    parrafo.innerHTML += 'x';
});
division.addEventListener('click', function(){
    let str = parrafo.innerHTML;
    if(str.indexOf("-")>=0 || str.indexOf("x")>=0 || str.indexOf("+")>=0 || str.indexOf("÷")>=0 || parrafo.innerHTML.length === 0){
        return;
    }
    parrafo.innerHTML += '÷';
});
punto.addEventListener('click', function(){
    let str = parrafo.innerHTML;
    if(str.search(/\+./) != -1 || str.search(/x./) != -1 || str.search(/\-./) != -1|| str.search(/\÷./) != -1){
        if(str.match(/\./g) === null){
            parrafo.innerHTML += '.';
            return;
        }
        if(str.match(/\./g).length < 2){
            parrafo.innerHTML += '.';
        }
    }
    if(str.includes(".")){
        return;
    }
    if(str.length !== 0){
        parrafo.innerHTML += '.';
    }
});

// DEL E IGUAL
del.addEventListener('click', function(){
    if(ans.innerHTML.includes("=") && !ans.innerHTML.includes("Ans")){
        ans.innerHTML = "";
        ans.textContent = `Ans = ${parrafo.innerHTML}`;
        parrafo.innerHTML = "";
    }
    let str = parrafo.innerHTML;
    parrafo.innerHTML = str.substring(0, str.length-1);
});
reset.addEventListener('click', function(){
    parrafo.innerHTML = "";
    ans.innerHTML = "";
});
igual.addEventListener('click',()=>{
    let str = parrafo.innerHTML;
    let res = calc(str);
    str += '=';
    ans.textContent = str;
    parrafo.innerHTML = res;
})

