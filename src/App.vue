<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <router-link to="/">
            <img src="./assets/logo.png" width="40">      
          </router-link>                    
        </b-col>        
      </b-row>
      <b-row>
        <b-col>
          <nav-bar></nav-bar>                      
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view></router-view>  
        </b-col>        
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import Menu from './component/Menu.vue'
export default {
  name: 'app',
  components:{
    'nav-bar' : Menu
  },
  data () {
    return {
      msg: 'Vuejs 2'
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
