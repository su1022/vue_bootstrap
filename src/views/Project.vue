<template>
  <div>
      <CurrentPage></CurrentPage>
      <Portfolio></Portfolio>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import CurrentPage from '../components/CurrentPage'
import Portfolio from '../components/Portfolio.vue'
export default {
  components: {
    Footer, 
    CurrentPage,
    Portfolio },

}
</script>

<style>

</style>