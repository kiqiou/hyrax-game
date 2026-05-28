<template>
  <div
    class="relative w-full min-h-screen overflow-x-auto overflow-y-hidden bg-white"
  >
    <Header class="p-4"></Header>
    <img
      src="@/assets/images/shop.jpg"
      alt="shop"
      class="min-w-[1400px] w-full h-full select-none"
      draggable="false"
    />

    <div
      v-for="value in shopStore.items"
      :key="value.id"
      class="absolute group"
      :style="{
        left: `${value.x}px`,
        top: `${value.y}px`,
      }"
    >
      <div
        class="bg-white/85 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-white/40 p-3 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-yellow-300/50"
      >
        <div class="overflow-hidden rounded-xl w-30 h-30">
          <img
            :src="value.url"
            class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <p class="mt-3 text-center text-sm font-extrabold text-gray-800">
          {{ value.label }}
        </p>

        <div
          class="mt-2 rounded-full bg-yellow-300 px-3 py-1 text-center text-xs font-black text-black shadow"
        >
          {{ value.price }} Awawa Coins
        </div>
        <button
          v-if="!value.bought"
          class="mt-3 w-full rounded-xl bg-gradient-to-r from-pink-300 to-orange-300 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50 active:scale-95"
          @click="shopStore.buyItem(value.id)"
        >
          Buy
        </button>
        <div
          v-else
          class="mt-3 w-full align-center rounded-xl bg-green-400 py-2 text-sm font-bold text-white shadow-lg"
        >
          <p class="text-center">Purchased</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import { useShopStore } from "../stores/shop";
import { useWalletStore } from "../stores/wallet";

const shopStore = useShopStore();
const walletStore = useWalletStore();
const wallet = walletStore.wallet;
</script>
