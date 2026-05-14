<template>
    <div class="p-6 flex flex-col justify-between items-center min-h-screen gap-4 bg-gradient-to-br from-blue-300/40 to-red-300/40 ">
      <div class="flex flex-row gap-4">
        <p class="text-bold text-2xl text-black/80 ">Awawa Coins</p>
        <p class="text-xl">{{ count === 0 ? '0' : count }}</p>
        <img :src="AwawaCoin" class="w-10 h-10">
      </div>

      <div class="flex flex-col gap-3 items-center ">
        <p class="text-bold text-xl text-black/80 mb-4">Hyrax name:</p>
        <p class="text-bold text-2xl text-black/80 mb-4">{{ name }}</p>

        <div class="flex flex-row gap-2">
           <img v-if="!isHyraxBought" :src="Hyrax" @click="count+=2" class="w-100 active:scale-105 transition-all duration-300">
           <img v-else :src="Hyraxes" class="w-100 active:scale-105 transition-all duration-300">
           <img v-if="isLeafsBought" :src="Leafs" class="w-30 h-30 active:scale-105 transition-all duration-300">
        </div>
       
         <input v-model="name" placeholder="Введите имя" class="bg-gradient-to-br from-blue-300/40 to-red-300/40 rounded-2xl p-3">
          <p @click="buyLeafs" class="px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Купить даману листиков (30 Awawa Coins)</p>
          <p @click="buyHyrax" class="px-6 py-3 bg-gradient-to-br from-blue-500/60 to-yellow-300 text-black/70 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Купить еще даманов (100 Awawa Coins)</p>
      </div>
       <div></div>
    </div>
</template>

<script setup lang="ts">
import AwawaCoin from '../assets/images/awawaCoin.jpg'
import Leafs from '../assets/images/leafs.jpg'
import Hyrax from '../assets/images/hyrax.jpg'
import Hyraxes from '../assets/images/3hyrax.jpg'
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
