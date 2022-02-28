<template>
    <main>
        <div class="card-container">
            <h1>FILM</h1>
            <myCard v-for="(film,index) in listaFilm" :key="index" :film="film"/>
            <h1>SerieTV</h1>
            <myCard v-for="serie in listaSerieTV" :key="serie.id" :film="serie"/>
        </div>
    </main>
</template>

<script>

    import myCard from "./myCard.vue"

    export default {
        name: "myMain",
        components:{
            myCard
        },
        props:["listaFilm", "listaSerieTV"]
    }
</script>

<style scoped lang="scss">
    main{
        background-color: grey;
    }

    .card-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>