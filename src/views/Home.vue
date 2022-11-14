<template>
  <div>
    <Carousel></Carousel>
    <Aboutus></Aboutus>
    <Ourservice></Ourservice>
    <Portfolio></Portfolio>
    <Client></Client>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Client from '../components/Client'
import Portfolio from '../components/Portfolio'
import Ourservice from '../components/Ourservice'
import Aboutus from '../components/Aboutus'
import Carousel from '../components/Carousel'
export default {
  name: "Home",
  components: {
    Footer,
    Client,
    Portfolio,
    Ourservice,
    Aboutus,
    Carousel,
    },
};
</script>
