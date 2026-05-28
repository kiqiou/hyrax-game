<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <img
      src="@/assets/images/forest.jpg"
      alt="forest"
      draggable="false"
      class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
    />

    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-red-300/30"
    />

    <Header class="absolute z-20 p-3 sm:p-4" />

    <div class="absolute inset-0">
      <div class="hyrax-path">
        <div class="hyrax-wrapper">
          <div class="relative">
            <img
              :src="Hyrax"
              @click="walletStore.addCoins"
              class="hyrax-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hyrax from "../assets/images/hyrax.png";

import { onMounted, onBeforeUnmount } from "vue";

import { useWalletStore } from "../stores/wallet";
import { useShopStore } from "../stores/shop";

import Header from "../components/Header.vue";

const walletStore = useWalletStore();

const walkSound = new Audio(
  new URL("../assets/sounds/forest.mp3", import.meta.url).href,
);

walkSound.volume = 0.4;
walkSound.loop = true;

onMounted(() => {
  const startAudio = () => {
    walkSound.play();

    window.removeEventListener("click", startAudio);
    window.removeEventListener("touchstart", startAudio);
  };

  window.addEventListener("click", startAudio);
  window.addEventListener("touchstart", startAudio);
});

onBeforeUnmount(() => {
  walkSound.pause();
  walkSound.currentTime = 0;
});
</script>

<style scoped>
.hyrax-path {
  position: absolute;
  inset: 0;
}

.hyrax-wrapper {
  position: absolute;

  width: clamp(140px, 18vw, 240px);

  animation: walkPath 18s linear infinite;
}

.hyrax-image {
  width: 100% ;

  border-radius: 24px;

  cursor: pointer;

  transition: transform 0.2s;

  animation:
    sniff 6s ease-in-out infinite,
    roll 18s ease-in-out infinite;
}

.hyrax-image:active {
  transform: scale(0.96);
}

@keyframes walkPath {
  0% {
    left: 5%;
    top: 70%;
    transform: scaleX(1);
  }

  10% {
    left: 5%;
    top: 70%;
    transform: scaleX(1);
  }

  15% {
    left: 5%;
    top: 70%;
    transform: scaleX(1);
  }

  25% {
    left: 25%;
    top: 60%;
    transform: scaleX(1);
  }

  30% {
    left: 25%;
    top: 60%;
    transform: scaleX(1);
  }

  35% {
    left: 25%;
    top: 60%;
    transform: scaleX(1);
  }

  50% {
    left: 70%;
    top: 55%;
    transform: scaleX(1);
  }

  55% {
    left: 70%;
    top: 55%;
    transform: scaleX(1);
  }

  75% {
    left: 45%;
    top: 35%;
    transform: scaleX(-1);
  }

  80% {
    left: 45%;
    top: 35%;
    transform: scaleX(-1);
  }

  85% {
    left: 45%;
    top: 35%;
    transform: scaleX(-1);
  }

  100% {
    left: 5%;
    top: 70%;
    transform: scaleX(-1);
  }
}

@keyframes sniff {
  0%,
  100% {
    rotate: 0deg;
  }

  25% {
    rotate: 0deg;
  }

  29% {
    rotate: 4deg;
  }

  50% {
    rotate: 0deg;
  }

  54% {
    rotate: 4deg;
  }
}

@keyframes roll {
  0%,
  58% {
    transform: rotate(0deg);
  }

  65% {
    transform: rotate(180deg) scale(1.1);
  }

  72% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
