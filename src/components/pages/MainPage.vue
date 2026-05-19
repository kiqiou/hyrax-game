<template>
  <div class="min-h-screen w-full mx-auto p-4 sm:p-6 flex flex-col justify-between items-center gap-6 bg-gradient-to-br from-blue-300/40 to-red-300/40">
    <div class="w-full flex flex-row sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
        <p class="font-bold text-2xl sm:text-3xl text-black/80">Awawa Coins</p>
        <p class="text-xl sm:text-2xl text-black/80">{{ walletStore.wallet === 0 ? '0' : walletStore.wallet }}</p>
      </div>
      <div class="flex flex-row gap-5 justify-center items-center">
      <RouterLink
        to="/shop"
        class="
          relative
          px-6 py-3
          text-lg sm:text-xl
          font-extrabold
          text-white
          rounded-full
          bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-300
          shadow-lg shadow-orange-300/50
          hover:scale-110
          active:scale-95
          transition-all duration-300
          border-2 border-white/40
          overflow-hidden
        "
      >
        <span class="relative z-10">SHOP</span>

        <!-- glow эффект -->
        <span
          class="
            absolute inset-0
            bg-white/20
            blur-xl
            opacity-0
            hover:opacity-100
            transition
          "
        />
      </RouterLink>
      </div>
   </div>

    <div class="w-full max-w-3xl flex flex-col gap-4 items-center">
      <p class="font-bold text-xl sm:text-2xl text-black/80 mb-1">Hyrax name:</p>
      <p class="font-bold text-2xl sm:text-4xl text-black/80 mb-4 text-center break-words">{{ name }}</p>

      <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
        <img
            v-if="hyrax?.bought"
            :src="Hyraxes"
             @click="walletStore.addCoins" class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300" />
          <img
            v-else
            :src="Hyrax" @click="walletStore.addCoins" class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300" />
          <img
            v-if="leafs?.bought"
            :src="leafs.url"
            class="max-w-[130px] sm:max-w-[130px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300"
          />
          <img
            v-if="bow?.bought"
            :src="bow.url"
            class="absolute left-1/2 w-16"
            :class="hyrax?.bought ? 'top-80' : 'top-90 left-20'"
          />
                  
      </div>

      <input v-model="name" placeholder="Введите имя" class="w-full max-w-md bg-gradient-to-br from-blue-300/40 to-red-300/40 rounded-2xl p-3 text-center placeholder:text-black/50" />

      <div class="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
        <button @click="walletStore.buyMultiplier" class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Купить множитель (50 Awawa Coins)</button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import AwawaCoin from '../../assets/images/awawaCoin.jpg'
import Leafs from '../../assets/images/leafs.jpg'
import Hyrax from '../../assets/images/hyrax.jpg'
import Hyraxes from '../../assets/images/hyraxes.jpg'
import {computed, ref} from 'vue'
import { RouterLink } from 'vue-router'
import { useWalletStore } from '../../stores/wallet'
import { useShopStore } from '../../stores/shop'

const name = ref('')

const walletStore = useWalletStore()
const shop = useShopStore()

const leafs = computed(() =>
  shop.items.find(i => i.id === 'leafs')
)

const hyrax = computed(() =>
  shop.items.find(i => i.id === 'hyrax')
)

const bow = computed(() =>
  shop.items.find(i => i.id === 'bow')
)

</script>
