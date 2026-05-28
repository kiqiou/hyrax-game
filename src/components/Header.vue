<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
    <div class="flex items-center gap-2">
      <span
        class="text-3xl sm:text-4xl font-extrabold font-fun text-pink-400 drop-shadow-sm"
      >
        Awawa Coins
      </span>
    </div>

    <div class="flex-1 flex justify-between">
      <div
        class="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 shadow-lg border-2 border-white/40 font-fun text-xl sm:text-2xl font-bold text-black w-1/2"
      >
        💰 {{ walletStore.wallet }}
      </div>

      <div class="flex flex-row gap-5 justify-center items-center">
        <RouterLink
          :to="isNotHome ? '/' : '/shop'"
          class="relative px-6 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-300 shadow-lg hover:scale-110 active:scale-95 transition"
        >
          <span class="relative z-10">
            {{ isNotHome ? "HOME" : "SHOP" }}
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWalletStore } from "../stores/wallet";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const walletStore = useWalletStore();

const isNotHome = computed(() => route.path !== "/");
</script>
