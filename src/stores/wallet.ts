import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { STORAGE_KEYS } from "../utils/localStorage";

export const useWalletStore = defineStore("wallet", () => {
  const wallet = ref(Number(localStorage.getItem(STORAGE_KEYS.WALLET)) || 0);
  const coinsPerClick = 1;
  const coinsClickMultiplier = ref(
    Number(localStorage.getItem(STORAGE_KEYS.MULTIPLIER)) || 1,
  );

  const addCoins = () => {
    wallet.value += coinsPerClick * coinsClickMultiplier.value;
  };

  const buyMultiplier = () => {
    if (wallet.value >= 50) {
      coinsClickMultiplier.value += 1;
      wallet.value -= 50;
      return alert(
        "Множитель куплен! Теперь вы зарабатываете " +
          coinsPerClick * coinsClickMultiplier.value +
          " Awawa Coins за клик!",
      );
    } else return alert("Недостаточно Awawa Coins для покупки множителя");
  };

  const spend = (amount: number) => {
    if (wallet.value < amount) return false;
    wallet.value -= amount;
    return true;
  };

  watch(wallet, (value) => {
    localStorage.setItem(STORAGE_KEYS.WALLET, value.toString());
  });

  watch(coinsClickMultiplier, (value) => {
    localStorage.setItem(STORAGE_KEYS.MULTIPLIER, value.toString());
  });

  return {
    wallet,
    buyMultiplier,
    addCoins,
    spend,
  };
});
