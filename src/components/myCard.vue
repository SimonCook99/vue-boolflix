<template>
    <div class="card">
        <img :src="linkInizialeImmagini + film.poster_path" alt="thumbnail film">

        <div class="card-info">
            <h1>{{film.title}}</h1>
            <h2>{{film.original_title}}</h2>
            <p class="language">{{film.original_language}}</p>
            <p class="vote">{{film.vote_average}}</p>
        </div>
        
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

<style scoped lang="scss">
    .card{
        margin: 15px;
        text-align: center;
        position: relative;

        .card-info{
            display: none;
        }

        &:hover .card-info{
            display: block;
            cursor: pointer;
        }

        h1,h2,p{
            color: white;
            position: absolute;
            left: 50%;
            width: 100%;
            transform: translate(-50%, 0);
        }

        h1{
            top: 20px;
        }

        h2{
            top: 200px;
        }
        p.language{
            top: 300px;
        }
        p.vote{
            top: 400px;
        }
    }
</style>