<script>
import Layout from "@/layouts/main";
import appConfig from "@/app.config";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  page: {
    title: "Home",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout },
  watch: {
    isPlaying: {
      handler: (newVal, old) => {},
    },
  },

  data() {
    return {
      //audioFile: require("@/assets/sounds/background.wav"),
      videoRobotFight_1: require("@/assets/videos/ITIRUM_FIGHT_WEBSITE_COMPRESSED.mp4"),
      videoRobotFight_2: require("@/assets/videos/ITIRUM_GAMEPLAY_CORRIDOR_COMPRESSED.mp4"),
      isPlaying: false,
      userHasInterract: false,
      roadmap: [
        { 
          iconCount: 1,
          percent: "25%",
          text: "We release to the META community an exclusive video trailer of the fantastic graphisms of our 3D PlayToEarn game final version.",
        },
        {
          iconCount: 2,
          percent: "50%",
          text: "We launch an alpha version of our game in which holders can compete with their robots and bet cryptocurrencies.",
        },
        {
          iconCount: 3,
          percent: "75%",
          text: "We organize an epic fighting tournament where the best fighters will have the chance to share a huge prize pool in Ether and receive a terrific and unique figurine of their robot.",
        },
        {
          iconCount: 4,
          percent: "100%",
          text: "We launch the feature complete of our 3D PlayToEarn game developed by a pro game team of developers with the introduction of our own cryptocurrency $META.",
        },
      ],
      team: [
        [
          {
            name: "User1",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier01.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "BUSINESS INTELLIGENCE ENGINEER",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "User1",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier02.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "WEB3 DEVELOPER",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "User1",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier03.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "GAME DIRECTOR",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
        ],
        [
          {
            name: "THOMAS",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier04.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "ART DIRECTOR",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "YVEs",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier05.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "3D ANIMATION ARTIST",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "GASPARD",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier06.png"),
            icon: require("../../assets/images/team/drive.svg"),
            role: "3D Developper",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
        ],
        [
          {
            name: "Vincent",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier07.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "Cinematic 3D Animator",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "Sophie",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier08.png"),
            icon: require("../../assets/images/team/drive.svg"),
            role: "environnement 3D artist ",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "Pierre",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier09.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "TECHNICAL ADVISOR",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
          {
            name: "Gabriel",
            image: require("../../assets/EXPORT BOUCLIER/Bouclier10.png"),
            icon: require("../../assets/images/team/ln.svg"),
            role: "Game engine developer",
            link: "https://www.linkedin.com/in/guillaumeagis/",
          },
        ],
      ],
      playCard: [
        require("@/assets/rlCart/Card_Avoid_Blue-min.png"),
        require("@/assets/rlCart/Card_Block_Yellow-min.png"),
        require("@/assets/rlCart/card_Dash_blue-min.png"),
        require("@/assets/rlCart/Card_Shielded_Yellow-min.png"),
        require("@/assets/rlCart/Card_SwordLight_Blue-min.png"),
        require("@/assets/rlCart/Card_SwordHeavy_Yellow-min.png"),
        require("@/assets/rlCart/Card_Punch_Blue-min.png"),
        require("@/assets/rlCart/Card_Punch_Yellow-min.png"),
      ],
      mekalords: [
        {
          img: require("../../assets/EXPORT CARD NFT 2/CardNFT01.png"),
        },
        {
          img: require("../../assets/EXPORT CARD NFT 2/CardNFT04.png"),
        },
        {
          img: require("../../assets/EXPORT CARD NFT 2/CardNFT03.png"),
        },
        {
          img: require("../../assets/EXPORT CARD NFT 2/CardNFT02.png"),
        },
      ],
      faq: [
        {
          q: "What is the mint price ?",
          r: "0.088 ETH",
          hide: true,
        },
        {
          q: "How many NFT can I mint per wallet ? ",
          r: "4",
          hide: true,
        },
        {
          q: "How can I register for the raffle ?",
          r: "TBA",
          hide: true,
        },
        {
          q: "When is the public sale ?",
          r: "03.13.2022 at 5 p.m. UTC",
          hide: true,
        },
        {
          q: "How do I know if I won the raffle?",
          r: "TBA",
          hide: true,
        },
        {
          q: "Do I need to register for the raffle if I'm whitelisted?",
          r: "If you are an Alpha Lord, you don't",
          hide: true,
        },
      ],
      logoMini: require("../../assets/logos/logo-mini.svg"),
    };
  },
  mounted() {
    //animation for 'the-project' section
    this.sectionSlideAnimation(); //using gsap to animate may intefere with normal navogation with anchor link

    this.roadmapAnimation();

    // trigger audio play event.
    //this.isPlaying = true;
    // const player = document.querySelector("#audio");
    // setTimeout(() => {
    //   player.muted = false;
    //   player.pause();
    //   player.play();
    // }, 1000);

    document.addEventListener("mousedown", (e) => {
      if (!this.userHasInterract && this.isMobile() === false) {
        this.play();
        this.userHasInterract = true;
      }
    });

    // add video background where it's needed
    this.addVideoBackGround();
  },
  methods: {
    play() {
      const player = document.querySelector("#audio");
      player.currentTime = 0;

      if (player) {
        if (!this.isPlaying) {
          player.play().then((res) => {
            this.isPlaying = true;
          });
        }
        if (player.muted) {
          player.muted = false;
          this.isPlaying = false;
        }
      }
    },
    pause() {
      const player = document.querySelector("#audio");
      if (player) {
        player.muted = true;
        this.isPlaying = false;
      }
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    sectionSlideAnimation() {
      if (window.matchMedia("(max-height:700px), (max-width: 1024px)").matches) return;
      const navbar = document.getElementById("navbar");
      const section1 = document.getElementById("the-story");
      const section2 = document.getElementById("fight");
      const othersSections = document.querySelectorAll("section:not(#main,#the-story), footer");
      let section1Pos = window.getComputedStyle(section1).position;
      window.addEventListener("scroll", (e) => {
        const canFixedSection1 = section1.getBoundingClientRect().top <= navbar.getBoundingClientRect().top;
        const canFixedSection2 = section2.getBoundingClientRect().top > section1.getBoundingClientRect().bottom + 100;
        if (canFixedSection1) {
          section1.style.position = "fixed";
          section1.style.zIndex = "9";
          section1.style.top = navbar.getBoundingClientRect().top + "px";
          section1.style.left = 0;
          section2.style.marginTop = "calc(100vh + 100px )";
          othersSections.forEach((e) => {
            e.style.position = "relative";
            e.style.zIndex = "99";
          });
        }

        if (canFixedSection1 && canFixedSection2) {
          // return;
          section1.style.position = "unset";
          section1.style.zIndex = "1";
          section1.style.top = "unset";
          section2.style.marginTop = 0;
          othersSections.forEach((e) => {
            e.style.position = "unset";
            e.style.zIndex = "1";
          });
        }
      });
    },
    roadmapAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#cardT",
            start: "bottom bottom",
            end: "bottom bottom",
            markers: this.scrollMarker,
            scrub: false,
            pin: false,
          },
        })
        .from("#c0", { x: -innerWidth, opacity: 0 })
        .from("#c1", { x: -innerWidth, opacity: 0 })
        .from("#c2", { x: innerWidth, opacity: 0 })
        .from("#c3", { x: innerWidth, opacity: 0 })
        .from("#c4", { x: -innerWidth, opacity: 0 })
        .from("#c5", { x: -innerWidth, opacity: 0 })
        .from("#c6", { x: innerWidth, opacity: 0 })
        .from("#c7", { x: innerWidth, opacity: 0 });

      const section = "#roadmap";
      ScrollTrigger.matchMedia({
        "(min-height: 700px) and (min-width: 1024px)": () => {
          const levels = [1, 2, 3, 4].map((e) => (50 / 4) * e);
          let items = gsap.utils.toArray("#roadmap .rdmp-item");
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: ({ progress }) => {
              items.forEach((item, index) => {
                if (!item.classList.contains("animated")) {
                  gsap.fromTo(
                    item,
                    {
                      opacity: 0.001,
                    },
                    {
                      opacity: 1,
                      duration: 1,
                      delay: (index + 1) * 1,
                      ease: "sin",
                    }
                  );
                  item.classList.add("animated");
                }
              });
            },
            onLeave: ({ progress }) => {},
            markers: false,
          });
        },
      });
    },
    addVideoBackGround() {
      const videos = [this.videoRobotFight_2, this.videoRobotFight_1];
      const sections = document.querySelectorAll(".bg-video");
      if (sections.length > videos.length) return;
      sections.forEach((section, index) => {
        let videoCtn = document.createElement("div");
        videoCtn.classList.add("videoCtn");
        videoCtn.style.position = "absolute";
        videoCtn.style.top = "0";
        videoCtn.style.left = "0";
        videoCtn.style.height = "100%";
        videoCtn.style.width = "100%";
        videoCtn.style.zIndex = "-1";

        let video = document.createElement("video");
        video.setAttribute("src", videos[index]);
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("loop", "loop");
        video.setAttribute("mute", "mote");
        video.style.height = "100%";
        video.style.width = "100%";
        video.style.objectFit = "cover";

        video.mutted = true;
        video.volume = 0;

        videoCtn.append(video);
        section.style.position = "relative";
        section.append(videoCtn);
      });
    },
  },
};
</script>

