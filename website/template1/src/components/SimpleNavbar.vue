<script>
import Logo from "@/components/logo";

export default {
  components: { Logo },
  data() {
    return {
      menuIsExpanded: false,
    };
  },
  mounted() {},
  methods: {
    showMenu() {
      this.menuIsExpanded = !this.menuIsExpanded;
    },
    hideMenu() {
      this.menuIsExpanded = false;
    },
  },
};
</script>
<template>
  <header id="navbar" class="flex justify-center text-white py-4 lg:px-36">
    <div
      class="logo flex justify-center text-2xl flex items-center lg:mr-8 px-4 lg:px-0"
    >
      <Logo />
    </div>
  </header>
</template>
<style lang="scss" scoped>
#navbar {
  transform: all 2s linear 1s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  background: black;
  color: white;
}
.logo {
  min-height: 50px;
}
</style>
