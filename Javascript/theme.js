const theme1 = document.querySelector('#theme1');
const theme2 = document.querySelector('#theme2');
const theme3 = document.querySelector('#theme3');
let root = document.documentElement;

let localTheme = localStorage.getItem('theme');
console.log(localTheme);
if(localTheme == 2){
    root.style.setProperty('--BGin','#D3CDCD');
    root.style.setProperty('--BGout','#E6E6E6');
    root.style.setProperty('--BGpantalla','#EEEEEE');
    root.style.setProperty('--NumBtn','#E5E4E0');
    root.style.setProperty('--NumSombra','#A59E94');
    root.style.setProperty('--Igual','#C85401');
    root.style.setProperty('--IgualSombra','#8D3800');
    root.style.setProperty('--Reset','#388187');
    root.style.setProperty('--ResetSombra','#1C6166');
    root.style.setProperty('--headerfont','#38382E');
    root.style.setProperty('--pantallafont','#38382E');
    root.style.setProperty('--mainfont','#252D44');
    root.style.setProperty('--igualfont','#FFFFFF');
    theme1.classList.remove("activo");
    theme2.classList.add("activo");
    localStorage.setItem('theme','2');
}
else if(localTheme == 3){
    root.style.setProperty('--BGin','#1E0836');
    root.style.setProperty('--BGout','#170628');
    root.style.setProperty('--BGpantalla','#1E0836');
    root.style.setProperty('--NumBtn','#331B4D');
    root.style.setProperty('--NumSombra','#851C9C');
    root.style.setProperty('--Igual','#00DECF');
    root.style.setProperty('--IgualSombra','#5EFFF5');
    root.style.setProperty('--Reset','#56077C');
    root.style.setProperty('--ResetSombra','#B11FE4');
    root.style.setProperty('--headerfont','#FBEB3E');
    root.style.setProperty('--pantallafont','#FBEB3E');
    root.style.setProperty('--mainfont','#FFEA58');
    root.style.setProperty('--igualfont','#38382E');
    theme1.classList.remove("activo");
    theme3.classList.add("activo");
    localStorage.setItem('theme','3');
}

theme1.addEventListener('click', function(){
    if(theme1.classList[0] === 'activo'){
        return;
    }
    root.style.setProperty('--BGin','#252D44');
    root.style.setProperty('--BGout','#3B4664');
    root.style.setProperty('--BGpantalla','#181F32');
    root.style.setProperty('--NumBtn','#E8E4D8');
    root.style.setProperty('--NumSombra','#B4A69B');
    root.style.setProperty('--Igual','#CD4130');
    root.style.setProperty('--IgualSombra','#992315');
    root.style.setProperty('--Reset','#647299');
    root.style.setProperty('--ResetSombra','#424E74');
    root.style.setProperty('--headerfont','#FEFFFC');
    root.style.setProperty('--pantallafont','#FEFFFC');
    root.style.setProperty('--mainfont','#252D44');
    root.style.setProperty('--igualfont','#FFFFFF');
    theme2.classList.remove("activo");
    theme3.classList.remove("activo");
    theme1.classList.add("activo");
    localStorage.setItem('theme','1');
})
theme2.addEventListener('click', function(){
    if(theme2.classList[0] === 'activo'){
        return;
    }
    root.style.setProperty('--BGin','#D3CDCD');
    root.style.setProperty('--BGout','#E6E6E6');
    root.style.setProperty('--BGpantalla','#EEEEEE');
    root.style.setProperty('--NumBtn','#E5E4E0');
    root.style.setProperty('--NumSombra','#A59E94');
    root.style.setProperty('--Igual','#C85401');
    root.style.setProperty('--IgualSombra','#8D3800');
    root.style.setProperty('--Reset','#388187');
    root.style.setProperty('--ResetSombra','#1C6166');
    root.style.setProperty('--headerfont','#38382E');
    root.style.setProperty('--pantallafont','#38382E');
    root.style.setProperty('--mainfont','#252D44');
    root.style.setProperty('--igualfont','#FFFFFF');
    theme1.classList.remove("activo");
    theme3.classList.remove("activo");
    theme2.classList.add("activo");
    localStorage.setItem('theme','2');
})
theme3.addEventListener('click', function(){
    if(theme3.classList[0] === 'activo'){
        return;
    }
    root.style.setProperty('--BGin','#1E0836');
    root.style.setProperty('--BGout','#170628');
    root.style.setProperty('--BGpantalla','#1E0836');
    root.style.setProperty('--NumBtn','#331B4D');
    root.style.setProperty('--NumSombra','#851C9C');
    root.style.setProperty('--Igual','#00DECF');
    root.style.setProperty('--IgualSombra','#5EFFF5');
    root.style.setProperty('--Reset','#56077C');
    root.style.setProperty('--ResetSombra','#B11FE4');
    root.style.setProperty('--headerfont','#FBEB3E');
    root.style.setProperty('--pantallafont','#FBEB3E');
    root.style.setProperty('--mainfont','#FFEA58');
    root.style.setProperty('--igualfont','#38382E');
    theme2.classList.remove("activo");
    theme1.classList.remove("activo");
    theme3.classList.add("activo");
    localStorage.setItem('theme','3');
})