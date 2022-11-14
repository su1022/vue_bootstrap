<template>
  <div>
      <CurrentPage></CurrentPage>
      <Aboutus></Aboutus>
      <Client></Client>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Client from '../components/Client'
import Aboutus from '../components/Aboutus'
import CurrentPage from '../components/CurrentPage'
export default {
  components: {
    Footer,
    Client,
    Aboutus,
    CurrentPage },

}
</script>

<style>

</style>