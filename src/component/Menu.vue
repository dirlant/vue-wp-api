
<template>
    <div>
      <b-col md="6" offset-sm="3">
	      <b-nav pills>
				  <b-nav-item to="/home">Inicio</b-nav-item>
				  <b-nav-item to="/themes">Temas</b-nav-item>
				  <b-nav-item to="/detail">Detail</b-nav-item>
				</b-nav>
			</b-col>
    </div>
</template>


<script>
	export default {
	  name: 'menu',
	  data () {
	    return {
	      texto: 'Esto el Home',
	    }
	  },

	}
</script>

<style lang="scss">
.router-link-active {
  color: red;
}
</style>