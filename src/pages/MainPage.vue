<template>
  <div
    class="min-h-screen p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-blue-300/40 to-red-300/40"
  >
    <Header />

    <div class="flex w-full flex flex-col gap-4 items-center">
      <p class="font-bold text-xl sm:text-2xl text-black/80">
        Hyrax name:
      </p>
      <p
        class="font-bold text-2xl sm:text-4xl text-black/80 text-center break-words"
      >
        {{ hyraxName }}
      </p>

      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center"
      >
        <div class="relative w-full flex flex-col items-center justify-center">
          <img
            :src="Hyrax"
            @click="walletStore.addCoins"
            class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300"
          />
         <img
            v-for="item in shop.purchasedItems"
            :key="item.id"
            :src="item.url"
            :class="item.imageClass"
          />
        </div>
      </div>

      <input
        v-model="hyraxName"
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
        <RouterLink to="/forest">
           <button
            class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-br from-green-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Сводить дамана погулять
          </button>
        </RouterLink>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Hyrax from "../assets/images/hyraxWithBackground.jpg";
import { computed, ref, watch } from "vue";
import { useWalletStore } from "../stores/wallet";
import { useShopStore } from "../stores/shop";
import Header from "../components/Header.vue";
import { STORAGE_KEYS } from "../utils/localStorage.ts";

const hyraxName = ref(
  localStorage.getItem(STORAGE_KEYS.HYRAX_NAME) || "Awawa"
);

const walletStore = useWalletStore();
const shop = useShopStore();

watch(hyraxName, (value) => {
  localStorage.setItem(
    STORAGE_KEYS.HYRAX_NAME,
    value
  );
});
</script>
