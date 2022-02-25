<template>
    <main>
        <div class="card-container">
            <myCard v-for="(film,index) in listaFilm" :key="index" :film="film"/>
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
        props:["listaFilm"]
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