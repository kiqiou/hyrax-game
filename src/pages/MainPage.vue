<template>
  <div
    class="min-h-screen w-full mx-auto p-4 sm:p-6 flex flex-col justify-between items-center bg-gradient-to-br from-blue-300/40 to-red-300/40"
  >
    <Header />

    <div class="w-full max-w-3xl flex flex-col gap-4 items-center">
      <p class="font-bold text-xl sm:text-2xl text-black/80">
        Hyrax name:
      </p>
      <p
        class="font-bold text-2xl sm:text-4xl text-black/80 text-center break-words"
      >
        {{ name }}
      </p>

      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center"
      >
        <div class="relative w-full flex flex-col items-center justify-center">
          <img
            v-if="hyrax?.bought"
            :src="hyrax.url"
            @click="walletStore.addCoins"
            class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300"
          />
          <img
            v-else
            :src="Hyrax"
            @click="walletStore.addCoins"
            class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300"
          />
          <img
            v-if="leafs?.bought"
            :src="leafs.url"
            class="max-w-[130px] sm:max-w-[130px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300"
          />
          <img
            v-if="bow?.bought"
            :src="bow.url"
            class="absolute top-0 left-1/2 -translate-x-1/2 w-12"
          />
        </div>
      </div>

      <input
        v-model="name"
        placeholder="Введите имя"
        class="w-full max-w-md bg-gradient-to-br from-blue-300/40 to-red-300/40 rounded-2xl p-3 text-center placeholder:text-black/50"
      />

      <div
        class="w-full flex flex-col sm:flex-row gap-3 items-center justify-center"
      >
        <button
          @click="walletStore.buyMultiplier"
          class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Купить множитель (50 Awawa Coins)
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Hyrax from "../assets/images/hyrax.jpg";
import { computed, ref } from "vue";
import { useWalletStore } from "../stores/wallet";
import { useShopStore } from "../stores/shop";
import Header from "../components/Header.vue";

const name = ref("");

const walletStore = useWalletStore();
const shop = useShopStore();

const leafs = computed(() => shop.items.find((i) => i.id === "leafs"));

const hyrax = computed(() => shop.items.find((i) => i.id === "hyrax"));

const bow = computed(() => shop.items.find((i) => i.id === "bow"));
</script>
