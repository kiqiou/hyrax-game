<template>
  <div class="min-h-screen w-full mx-auto p-4 sm:p-6 flex flex-col justify-between items-center gap-6 bg-gradient-to-br from-blue-300/40 to-red-300/40">
    <div class="w-full flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
        <p class="font-bold text-2xl sm:text-3xl text-black/80">Awawa Coins</p>
        <p class="text-xl sm:text-2xl text-black/80">{{ count === 0 ? '0' : count }}</p>
      </div>
      <img :src="AwawaCoin" class="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg" />
    </div>

    <div class="w-full max-w-3xl flex flex-col gap-4 items-center">
      <p class="font-bold text-xl sm:text-2xl text-black/80 mb-1">Hyrax name:</p>
      <p class="font-bold text-2xl sm:text-4xl text-black/80 mb-4 text-center break-words">{{ name }}</p>

      <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
        <img v-if="!isHyraxBought" :src="Hyrax" @click="count += 2" class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300" />
        <img v-else :src="Hyraxes" @click="count += 2" class="w-full max-w-[180px] sm:max-w-[240px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300" />
        <img v-if="isLeafsBought" :src="Leafs" class="w-full max-w-[140px] sm:max-w-[180px] rounded-3xl shadow-xl active:scale-95 transition-all duration-300" />
      </div>

      <input v-model="name" placeholder="Введите имя" class="w-full max-w-md bg-gradient-to-br from-blue-300/40 to-red-300/40 rounded-2xl p-3 text-center placeholder:text-black/50" />

      <div class="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
        <button @click="buyLeafs" class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Купить даману листиков (30 Awawa Coins)</button>
        <button @click="buyHyrax" class="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Купить еще даманов (100 Awawa Coins)</button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import AwawaCoin from '../assets/images/awawaCoin.jpg'
import Leafs from '../assets/images/leafs.jpg'
import Hyrax from '../assets/images/hyrax.jpg'
import Hyraxes from '../assets/images/hyraxes.jpg'
import {ref} from 'vue'

const name = ref('')
const count = ref(0)
const isLeafsBought = ref(false)
const isHyraxBought = ref(false)

const buyLeafs = () => {
  if (count.value >= 30) {
    count.value -= 30
    isLeafsBought.value = true
    alert('Вы купили даману листиков!')
  } else {
    alert('Недостаточно Awawa Coins для покупки листиков.')
  }
}

const buyHyrax = () => {
  if (count.value >= 100) {
    count.value -= 100
    isHyraxBought.value = true
    alert('Вы купили даманов!')
  } else {
    alert('Недостаточно Awawa Coins для покупки дамана.')
  }
}

</script>
