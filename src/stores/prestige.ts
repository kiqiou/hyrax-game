import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { STORAGE_KEYS } from "../utils/localStorage";
import { useWalletStore } from "./wallet";
import boxImg from "@/assets/images/box.png";
import cheapFlatImg from "@/assets/images/cheapFlat.png";
import normalFlatImg from "@/assets/images/normalFlat.png";
import gamerFlatImg from "@/assets/images/gamerFlat.png";
import expensiveFlatImg from "@/assets/images/expensiveFlat.png";
import cosmicFlatImg from "@/assets/images/cosmicFlat.png";

interface PrestigeBackground {
  id: number;
  price: number;
  imageUrl: string;
}

export const usePrestigeStore = defineStore("prestige", () => {
  const prestige = ref(
    Number(localStorage.getItem(STORAGE_KEYS.PRESTIGE)) || 0,
  );

  const prestigeBackgrounds = ref<PrestigeBackground[]>([
    {
      id: 0,
      price: 500,
      imageUrl: boxImg,
    },
    {
      id: 1,
      price: 1000,
      imageUrl: cheapFlatImg,
    },
    {
      id: 2,
      price: 1500,
      imageUrl: normalFlatImg,
    },
    {
      id: 3,
      price: 2000,
      imageUrl: gamerFlatImg,
    },
    {
      id: 4,
      price: 2500,
      imageUrl: expensiveFlatImg,
    },
    {
      id: 5,
      price: 3000,
      imageUrl: cosmicFlatImg,
    },
  ]);

  const currentPrestige = computed(() =>
    prestigeBackgrounds.value.find((item) => item.id === prestige.value),
  );

  const nextPrestige = computed(() =>
    prestigeBackgrounds.value.find((item) => item.id === prestige.value + 1),
  );

  const buyPrestige = () => {
    const walletStore = useWalletStore();

    if (!nextPrestige.value) {
      alert("Максимальный престиж!");
      return false;
    }

    const success = walletStore.spend(nextPrestige.value.price);

    if (!success) {
      alert("Недостаточно денег");
      return false;
    }

    prestige.value++;

    alert(`Вы открыли новую комнату!`);

    return true;
  };

  watch(prestige, (value) => {
    localStorage.setItem(STORAGE_KEYS.PRESTIGE, value.toString());
  });

  return {
    currentPrestige,
    nextPrestige,
    buyPrestige,
  };
});
