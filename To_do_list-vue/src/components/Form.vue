<template>
<div class="container">
  <h1>To Do list </h1>
  <input v-model="campo" type="text" placeholder="Tarefa">
  <button @click="adicionar" type="button">Adicionar</button>
  <ul>
    <li v-for="task in tasks" :key="task">{{task}}</li>
    
  </ul>
</div>

</template>

<script>
export default {
  name:'Form',
data(){
return{
  campo:'',
  tasks:[]
}
},
methods:{
adicionar(){
this.tasks.push(this.campo)
this.campo=''
 }
 
}
}

</script>

<style scoped>

.container{
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  
}
h1{
  font-family:  sans-serif;
}
button{
  margin-top: 0.5rem;
  font-size: 1em;
  background: rgb(44, 43, 43);
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
li{
  position: relative;
  right: 1rem;
}
</style>
