let campo= document.querySelector('#input_cidade')
let btn =document.querySelector('#btn_cidade')

function Buscar_Cidade(){
   if(campo.value){
    
const url=fetch (`https://weather.contrateumdev.com.br/api/weather/city/?city=${campo.value}`)
.then(function(response){
 
    return response.json()
    
})
.then(jsonb =>{
   let temp=document.querySelector('#celsius').innerHTML=jsonb.main.temp
  
   let description=document.querySelector('#description').innerHTML=jsonb.weather[0].description

   let name=document.querySelector('#name').innerHTML=jsonb.name

   let country=document.querySelector('#country').innerHTML=jsonb.sys.country

   if(temp){
   document.querySelector('#celsius').textContent= `${temp} ° C`
   }


  })
  .catch(function(erro){
    alert('Ocorreu um erro inesperado, não foi possivel acessar os dados')
  })
  campo.value=''
}
}
btn.addEventListener('click',Buscar_Cidade)

