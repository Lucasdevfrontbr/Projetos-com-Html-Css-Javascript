import key from "./key.js"
let campo=document.querySelector('.first_input_cabeçalho')
let btn= document.querySelector('.btn')

function get_movies(){
    if(campo.value){
const url = fetch (`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${campo.value}`)
.then(response=> response.json())
.then(movies_data=>{
 console.log(movies_data)

 function show_movies(){
let body= document.querySelector('body')
body.style.height='3rem'

  const {title, poster_path}= movies_data.results[0]
  const im='https://image.tmdb.org/t/p/w500'
   let main= document.querySelector('main')
   let movies=document.createElement('section')
   movies.classList.add('movies')

let title_movies= document.createElement('h1')
title_movies.classList.add('title_movies')
title_movies.innerHTML=title
movies.appendChild(title_movies)

const image = document.createElement("img");
image.classList.add('img_movies')
image.src =`${im}${poster_path}`;
movies.appendChild(image)

main.appendChild(movies)
}
show_movies()

function clear_input(){
campo.value=''
}
clear_input()
})
}
}
btn.addEventListener('click',get_movies)