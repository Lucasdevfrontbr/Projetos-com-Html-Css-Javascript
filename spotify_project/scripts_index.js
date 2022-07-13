/*função para mostrar menu mobile*/ 
const MobileShow=()=> {
let menu=document.querySelector(".mobile_menu");
menu.classList.toggle("open");
if(menu.classList.contains("open")){
    document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
} else{
    document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
}
}
document.getElementById("button_mobile").addEventListener("click",MobileShow)
