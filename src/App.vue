<script setup lang="ts">
import Movies from './components/Movies.vue'
import useMovies from './hooks/useMovies.js'
import { ref, watch } from 'vue'

const error = ref('')
const input = ref('') //podriamos hacerlo usando el v-model pero lo he hecho usando el FormData
const handleSubmit = (event: Event) => {
  event.preventDefault()
  /*   const fields = new FormData(event.target as HTMLFormElement)
    const fields2 = Object.fromEntries(new window.FormData(event.target as HTMLFormElement))
    const query = fields.get('query')
    console.log(fields2)  Esto sería como se haría con javascript*/
  console.log(input.value) //esto es como se haría con vue

}

// Efecto similar a useEffect con dependencias en React
watch(input, () => {
  if (input.value === ''){
    error.value = 'El campo no puede estar vacío'
  }
  else if (input.value.match(/^\d+$/)){
    error.value = 'El campo no puede ser un número'
  }
  else if (input.value.length < 3){
    error.value = 'El campo no puede tener menos de 3 caracteres'
  }else{
    error.value = ''
  }
})

const movies = useMovies()

</script>

<template>
  <div class="page">
    <header>
      <h1>Buscador de películas</h1>
      <form @submit="handleSubmit" class="form">
        <input v-model="input" type="text" name="query" placeholder="Avengers, Star Wars, Harry Potter ...">
        <button type="submit">Buscar</button>
      </form>
      <p :style="{color: 'red'}">{{error}}</p>
    </header>
    <main>
      <Movies :movies="movies" />
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main {
  display: flex;
  justify-content: center;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
