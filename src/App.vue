<template>
  <div id="app">
    <Header></Header>
    <div class="back">
      <img class="bg-img" :src="left_bg" alt="">
      <img class="bg-img" :src="right_bg" alt="">
    </div>

    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

  import './assets/styles/styles.scss'
  import './assets/styles/footer.scss'
  import './assets/styles/auth.scss'
  import './assets/styles/header.scss'
  import './assets/styles/main.scss'

  import left_bg from './assets/background-left.png'
  import right_bg from './assets/background-right.png'
  import Header from './components/Header'


  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Footer, Header

    },
    data: function () {
      return {
        left_bg,
        right_bg
      };
    },




  }
</script>

