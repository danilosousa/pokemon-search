<template>
    <div class="row">
        <div class="container">
          <ul class="cards">
              <li v-if="loading" class="spinner-border text-dark cards text-center"></li>
              <li v-else class="cards_item">
                <div class="card">
                    <div class="card_content">
                      <h2 class="card_title">{{pokeName}}</h2> 
                    </div>  
                    <div class="card_image"><img :src="pokeUrl" class="card-pokemon-img" alt="..."></div>
      
                    <div class="card_content">
                    <div class="d-flex justify-content-around search">
                      <input type="text" v-model="search" class="form-control search-input" placeholder="Digite o nome do pokemon">
                      <button type="button" class="btn btn-primary search-btn" @click="getPokemon()">Pesquisar</button>
                    </div>
                    </div>
                </div>
              </li>
          </ul>
            
           
             <!-- <ul class="cards">
                
               <li class="cards_item">
                    <div class="card">
                        <div class="card_content">
                          <h2 class="card_title">{{pokeName}}</h2> 
                        </div>  
                        <div class="card_image"><img :src="pokeUrl" class="card-pokemon-img" alt="..."></div>
          
                        <div class="card_content">
                        <div class="d-flex justify-content-around search">
                          <input type="text" v-model="search" class="form-control search-input" placeholder="Digite o nome do pokemon">
                          <button type="button" class="btn btn-primary search-btn" @click="getPokemon()">Pesquisar</button>
                        </div>
                        </div>
                    </div>
                  </li>   
               </ul>-->
     
            
        </div>
    </div>

</template>

<script>
import api from '../services/api'

export default {
    data() {
    return {
      pokeName:'',
      pokeUrl:'',
      search:'latios',
      loading: false,
    }
  },
  mounted(){
    // this.$store.dispatch('getPokemon')
    // this.$store.dispatch('getImage')
    // Can accept an Object of options
     
  },
 async beforeMount(){
   await this.getPokemon()
  },
  
  computed:{
    // getPokemon(){
    //   return this.$store.state.pokemon
    // },
    // getImage(){
    //   return this.$store.state.imageUrl
    // }

  },
  methods:{
      getPokemon(){
        this.loading = true
        api.get(`/pokemon/${this.search}`)
          .then( (response) => {
            console.log(response.data);
            this.pokemon = response.data
            this.pokeName = response.data.name
            this.pokeUrl = response.data.sprites.other.dream_world.front_default

          })
          .finally(() => (this.loading = false)) 
          .catch((error) =>{
            this.messageError()
            this.search = ''
            console.log(error) 
            
          })
      },

      messageError() {
        this.$toast.open({
          message: "Erro ao buscar pokemon",
          type: "error",
          position:'top-right',
          duration: 5000,
          dismissible: true
        })
      }
    }
 }
  
</script>
<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  &-item{
    display: flex;
    padding: 1rem;
  }
}


@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}
.search{
  margin: 10px 0;
  &-input{
    margin: 0 5px 0 0;
  }
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &_image{
      text-align: center;
      img{
           padding: 20px;
           width: 80%;
           height: auto;
           margin: 0 auto;
      }
  }
  &_content{
    padding: 1rem;
    background: linear-gradient(to bottom left, #E6C2BF 40%, #F8EFE4 100%);
  }
  &_title{
    color: --color-text;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }
  &_text{
    color: --color-text;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;    
    font-weight: 400;
  }
}

</style>