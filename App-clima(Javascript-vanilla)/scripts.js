let campo= document.querySelector('#input_cidade')
let btn =document.querySelector('#btn_cidade')

function Buscar_Cidade(){
   if(campo.value){
    
const url=fetch (`https://weather.contrateumdev.com.br/api/weather/city/?city=${campo.value}`)
.then(function(response){
 
    return response.json()
    
})
.then(json_data =>{
<<<<<<< HEAD
=======
   console.log(jsonb)


>>>>>>> b6dec3f05a631a1ea64c5a5e96d4a5aa6d802e6d
   let temp=document.querySelector('#celsius').innerHTML=json_data.main.temp
  
   let description=document.querySelector('#description').innerHTML=json_data.weather[0].description

   let name=document.querySelector('#name').innerHTML=json_data.name

   let country=document.querySelector('#country').innerHTML=json_data.sys.country

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
<<<<<<< HEAD
=======
console.log(fetch)
>>>>>>> b6dec3f05a631a1ea64c5a5e96d4a5aa6d802e6d

