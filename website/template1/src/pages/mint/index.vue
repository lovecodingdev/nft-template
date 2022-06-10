<template>
  <Layout>
    <section
      class="fight h-min-screen py-16 flex items-center justify-center lg:px-44 px-8"
    >
    <div class="grid">


      <div class="mb-8 w-full">
        <div class="flex justify-between items-end mb-1 text-white w-full">
          <span class="font-kusanagi text-5xl">
            {{ Math.ceil((currentSupply / totalTokens) * 100) }}%
          </span>
          <span class="text-sm"> {{ currentSupply }}/{{ totalTokens }} </span>
        </div>
        <div class="h-3 w-full border progress">
          <div
            class="h-3 bg-white max-w-full"
            :style="{ width: percent + '%' }"
          ></div>
        </div>
      </div>
      <div class="bg-black py-6 px-8 rounded-3xl text-white md:w-96 w-full">
        <div class="text-center">
          <h1 class="font-kusanagi md:text-4xl text-3xl">Mint</h1>
          <span class="text-sm">4444 NTFs</span>
        </div>

        <form @submit.prevent="() => {}">
          <div class="text-lg font-bold">            
            <div
              class="border-b-2 border-white my-2 py-3 flex justify-between items-center"
            >
              <label for="">Amount</label>

              <span class="flex align-center">
                <button @click="decrement">-</button>
                <div class="mx-3 cursor-pointer">{{ amount }}</div>
                <button @click="increment">+</button>
              </span>

              <button
                class="rounded-lg text-black bg-white p-2 text-sm"
                @click="amount = maxAmount"
              >
                Max
              </button>
            </div>
            <div
              class="border-b-2 border-white my-2 py-3 flex items-center justify-between"
            >
              <label for="">Total</label>
              <span class="text-sm"> {{ 0 * amount }} ETH </span>
            </div>
            Connected to wallet : {{ accountID.substring(1, 4) + "..." + accountID.substring(accountID.length - 4) }}
          </div>
          <div class="flex">
            <button
              class="rounded-lg text-sm md:text-lg text-black bg-white p-2 font-bold w-full mr-2"
              @click="connectWallet"
            >
              {{ accountID ? "Connected" : "Connect wallet" }}
            </button>
            <button
              class="rounded-lg text-sm md:text-lg text-black bg-white p-2 font-bold w-full mr-2"
              @click="mint"
            >
              Mint
            </button>
          </div>
          <div class="text-center mt-3 font-medium">
            Make sure your wallet is connected
          </div>
        </form>
      </div>  </div>
    </section>
  </Layout>
</template>
<script>
import Layout from "@/layouts/main";
var Web3 = require("web3");
var CryptoJS = require("crypto-js");
import abis from "../abis/lucky.json";
import address from "../address/address.json";
var MerkleTree = require("merkletreejs").MerkleTree;
var SHA256 = CryptoJS.SHA256;

const leaves = address.addresses.map((x) =>
  x.replace("0x", "0x000000000000000000000000")
);
const tree = new MerkleTree(leaves, SHA256, { sortPairs: true });
const root = tree.getRoot().toString("hex");

