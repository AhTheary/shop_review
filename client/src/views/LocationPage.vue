<template>
  <div>
    <Header />
    <div style="margin-top:17vh">
     <h1>Welcome to Location page</h1>
     <div class="responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.171074889318!2d104.92535003417836!3d11.548789817456102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c762eb12df%3A0xe27376a4b825c93b!2sTube%20Coffee%20(BOEUNG%20KENG%20KANG!5e0!3m2!1sen!2skh!4v1655222785716!5m2!1sen!2skh" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
     </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Footer },

  name: 'HomePage',
}
</script>

<style>
.responsive-map{
overflow: hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.responsive-map iframe{
left:10;
top:10;
height:90%;
width:100%;
position:absolute;
}
</style>
