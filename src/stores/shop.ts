import { defineStore } from "pinia";
import { computed, ref } from "vue";
import leafsImg from "@/assets/images/leafs.jpg";
import hyraxImg from "@/assets/images/shop-hyrax.jpg";
import bowImg from "@/assets/images/bow.jpg";
import { useWalletStore } from "./wallet";

export interface ShopItem {
  id: "leafs" | "hyrax" | "bow";
  label: string;
  price: number;
  url: string;
  bought: boolean;

  x: number;
  y: number;
}

export const useShopStore = defineStore("shop", () => {
  const items = ref<ShopItem[]>([
    {
      id: "leafs",
      label: "Листики",
      price: 30,
      url: leafsImg,
      bought: false,

      x: 100,
      y: 300,
    },
    {
      id: "hyrax",
      label: "Еще даманы",
      price: 100,
      url: hyraxImg,
      bought: false,

      x: 300,
      y: 300,
    },
    {
      id: "bow",
      label: "Бантик",
      price: 150,
      url: bowImg,
      bought: false,

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
