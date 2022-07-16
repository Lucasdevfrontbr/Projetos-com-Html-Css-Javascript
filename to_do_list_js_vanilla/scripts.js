const list=()=>{
let input=document.querySelector('.container__input');
let ul=document.querySelector('ul');


if(input.value){
let liElement=document.createElement('li');
liElement.classList.add('text')
liElement.innerHTML=input.value;
ul.appendChild(liElement);

let btn=document.createElement('button');
btn.classList.add('remover');
btn.innerHTML='X';
liElement.appendChild(btn);
btn.onclick=()=>{
    ul.removeChild(liElement);
}
console.log(liElement);
input.value='';

}
}
document.querySelector('.container__button').addEventListener('click',list);



