<template>
  <div id="app">

  	<transition name="pagina">
    	<router-view></router-view>
	</transition>


  </div>
</template>


<script>

import { routes } from './routes';

  export default {

  	data() {

  		return {

  			routes: routes.filter(route => route.menu)
  		}
  	}

};
</script>

<style lang="scss">

</style>