export default {
  components: {
    Layout,
  },
  data() {
    return {
      percent: 10,
      amount: 1,
      maxAmount: 4,
      balance: 0,
      connected_wallet: null,
      address: "",
      accountID: "",
      accountBalance: 0,
      abi: [],
      contract: [],
      wlClaimed: 0,
      // Contract
      isActive: false,
      isPresaleActive: false,
      currentSupply: 0,
      totalTokens: 4444,
      maxSupply: 4444,
      buyLimit: 2,
      nftPrice: 200000000000000000,
      whiteListMaxMint: 2,
      notAllowed: false,
      // Form data
      minted: false,
      isMinting: false,
    };
  },
  async created() {
    await this.loadWeb3();
    this.GetRoot();
  },
  methods: {
    increment() {
      if (this.amount === this.maxAmount) return;
      this.amount++;
    },
    decrement() {
      if (this.amount === 1) return;
      this.amount--;
    },
    submitForm() {},

    goToExternal(url) {
      window.open(url);
    },
    rmCount() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
    addcount() {
      if (this.amount < 5) {
        this.amount++;
      }
    },

    /***********************************/

    GetMerkleProof(walletAddress) {
      const leaf = walletAddress;
      return tree.getHexProof(leaf.replace("0x", "0x000000000000000000000000"));
    },
    GetRoot() {
      console.log("root");
      console.log(root);
      console.log(address.addresses.length);
      console.log("contract : " + this.address);
      return `0x${root}`;
    },
    async loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        window.ethereum.on("accountsChanged", async (accounts) => {
          await this.setWallet(accounts[0]);
          this.wlClaimed = await this.contract.methods
            .whiteListClaimed(this.accountID)
            .call();
        });
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask !"
        );
      }

      await this.loadContractData();
      setInterval(
        function () {
          this.loadContractData();
        }.bind(this),
        1000
      );
    },
    async pick(amount) {
      this.amount = amount;
      console.log(this.amount);
    },
    async loadContractData() {
      const web3 = window.web3;
      const networkId = await web3.eth.net.getId();

      if (networkId !== abis.network) {
        window.alert("Please change to ethereum mainnet.");
        return;
      }

      this.abi = abis.abi;
      this.address = abis.address;
      this.contract = new web3.eth.Contract(this.abi, this.address);
      this.nftPrice = await this.contract.methods.NFTPrice().call();
      this.totalTokens =
        parseInt(await this.contract.methods.MAX_NFT_PUBLIC().call()) + 100;
      this.buyLimit = await this.contract.methods.BUY_LIMIT_PER_TX().call();
      this.isActive = await this.contract.methods.isActive().call();
      this.currentSupply =
        parseInt(await this.contract.methods.totalSupply().call()) + 100;
      this.isPresaleActive = await this.contract.methods
        .isPresaleActive()
        .call();
    },
    async setWallet(address) {
      this.accountID = address;
      this.accountBalance = await window.web3.eth.getBalance(this.accountID);

      this.balance = parseInt(
        await this.contract.methods.balanceOf(this.accountID).call()
      );
    },
    async connectWallet() {
      console.log("Connect to wallet");
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
        await this.setWallet(accounts[0]);
        console.log("wlClaimed " + this.wlClaimed);
      } else {
        // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
        alert("Unable to connect to Metamask");
      }
    },
    //Minting Functionality
    async mint(e) {
      e.preventDefault();

      if (this.accountID === "") {
        window.alert("Please connect wallet first!");
        this.isMinting = false;
        return;
      }
      console.log(this.accountID);
      this.accountBalance = await window.web3.eth.getBalance(this.accountID);
      if (this.accountBalance <= this.nftPrice * this.amount) {
        this.isMinting = false;
        alert(`Insufficient funds`);
        return;
      }
      this.isMinting = true;
      this.isActive = await this.contract.methods.isActive().call();
      this.isPresaleActive = await this.contract.methods
        .isPresaleActive()
        .call();
      console.log("isActive : ", this.isActive);
      console.log("isPresaleActive : ", this.isPresaleActive);

      if (!this.isActive) {
        this.isMinting = false;
        alert("Sale is not active yet!");
        return;
      }

      const noOfTokens = this.amount;
      console.log("nftPrice : ", this.nftPrice);
      if (this.isPresaleActive == true) {
        this.whiteListMaxMint = await this.contract.methods
          .WHITELIST_MAX_MINT()
          .call();
        this.wlClaimed = parseInt(
          await this.contract.methods.whiteListClaimed(this.accountID).call()
        );

        // if (this.wlClaimed + this.amount > this.whiteListMaxMint) {
        //   alert(
        //     `Already minted ${this.wlClaimed} but max is ${this.whiteListMaxMint}`
        //   );
        //   this.isMinting = false;
        //   //this.notAllowed = true;
        //   return;
        // }

        console.log("whiteListMaxMint : ", this.whiteListMaxMint);
        if (noOfTokens < 1 || noOfTokens == undefined) {
          alert("Select at least 1 NFT!");
        } else if (noOfTokens > this.whiteListMaxMint) {
          alert("Buy limit for presale is : " + this.whiteListMaxMint);
          this.notAllowed = true;
        } else if (this.totalSupply >= this.totalTokens) {
          alert("Sold out!");
        } else {
          const proof = await this.GetMerkleProof(this.accountID);
          if (proof.length == 0) {
            alert("This wallet is not Whitelisted");
            this.notAllowed = true;
          } else {
            const result = await this.contract.methods
              .mintNFTDuringPresale(noOfTokens, proof)
              .send({
                from: this.accountID,
                value: parseInt(this.nftPrice) * noOfTokens,
              })
              .on("receipt", function (res) {
                this.minted = true;
                this.isMinting = false;
                console.log("Receipt :", res);
              })
              .on("error", function (err) {
                this.isMinting = false;
                console.log("error:" + err);
                alert("Transaction Error");
              });
            this.minted = true;
            console.log("Test :", result);
          }
        }
      } else {
        if (noOfTokens < 1 || noOfTokens == undefined) {
          alert("Select at least 1 NFT!");
        } else if (this.totalSupply >= this.currentSupply) {
          alert("Sold out!");
        } else {
          const result = await this.contract.methods
            .mintNFT(noOfTokens)
            .send({
              from: this.accountID,
              value: parseInt(this.nftPrice) * noOfTokens,
            })
            .on("receipt", function (res) {
              this.minted = true;
              this.isMinting = false;
              console.log("Receipt :", res);
            })
            .on("error", function (err) {
              this.isMinting = false;
              console.log(err);
              alert("Transaction Error");
            });
          this.minted = true;
          console.log("Test :", result);
        }
      }
      this.isMinting = false;
    },
  },
};
</script>
<style scoped >
section.fight {
  background-size: cover;
  background-image: url("../../assets/images/yellow_vs_red.jpg");
  overflow: hidden;
  background-blend-mode: color;
  background-color: #0000002e;
 
}
 @media (min-width: 768px) {
   .fight{
  background-image: url("../../assets/images/robots-fight.jpg") !important;
    /* background-position-x: 31%;
    background-position-y: 24%; */
  }
   }

.h-min-screen {
  min-height: calc(100vh - 5rem);
}
</style>
