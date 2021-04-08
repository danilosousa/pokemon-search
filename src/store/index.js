// import axios from 'axios'
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// const params = {
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// }
// export default new Vuex.Store({
//   state: {
//     pokemon:[],
//     imageUrl:[],
//     name:'ditto',
//   },
//   mutations: {
//     SETPOKEMON(state, pokemon){
//       state.pokemon = pokemon
//       let name = state.pokemon.name
      
//       console.log('set pokemon ===',name)
//     },
//     SET_URL_IMAGE(state, imageUrl){
//       state.imageUrl = imageUrl
//     },
//     SETPOKEMONSEARCH(state, pokemon){
//       console.log(state)
//       console.log(pokemon)
//       state.pokemon = pokemon
//     }
//   },
//   actions: {
//     getPokemon({ commit }){
//       console.log(this.name)
//       axios.get(`https://pokeapi.co/api/v2/${this.name}/`, params)
//       .then(response =>{
//         let pokemon = response.data
      
//         commit('SETPOKEMON', pokemon)
        
//       })
//     },

//     getImage({ commit }){
//       axios.get('https://pokeapi.co/api/v2/pokemon/2', params)
//       .then(res =>{
//         let imageUrl = res.data.sprites.other.dream_world.front_default
//         commit('SET_URL_IMAGE', imageUrl)
//       })
//     },

//   },
// })
