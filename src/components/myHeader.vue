<template>
  <header>
    <img src="https://www.ailequal.com/ajax-ex-boolflix/img/boolflix.png" alt="logo">

    <div class="search">
      <input type="text" v-model="titleText" @keyup.enter="search">

      <button @click="search">Search</button>
    </div>

    
  </header>

</template>

<script>
  export default {
    name: 'myHeader',
    data(){
      return{
        //variabile che verrà monitorata nella input
        titleText: ""
      }
    },
    methods: {
      search(){
        //passo il valore della input a app.vue
        this.$emit("cerca", this.titleText);
      }
    }
  }
</script>


<style lang="scss">
  header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background-color: black;
    

    img{
      height: 80%;
      margin-right: 300px;
    }
  }
</style>
