<script setup lang="ts">
import {computed, defineProps} from 'vue'


const props = defineProps({
    movies: Array as () => Movie[]
})

const hasMovies = computed(() => props.movies && props.movies.length > 0)
</script>
<template>
    <ul v-if="hasMovies">
        <li v-for="movie in movies" :key="movie.id">
            <h3>{{ movie.tittle }}</h3>
            <p>{{ movie.year }}</p>
            <img :src="movie.image" :alt="movie.tittle">
        </li>
    </ul>
    <p v-else>No se encontraron resultados</p>
</template>