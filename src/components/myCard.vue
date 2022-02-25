<template>
    <div class="card">
        <img :src="linkInizialeImmagini + film.poster_path" alt="thumbnail film">
        <h1>{{film.title}}</h1>
        <h2>{{film.original_title}}</h2>
        <p>{{film.original_language}}</p>
        <p>{{film.vote_average}}</p>
    </div>
</template>

<script>
    export default {
        name: "myCard",
        data(){
            return{
                //link iniziale delle immagini, che verrà concatenato alla parte finale presa dall'oggetto "film"
                linkInizialeImmagini: "https://image.tmdb.org/t/p/w342"
            }
        },
        props: ["film"]
    }
</script>

<style scoped>
    .card{
        margin: 15px;
        text-align: center;
    }
</style>