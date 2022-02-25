<template>
  <div id="app">
    
    <myHeader @cercaFilm="chiamaServerFilm" />

    <!--passo la lista film al main, popolata grazie alla chiamata del'api-->
    <myMain :listaFilm="listaFilm" />
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myMain from './components/myMain.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    myMain
  },
  data(){
    return{
      api_key:"b6284a4c041c4eee701987532793f7f9",
      listaFilm: []
    }
  },
  methods:{
    chiamaServerFilm(inputInserito){
      const axios = require("axios");

      //passo i parametri alla chiamata axios, utilizzando come query il valore inserito dall'utente
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params:{
          api_key: this.api_key,
          query: inputInserito
        }
      }).then( risposta => {
        this.listaFilm = risposta.data.results;
        console.log(this.listaFilm);
      })
    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: grey;
  }
</style>