<template>
  <Layout>
    <!-- Main header -->
    <section id="top" class="main grid grid-col-2 py-10 lg:px-36 px-10 h-screen-c">
      <video id="audio" class="hidemob" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 2; background-color: black; object-fit: cover" autoplay loop preload="auto" muted nocontrols>
        <source src="https://s3.eu-west-3.amazonaws.com/assets.initium.io/INITIUM_GAMEPLAY_FIN_SANS_TEXTE_COMPRESSED.m4v" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <img class="topVideo showMob" src="@/assets/images/blue_black.jpg" />

      <div class="showMob" style="z-index: 3; margin: auto">
        <img src="../../assets/logos/logo-2.png" alt="" />
      </div>
    </section>

    <!-- The story -->
    <section id="the-story" class="the-story bg-black grid lg:grid-cols-6 lg:grid-rows-1 py-20 lg:pl-36 px-8 text-white min-h-screen-c">
      <div class="text lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1" style="z-index: 1000">
        <h1 class="font-kusanagi uppercase lg:text-6xl text-4xl my-4 lg:whitespace-nowrap" style="overflow: visible">THE STORY</h1>
        <p class="pt-6 md:text-xl xl:text-4xl 2xl:5xl">
          In 2122, human beings' greediness and thirst for power led them to their own self destruction. Chaos has taken over peace in a society which is on the brink. While life on Earth is slowly fading away, a few human beings have found a way to survive. A group of rich people have adapted to
          this world without oxygen by transferring their consciousness into a machine. A new era has just started : King lord.
        </p>
      </div>
      <div class="h-full order-first lg:order-last lg:col-start-4 lg:col-span-4 lg:row-start-1 lg:row-span-1">
        <img src="@/assets/images/COUCOU_GRIS_GIF_COMPRESSED_2.gif" class="w-full h-full" style="z-index: 100" alt="" />
      </div>
    </section>

    <!-- Fight to earn -->
    <section id="fight" class="fight bg-video flex flex-col h-screen-c">
      <div class="flex-grow flex items-center justify-center">
        <img src="../../assets/logos/logo-2.png" class="" alt="" />
      </div>
      <img class="topVideo showMob" src="@/assets/images/red_blue.jpg" />
      <div class="text-center flex items-center justify-center banner text-white w-full lg:py-20 py-10" style="z-index: 1000">
        <span class="font-kusanagi text-3xl lg:text-7xl"> PREPARE TO FIGHT </span>
      </div>
    </section>

    <!-- Card -->
    <section id="card" class="team bg-black text-white grid gap-10 py-20 lg:px-36 px-10 pb-20 lg:pt-36 min-h-screen-c">
      <h1 id="cardT" class="font-kusanagi lg:text-7xl text-4xl text-center">COLLECT CARDS AND PREPARE THE BEST STRATEGY</h1>

      <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; width: 100%; max-width: 1200px; margin: auto">
        <img v-for="(card, i) in playCard" :key="'c' + i" :id="'c' + i" :src="card" class="cardmove" :style="{ 'animation-duration': Math.random() * 3 + 1 + 's' }" />
      </div>
    </section>

    <!-- Metasafe is a collection ... -->
    <section id="collection" class="fight bg-video flex flex-col h-60 h-screen-c">
      <!-- <div class="flex-grow"></div> -->
      <img class="topVideo showMob" src="@/assets/images/yellow_blue.jpg" />
      <div class="text-center flex items-center justify-center banner text-white w-full lg:py-20 py-10 absolute bottom-0 left-0" style="z-index: 1000">
        <span class="font-kusanagi text-2xl lg:text-7xl">
          Metasafe is a collection<br />
          of 4,444 NFTS
        </span>
      </div>
    </section>

    <!-- Mekalords are comming -->
    <section id="mekalords" class="bg-black flex flex-col gap-8 py-10 lg:px-36 px-10 h-screen-c">
      <div class="grid lg:grid-cols-2 grow gap-8 lg:gap-8 pics">
        <div class="h-full place-content-center">
          <img class="" src="@/assets/EXPORT CARD NFT 2/CardNFT06.png" alt="" id="mekMain" class="animateMek md:mx-auto" style="width: auto" :style="{ 'animation-duration': Math.random() * 3 + 1 + 's' }" />
        </div>
        <div class="grid grid-cols-2 gap-8 minis h-full">
          <img v-for="(item, i) in mekalords" :key="JSON.stringify(item)" :src="item.img" alt="" class="animateMek" :style="{ 'animation-duration': Math.random() * 3 + 1 + 's' }" />
        </div>
      </div>
      <div class="text-center flex items-center justify-center text-white w-full h-52 text">
        <div>
          <span class="font-kusanagi md: text-3xl xl:text-7xl leading-relaxed break-words">
            « MetaLord ARE <br class="lg:hidden" />
            COMING »
          </span>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="roadmap bg-white py-20 lg:px-36 px-10 h-screen-c flex flex-col justify-center items-center">
      <h1 class="font-kusanagi lg:text-7xl text-4xl mb-20 text-center">ROADMAP</h1>
      <div class="px-8 lg:px-0 grid lg:grid-flow-col lg:grid-cols-4 gap-10 justify-evenly justify-items-center roadmap-container">
        <div :class="'rdmp-item-' + (i + 1)" class="rdmp-item grid auto-cols-fr auto-cols-min lg:auto-cols-auto lg:auto-rows-max auto-rows-min gap-4" v-for="(item, i) in roadmap" :key="JSON.stringify(item)">
          <div class="auto-cols-fr">
            <div class="mini-logo-container">
              <div class="logos">
                <img v-for="icon in item.iconCount" :key="JSON.stringify(icon)" :src="logoMini" alt="" />
              </div>
            </div>
            <div class="font-kusanagi text-7xl">
              <span>{{ item.percent }}</span>
            </div>
          </div>

          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="team bg-black text-white grid gap-10 py-20 lg:px-36 px-10 pb-20 lg:pt-36 min-h-screen-c">
      <h1 class="font-kusanagi lg:text-7xl text-4xl text-center">TEAM</h1>
      <div class="grid gap-20">
        <div class="grid lg:grid-flow-col justify-evenly gap-y-4 team-row" v-for="row in team" :key="JSON.stringify(row)">
          <div class="team-item grid grid-flow-rows auto-cols-min auto-rows-min gap-2" v-for="item in row" :key="JSON.stringify(item)">
            <div class="font-kusanagi lg:text-lg text-center uppercase">
              <span>{{ item.name }}</span>
            </div>
            <div class="bg-black h-20 w-full image-container">
              <img class="h-full w-full photo" :src="item.image" alt="" />
              <a :href="item.link" v-if="item.link"  target="_blank" rel="noopener noreferrer"><img class="rounded-xl icon bg-white h-10 w-10" :src="item.icon" alt="" /></a>
            </div>
            <div class="font-bold lg:text-lg text-base text-center uppercase">
              <span>{{ item.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faq -->
    <section id="faq" class="faq bg-black text-white grid gap-20 py-20 2xl:px-36 lg:px-4 px-0 pb-20 lg:pt-26 min-h-screen-c">
      <h1 class="font-kusanagi lg:text-7xl text-4xl text-center">FAQ</h1>
      <div class="grid gap-20 justify-center faq-container">
        <div class="faqLine" v-for="(item, i) in faq" :key="i" @click="item.hide = !item.hide" :id="'faq' + i">
          <div class="cornerLeftTop" />
          <div class="faqCol">
            <p class="text faqTxt question">{{ item.q }}</p>
            <p class="text faqTxt answer" v-if="!item.hide">{{ item.r }}</p>
          </div>
          <div class="cornerRightBottom" />
        </div>
      </div>
    </section>

    <!--  audio controls FAB -->
    <div class="fab">
      <img src="@/assets/icons/play.svg" alt="" v-if="!isPlaying" @click="play()" class="play" />
      <img src="@/assets/icons/pause.svg" alt="" v-if="isPlaying" @click="pause()" class="" />
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.topVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: black;
  object-fit: cover;
}
.hideMob {
  display: block;
}
.showMob {
  display: none;
}
@media (min-width: 800px) {
  .hideMob {
    display: none;
  }
}
@media (max-width: 800px) {
  .showMob {
    display: block;
  }
}

.animateMek {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  // animation: 4s linear 0s infinite alternate move;
  &:hover {
    animation: none;
    transform: scale(1.2);
  }
}

@keyframes moveMek {
  0% {
    transform: rotate(3deg);
    filter: drop-shadow(0px 0px 2px black);
  }
  100% {
    transform: rotate(-3deg);
    filter: drop-shadow(0px 0px 1px black);
  }
}

.cardmove {
  width: 200px;
  margin: 25px;
  transition: all 0.5s ease-in-out;
  animation: 4s linear 0s infinite alternate move;
  @media (max-width: 1024px) {
    width: 100px;
  }
}

@keyframes move {
  0% {
    transform: rotate(3deg);
    filter: drop-shadow(0px 0px 5px #fff);
  }
  100% {
    transform: rotate(-3deg);
    filter: drop-shadow(0px 0px 1px #fff);
  }
}

.h-screen-c {
  @media (min-width: 1024px) {
    // height: calc(100vh - 5rem);
    height: calc(100vh);
  }
}
.min-h-screen-c {
  @media (min-width: 1024px) {
    min-height: calc(100vh);
  }
}

section.main {
  width: 100%;
  height: calc(100vh);
  // background-image: url("../../assets/images/cover-mobile.png");
  // background-blend-mode: color;
  background-color: black;
  // background-repeat: no-repeat;
  // background-position-x: 47%;
  // background-size: cover;
  // @media (min-width: 1500px) {
  // }
  // @media (min-width: 768px) {
  // background-image: url("../../assets/images/cover-web.png") !important;
  // background-position-x: 50%;
  // background-position-y: 36%;
  // }

  .title {
    display: flex;
    align-items: self-end;
    padding-bottom: 3%;
    font-size: 1rem;
    line-height: 1.5;
    @media (min-width: 1280px) {
      font-size: 2rem;
      align-items: unset;
      padding: 0%;
      margin-top: 22%;
    }
    @media (max-height: 700px) and (min-width: 1280px) {
      font-size: 1.5rem;
    }
  }
  .arrow {
    margin-top: 10%;
    img {
      width: 65%;
    }
    @media (min-width: 648px) {
      img {
        width: auto;
      }
    }
  }
  .logo {
    padding-top: 75%;
    margin-bottom: 43%;
    img {
      width: 100%;
    }
    @media (min-width: 768px) {
      padding-top: 12%;
      margin-bottom: 0%;
      img {
        width: 58%;
      }
    }
  }
}

section.fight {
  // min-height: calc(100vh - 5rem);
  min-height: calc(100vh);
  background-size: cover;
  // background-image: url("../../assets/images/robots-fight.png");
  overflow: hidden;
  background-blend-mode: color;
  background-color: #0000002e;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .banner {
    background: #ffffff24;
  }
}

#faq {
  @media (min-width: 1024px) {
    .faq-container {
      grid-template-columns: auto auto;
    }
  }

  min-height: calc(100vh);
  background-size: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-attachment: scroll;
  background-blend-mode: color;
  background-color: #000000a1;
  @media (min-width: 800px) {
    background-image: url("../../assets/images/robots-fight.jpg");
  }
  @media (max-width: 800px) {
    background-image: url("../../assets/images/yellow_black.jpg");
  }
}

#mekalords {
  img {
    object-fit: contain;
  }
  min-height: 101vh;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: 70% 30%;
  }
  .pics {
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
      grid-template-rows: 100% !important;
      .minis {
        gap: 20px !important;
        grid-template-rows: 50% 50%;
        grid-template-columns: 50% 50%;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

      img {
        height: calc(100% + 20px);
        width: 100%;
        object-fit: fill;
      }
    }
  }
  .text {
    font-size: 1.5rem;
    @media (min-width: 800px) {
      grid-template-rows: 100% !important;
    }

    @media (max-height: 800px) and (min-width: 700px) {
      height: unset !important;
      span {
        font-size: 2.5rem;
      }
    }
  }
}

