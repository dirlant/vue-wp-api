<template>
    <div>
      {{ texto }}
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'home',
  mounted(){
    axios.get(
    'https://ecommerce.paginaswebks.com/wp-json/wp/v2/posts'
    ).then((res) => {        
      console.log(res);
      this.datos = res;
    })
    .catch((error) => {
      console.log(error);
    });  
  },
  data () {
    return {
      texto: 'Esto el Home',
    }
  },
  methods:{
  	
  }
}
</script>

<style lang="scss">

</style>