<template>
    <div class="card">
        
        <img v-if="item.poster_path != null" :src="linkInizialeImmagini + item.poster_path" alt="thumbnail film/serie">
        <div class="overlay"></div>

        <div class="card-info">
            <h1>{{item.title== null ? item.name : item.title}}</h1>
            <h2>{{item.original_title == null ? item.original_name : item.original_title}}</h2>
            <lang-flag class="language" :iso="item.original_language"/>
            <!-- <p class="language">{{item.original_language}}</p> -->

            <div v-if="item.vote_average != 0" class="vote">

                <!--Soluzione con il componente font-awesome-icon-->
                <font-awesome-icon v-for="(star, index) in Math.ceil(item.vote_average / 2)" :key="index" icon="fas fa-star" />
                <font-awesome-icon v-for="(emptyStar, index2) in 5 - Math.ceil(item.vote_average / 2)" :key="index2" :icon="['far', 'fa-star']" />

                <!--soluzione con i normali tag i-->
                <!-- <i v-for="(star, index) in Math.ceil(item.vote_average / 2)" :key="index" class="fas fa-star"></i> -->
                <!-- <i v-for="(star, index) in 5 - Math.ceil(item.vote_average / 2)" :key="index" class="fa-regular fa-star"></i> -->
            </div>
            

            <!-- <p class="vote">{{Math.ceil(item.vote_average / 2)}}</p> -->
        </div>
        
    </div>
</template>

<script>
    import LangFlag from 'vue-lang-code-flags';

    export default {
        name: "myCard",
        data(){
            return{
                //link iniziale delle immagini, che verrà concatenato alla parte finale presa dall'oggetto "film"
                linkInizialeImmagini: "https://image.tmdb.org/t/p/w342"
            }
        },
        components: {
            LangFlag
        },
        props: ["item"]
    }
</script>

<style scoped lang="scss">
    .card{
        margin: 15px;
        text-align: center;
        position: relative;

        .card-info, .overlay{
            display: none;
        }

        .overlay{
            position: absolute;
            background-color: rgba(0,0,0,0.5);
            top: 0;
            right: 0;
            left: 0;
            bottom: 4px;
        }

        &:hover .card-info, &:hover .overlay{
            display: block;
            cursor: pointer;
        }

        h1,h2,p, .language, .vote{
            color: white;
            position: absolute;
            left: 50%;
            width: 100%;
            transform: translate(-50%, 0);
        }
        /* img{
            width: 342px;
            height: 513px;
        } */

        h1{
            top: 20px;
        }

        h2{
            top: 200px;
        }
        p.language, .language{
            top: 300px;
        }
        .language{
            width: 50px;
            height: 30px;
            background-size: cover;
        }
        div.vote{
            color: yellow;
            top: 400px;
        }
    }
</style>