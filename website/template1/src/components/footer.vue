<template>
  <footer class="bg-white flex flex-col items-center lg:px-36 px-10 pt-20 h-screen-c">
    <div class="text-center flex flex-col items-center logos justify-center flex-grow">
      <a class="" href="#top" style="margin-right: -13px">
        <img src="@/assets/logos/logo-2-black.png" class="lg:h-44 loogo" alt="" style="margin-right: -17px" />
      </a>
      <div class="socials nav-link flex text-white gap-10 py-8">
        <a href="https://discord.gg/" target="blank"> <img src="@/assets/icons/rs/Discord.svg" alt="" /> </a><a href="https://www.instagram.com/" target="blank"> <img src="@/assets/icons/rs/Instagram.svg" alt="" /> </a
        ><a href="https://twitter.com/" target="blank">
          <img src="@/assets/icons/rs/Twitter.svg" alt="" />
        </a>
      </div>
      <!-- <div>
        <img id="socials-source" src="@/assets/icons/socials.png" alt="" />
      </div> -->
    </div>
    <div class="text-center flex lg:flex-row flex-col items-center justify-around py-8 w-full">
      <a href="">Terms & Conditions</a>
      <a href=""> Metasafe - All rights reserved 2022</a>
    </div>
  </footer>
  <!-- end footer -->
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.socials {
  display: flex;
  img {
    height: 31px;
    &:hover {
      filter: drop-shadow(0px 0px 2px black);
    }
  }
}
.logos {
  gap: 60px;
}
.h-screen-c {
  height: calc(100vh);
}

.loogo {
  &:hover {
    filter: drop-shadow(0px 0px 2px black);
  }
}
</style>
