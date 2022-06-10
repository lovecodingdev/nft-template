<script>
import Navbar from "@/components/navbar";
import SimpleNavbar from "@/components/SimpleNavbar";
import Footer from "@/components/footer";

export default {
  components: { Navbar, SimpleNavbar, Footer },

  computed: {
    showSimpleNavbar() {
      const routes = ["/raffle", "/mint", "/success"]; //add here any route that should have a simple navbar
      const { path } = this.$route;
      const output = routes.includes(path);
      return output;
    },
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <SimpleNavbar v-if="showSimpleNavbar" />
      <Navbar v-if="!showSimpleNavbar" />
 <div class="main-content " :class="{'pt-20':showSimpleNavbar, 'pt-2':!showSimpleNavbar}">         <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
body {
  margin: 0;
}
.main-content {
  // padding-top: 0;
}
</style>
