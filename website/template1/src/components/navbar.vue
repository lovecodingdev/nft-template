<script>
import Logo from "@/components/logo";

export default {
  components: { Logo },
  data() {},
  mounted() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        this.hideMenu();
      });
    });
  },
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
  <header id="navbar" :class="{ 'pb-0 ': menuIsExpanded, 'h-default': !menuIsExpanded }" class="flex xl:flex-row flex-col justify-between text-white py-4 xl:px-36">
    <div class="logo flex justify-between text-2xl flex items-center xl:mr-4 px-4 xl:px-0 xl:-ml-4">
      <div class="block xl:hidden cursor-pointer">
        <img src="@/assets/icons/menu.svg" alt="" class="" @click="showMenu()" />
      </div>

      <div>
        <a href="/">
          <Logo />
          <!-- <img src="@/assets/logos/logo.svg" alt="" class="" /> -->
        </a>
      </div>

      <div :class="{ visible: menuIsExpanded, invisible: !menuIsExpanded }">
        <img src="@/assets/icons/close.svg" alt="" class="block xl:hidden cursor-pointer" @click="hideMenu()" />
      </div>
    </div>
    <nav :class="{ 'flex flex-col ': menuIsExpanded, hidden: !menuIsExpanded }" class="xl:grid xl:grid-flow-col xl:justify-between xl:items-center flex-wrap flex-grow pt-8 xl:p-1">
      <div :class="{ 'flex flex-col': menuIsExpanded }" class="links xl:grid xl:grid-flow-col justify-center item-center gap-x-8 font-bold w-full">
        <a href="#the-story" class="nav-link py-8 naav">the story</a>
        <a href="#roadmap" class="nav-link py-8 naav">Roadmap</a>
        <a href="#team" class="nav-link py-8 naav">Team</a>
        <a href="https://meta-safe.io/" class="nav-link py-8 naav">Whitepaper</a>
        <a href="https://meta-safe.io/" target="_blank" class="nav-link py-8 naav">Demo</a>
        <a href="/mint" class="nav-link py-8 naav">Mint</a>
      </div>
      <div class="socials nav-link flex text-white gap-10 py-8">
        <a href="https://discord.gg" class="naav" target="blank">
          <img src="@/assets/icons/discord.svg" alt="" />
        </a>

        <a href="https://www.instagram.com/" class="naav" target="blank">
          <img src="@/assets/icons/insta.svg" alt="" />
        </a>

        <a href="https://twitter.com" class="naav" target="blank">
          <img src="@/assets/icons/twitter.svg" alt="" />
        </a>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.h-default {
  // height: 106px;
}
#navbar {
  @media (min-width: 1280px) {
    height: 114px;
    background: transparent;
    .logo {
      margin-left: -105px;
      margin-right: -50px;
    }
  }
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
  &:hover {
    filter: drop-shadow(0px 0px 2px white);
  }
  img {
    height: 25px;
  }
  svg {
    height: 26px;

    text-align: center;
  }
}
.nav-link {
  @apply uppercase;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.521);
  @media (min-width: 1280px) {
    border: none;
  }
  &.socials {
    border-bottom: none;
  }
}

.naav {
  &:hover {
    filter: drop-shadow(0px 0px 2px white);
  }
}

.socials {
  img {
    height: 30px;
    width: 30px;
  }
}
</style>
