<script>
import axios from "axios";
var Web3 = require("web3");

import Layout from "@/layouts/main";
import appConfig from "@/app.config";

/**
 * Blank page component
 */
export default {
  page: {
    title: "Success",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout },
  methods: {
    goToExternal(url) {
      window.open(url);
    },
  },
};
</script>

<template>
  <Layout>
    <section class="main grid auto-col-max md:grid-cols-2">
      <div class="md:order-last order-first h-72"></div>

      <div class="flex items-center justify-center banner text-white w-full md:min-h-52 py-8 md:px-20 px-10 pb-20">
        <div class="grid">

          <div class="md:mb-40 mb-10">
            <br/><br/><br/>
            <div
              for="wallet"
              class="
                font-kusanagi
                lg:text-4xl
                text-2xl
                leading-relaxed
                inline
                uppercase
                block
              " >  Congratulations, you are registered for the raffle ! </div>
               <br/>
            <div class="pt-6 md:text-xl xl:text-4xl 2xl:5xl">To maximize your chance, Tweet and retweet our last post:</div>
            <br/> <br/>
            <div class="divider"></div><br/><br/><br/>
            <div style="display: flex; align-items: center;justify-content: center;">
            <button class="bg-white rounded-xl text-black font-bold py-2 text-2xl" style="width : 400px" @click="  goToExternal('https://twitter.com/intent/tweet?url=https://meta-safe.io/')">Tweet And See post</button>            
            </div>
          </div>                
        </div>
      </div>
    </section>
  </Layout>
</template>
<style lang="scss" scoped>
section.main {
  width: 100%;
  min-height: calc(100vh - 5rem);
  background-image: url("../../assets/images/blue_vs_red.jpg");
  background-blend-mode: color;
  background-color: #ecb2b22e;
  background-repeat: no-repeat;
  background-position-y: 55%;
  background-position-x: 24%;
  background-size: cover;

  @media (min-width: 1500px) {
    background-position-x: 10% !important;
  }
  @media (min-width: 768px) {
    background-image: url("../../assets/images/register-banner.jpg") !important;
    background-position-x: 31%;
    background-position-y: 24%;
  }
}
.divider {
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  resize: none;
  text-align: center;
  &::placeholder {
    color: rgba(255, 255, 255, 0.68);
    font-weight: 100;
  }
}
section.main {
  .banner {
    background: #ffffff24;
    backdrop-filter: blur(15px);
  }
}
</style>