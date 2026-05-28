<template>
  <div
    class="relative min-h-screen p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-blue-300/40 to-red-300/40"
  >
    <img
      :src="prestigeStore.currentPrestige?.imageUrl"
      alt="background"
      draggable="false"
      class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
    />

    <div class="z-20 flex flex-col items-center justify-between gap-5 flex-1">
      <Header />

      <div class="flex flex-col items-center">
        <div class="relative top-10 flex flex-row gap-1">
          <div
            class="rounded-full p-1 bg-white/55 backdrop-blur-xl border-2 border-white/60 shadow-xl"
          >
            <p class="text-sm font-black tracking-wide text-black/70">
              ✨ {{ hyraxName }} ✨
            </p>
          </div>
          <button
            @click="isModalOpen = true"
            class="text-sm text-black/60 bg-white/55 rounded-full p-1 border-2 border-white/60 active:scale-95"
          >
            ✏️
          </button>
        </div>
        <div class="relative top-10 flex items-center justify-center">
          <div
            class="flex flex-col gap-2 animate-[float_3s_ease-in-out_infinite]"
          >
            <img
              :src="Hyrax"
              @pointerdown="walletStore.addCoins"
              @touchstart="walletStore.addCoins"
              class="w-full max-w-[220px] sm:max-w-[260px] rounded-3xl cursor-pointer active:scale-95 transition-all duration-300"
            />
            <img
              v-for="item in shopStore.purchasedItems"
              :key="item.id"
              :src="item.url"
              :class="item.imageClass"
            />
          </div>
        </div>
      </div>

      <div class="z-20 w-full max-w-md mx-auto flex flex-col gap-2">
        <button
          @click="walletStore.buyMultiplier"
          class="flex flex-col items-center justify-center py-3 rounded-3xl bg-gradient-to-br from-blue-400 to-yellow-300 border border-white/40 shadow-xl active:scale-95 transition"
        >
          <span class="text-lg">x2 Множитель</span>
          <span class="text-xs opacity-70">50 AC</span>
        </button>

        <RouterLink to="/forest">
          <button
            class="flex flex-col items-center justify-center w-full py-3 rounded-3xl bg-gradient-to-br from-green-400 to-lime-300 border border-white/40 shadow-xl active:scale-95 transition"
          >
            <span class="text-lg">🌿Прогулка</span>
            <span class="text-xs opacity-70">free</span>
          </button>
        </RouterLink>

        <button
          @click="prestigeStore.buyPrestige"
          class="flex flex-col items-center justify-center py-3 rounded-3xl bg-gradient-to-br from-pink-400 to-purple-300 border border-white/40 shadow-xl active:scale-95 transition"
        >
          <span class="text-lg">✨ Престиж</span>
          <span class="text-xs opacity-70">
            {{ prestigeStore.nextPrestige?.price }} AC
          </span>
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-5"
  >
    <div
      class="w-full max-w-sm bg-white backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl flex flex-col gap-4"
    >
      <p class="text-2xl font-black text-center text-black/70">Имя дамана</p>

      <input
        v-model="hyraxName"
        placeholder="Введите имя"
        class="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-2xl px-4 py-3 text-center outline-pink-300"
      />

      <button
        @click="isModalOpen = false"
        class="py-3 rounded-2xl bg-gradient-to-r from-pink-300 to-yellow-200 font-bold text-black/70"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hyrax from "../assets/images/hyrax.png";
import { computed, ref, watch } from "vue";
import { useWalletStore } from "../stores/wallet";
import { useShopStore } from "../stores/shop";
import Header from "../components/Header.vue";
import { STORAGE_KEYS } from "../utils/localStorage.ts";
import { usePrestigeStore } from "../stores/prestige.ts";

const hyraxName = ref(localStorage.getItem(STORAGE_KEYS.HYRAX_NAME) || "Awawa");

const isModalOpen = ref(false);

const walletStore = useWalletStore();
const shopStore = useShopStore();
const prestigeStore = usePrestigeStore();

watch(hyraxName, (value) => {
  localStorage.setItem(STORAGE_KEYS.HYRAX_NAME, value);
});
</script>

<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
