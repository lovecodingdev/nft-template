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
    title: "Register",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {};
  },
   data() {
    return {
      accountID: "",
      registered: false,
    };
  },
  mounted() {},
  methods: {
    goToExternal(url) {
      window.open(url);
    },
    async sign() {
      if (this.accountID === "") {
        window.alert("Please connect wallet first!");
        return;
      }

      try {
        var signature = await this.web3.eth.personal.sign("I want to participate to the raffle", this.accountID, "password");
        this.registered = true;

        await axios.post("https://api.meta-safe.io/wallet/register", { project: "Meta-safe", signature: signature }).then((response) => {
          this.info = response.data.bpi;
        })
        window.open("/success")
         
      } catch (e) {
        console.log(e);
      }
    },
    async connectWallet() {
      const web3js = window.web3;
      if (typeof web3js !== "undefined") {
        this.web3 = new Web3(web3js.currentProvider);
        const accounts = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .catch((err) => {
            alert(err.message);
          });
        this.accountID = accounts[0];
      } else {
        alert("Unable to connect to Metamask");
      }
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
              "
            >
              Register <br class="hidden lg:block" />
              to the raffle <br class="hidden lg:block" />
              now
            </div>
            <div class="mt-4 text-2xl">

              <textarea name="wallet" type="text" :placeholder="'Connected to wallet \n 0F1....d382'" rows="2"> {{ (accountID?"Connected to wallet : ":"Not Connected Yet") + accountID.substring(1, 4) + "..." + accountID.substring(accountID.length - 4)}}</textarea>
            </div>
          </div>
        
          <button v-if="accountID==''" class="bg-white rounded-xl text-black font-bold py-2 text-2xl" @click="connectWallet">Connect</button>
           <button @click="sign" class="bg-white rounded-xl text-black font-bold py-2 text-2xl" v-if="accountID !== '' && !registered" >Register</button>
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
textarea {
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