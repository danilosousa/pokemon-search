<template>
  <div id="app">
      <main class="main">
        <nav class="color-bg">
          <div class="container">
            <h1 class="text-center">API - Pokemon</h1>
            <Pokemon />
          </div>
      </nav>
      </main>
  </div>
</template>
<script>
import Pokemon from '@/components/Pokemon.vue'
export default {
  components:{
    Pokemon
  },
  data() {
    return {
      
    }
  },
 
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

:root {
   --color-bg:#FAD02C;
   --color-text:#282120;
}
nav{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: var(--color-text);
}
.color-bg{
  background-color:var(--color-bg);
}
</style>