#roadmap {
  .mini-logo-container {
    height: 2.5rem;
    background: black;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    .logos {
      padding-right: 1rem;
    }
  }
  .rdmp-item-1 {
    .mini-logo-container {
      height: auto;
      .logos {
        img {
          width: 36px;
          height: 24px;
        }
      }
    }
  }
  .rdmp-item-2 {
    .mini-logo-container {
      .logos {
        width: 50%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .rdmp-item-3 {
    .mini-logo-container {
      .logos {
        width: 75%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .rdmp-item-4 {
    .mini-logo-container {
      .logos {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
#team {
  @media (min-width: 1024px) {
  }
}

#the-story {
  padding-top: 5rem;
  p {
    font-size: 20px !important;
  }
  position: relative;
  @media (max-height: 700px) {
    padding-top: 5rem !important;
    padding: 2rem;
    height: auto;
  }
  @media (min-height: 700px) and (min-width: 1024px) {
    height: calc(100vh);
  }
  @media (min-width: 1024px) {
    padding-top: 5rem !important;
    padding: 2rem;
    grid-template-rows: 100%;
    img {
      object-fit: cover;
    }
  }
}

#collection {
  height: calc(100vh - 5rem);
  @media (min-width: 1280px) {
    min-height: 100vh;
  }
}
.team-item {
  .image-container {
    width: 200px;
    height: 200px;
    position: relative;
    .icon {
      position: absolute;
      bottom: 0px;
      right: 0;
    }
  }
}

.fab {
  @media (min-width: 1024px) {
    height: 50px;
    width: 50px;
  }
  @media (max-width: 800px) {
    display: none;
  }
  height: 50px;
  width: 50px;
  background: rgb(0, 0, 0, 88%);
  border-radius: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 3%;
  bottom: 9%;
  z-index: 999;
  cursor: pointer;
  box-shadow: 0px 15px 29px #000000b0;
  img {
    &.play {
      right: -3px;
      bottom: -1px;
    }
    position: relative;
    height: 50%;
    width: 50%;
  }
}
#audio,
audio,
embed {
  position: fixed;
  left: -9999px;
  z-index: -9999;
}

/*********************************** FAQ View ***********************************/
.contentFAQ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 75px;
}

.faqLine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: 50px;
  // cursor: url("../assets/cursors/Cursor2Glow60px.png") 32 32, auto;
  opacity: 0.85;
  transition: all 300ms ease-in-out;
  > * {
    transition: all 300ms ease-in-out;
  }
  &:hover {
    opacity: 1;
    margin-left: -40px;
    margin-right: -40px;
    margin-top: -35px;
    margin-bottom: 25px;
  }
  &:hover .faqCol {
    margin: 50px;
  }
}
.faqCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  transition: all 300ms ease-in-out;
  > * {
    transition: all 300ms ease-in-out;
  }
}
.faqActive {
  margin-top: 50px;
}
.faqTxt {
  text-align: center;
  margin: auto;
  width: 500px;
  transition: all 300ms ease-in-out;
}

.question {
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
}
.answer {
  margin-top: 50px;
}

.cornerLeftTop {
  width: 40px;
  height: 40px;
  border-radius: 8px 0 0 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px #fff);
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  margin-bottom: -40px;
}
.cornerRightBottom {
  width: 40px;
  height: 40px;
  border-radius: 0 0 8px 0;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px #fff);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  margin-left: calc(100% - 40px);
  margin-top: -40px;
}

@media screen and (max-width: 1024px) {
  .faqTxt {
    width: 300px;
  }
  .faqLine {
    &:hover {
      opacity: 1;
      margin-left: -15px;
      margin-right: -15px;
    }
    &:hover .faqCol {
      margin: 15px;
    }
  }
}
</style>
