import axios from "axios";
import { create } from "zustand";

export const useInventoryItems = create((set) => ({
  itemsData: null,
  setItemsData: (data) => set((state) => ({ itemsData: data })),
  fetchData: async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-items");
      set((state) => ({ itemsData: response?.data?.items }));
    } catch (error) {
      console.log(error);
    }
  },
}));
