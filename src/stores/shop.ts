import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import leafsImg from "@/assets/images/leafs.jpg";
import bowImg from "@/assets/images/bow.png";
import { useWalletStore } from "./wallet";
import { STORAGE_KEYS } from "../utils/localStorage";

export interface ShopItem {
  id: "leafs" | "hyrax" | "bow";
  label: string;
  price: number;
  url: string;
  imageClass?: string;
  bought: boolean;

  x: number;
  y: number;
}

const savedBoughtItems = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.BOUGHT_ITEMS) || "[]",
);

export const useShopStore = defineStore("shop", () => {
  const items = ref<ShopItem[]>([
    {
      id: "leafs",
      label: "Листики",
      price: 30,
      url: leafsImg,
      imageClass:
        "max-w-[130px] sm:max-w-[130px] rounded-3xl shadow-xl cursor-pointer active:scale-95 transition-all duration-300",
      bought: savedBoughtItems.includes("leafs"),

      x: 100,
      y: 300,
    },
    {
      id: "bow",
      label: "Бантик",
      price: 150,
      url: bowImg,
      imageClass: "absolute top-8 left-14 -translate-x-1/2 w-16",
      bought: savedBoughtItems.includes("bow"),

      x: 530,
      y: 300,
    },
  ]);

  const getItem = (id: ShopItem["id"]) =>
    items.value.find((item) => item.id === id);

  const isBought = (id: ShopItem["id"]) => Boolean(getItem(id)?.bought);

  const buyItem = (id: ShopItem["id"]) => {
    const walletStore = useWalletStore();
    const item = getItem(id);

    if (!item || item.bought) return false;

    const success = walletStore.spend(item.price);

    if (!success) {
      alert("Недостаточно денег");
      return false;
    }

    alert(`Вы купили ${item.label}!`);
    item.bought = true;
    return true;
  };

  const resetShop = () => {
    items.value.forEach((item) => {
      item.bought = false;
    });
  };

  const availableItems = computed(() =>
    items.value.filter((item) => !item.bought),
  );

  const purchasedItems = computed(() =>
    items.value.filter((item) => item.bought),
  );

  watch(
    items,
    (value) => {
      const boughtIds = value
        .filter((item) => item.bought)
        .map((item) => item.id);

      localStorage.setItem(
        STORAGE_KEYS.BOUGHT_ITEMS,
        JSON.stringify(boughtIds),
      );
    },
    { deep: true },
  );

  return {
    items,
    availableItems,
    purchasedItems,
    getItem,
    isBought,
    buyItem,
    resetShop,
  };
});
