<script setup lang="ts">
import responseMovies from './mocks/results.json'
import withoutResults from './mocks/noresults.json'
const movies = responseMovies.Search
const hasMovies = movies.length > 0
</script>

<template>
  <div class="page">
    <header>
      <h1>Buscador de películas</h1>
      <form class="form">
        <input type="text" placeholder="Avengers, Star Wars, Harry Potter ...">
        <button type="submit">Buscar</button>
    </form>
    </header>
    <main>
      <ul v-if="hasMovies">
        <li v-for="movie in movies" :key="movie.imdbID">
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
          <img :src="movie.Poster" :alt="movie.Title">
        </li>
      </ul>
      <p v-else>No se encontraron resultados</p>
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
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
