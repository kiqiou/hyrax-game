import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useWalletStore = defineStore("wallet", () => {
  const wallet = ref(0);
  const coinsPerClick = 100;
  const coinsClickMultiplier = ref(1);

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

  return {
    wallet,
    buyMultiplier,
    addCoins,
    spend,
  };
});
