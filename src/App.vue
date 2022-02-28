<template>
  <div id="app">
    
    <myHeader @cerca="chiamaServer" />

    <!--passo la lista film al main, popolata grazie alla chiamata del'api-->
    <myMain :listaFilm="listaFilm" :listaSerieTV="listaSerieTV"/>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myMain from './components/myMain.vue'

const axios = require("axios");

export default {
  name: 'App',
  components: {
    myHeader,
    myMain
  },
  data(){
    return{
      api_key:"b6284a4c041c4eee701987532793f7f9",
      listaFilm: [],
      listaSerieTV: []
    }
  },
  methods:{
    chiamaServer(inputInserito){
      
      this.cercaFilm(inputInserito);
      this.cercaSerieTV(inputInserito);
      
    },

    cercaFilm(inputInserito){
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
    },

    cercaSerieTV(inputInserito){
      axios.get("https://api.themoviedb.org/3/search/tv", {
        params:{
          api_key: this.api_key,
          query: inputInserito
        }
      }).then( risposta => {
        this.listaSerieTV = risposta.data.results;
        console.log(this.listaSerieTV);
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
