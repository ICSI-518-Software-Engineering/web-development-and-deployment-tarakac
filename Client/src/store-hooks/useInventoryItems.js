import axios from "axios";
import { create } from "zustand";

export const useInventoryItems = create((set) => ({
  itemsData: null,
  setItemsData: (data) => set((state) => ({ itemsData: data })),
  fetchData: async () => {
    try {
      const response = await axios.get("http://ec2-3-19-58-71.us-east-2.compute.amazonaws.com:5000/get-items");
      set((state) => ({ itemsData: response?.data?.items }));
    } catch (error) {
      console.log(error);
    }
  },
}));
