import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useDeleteItem = (fetchItemsData) => {
  const [loading, setLoading] = useState(false);

  const deleteItem = async (id) => {
    console.log("This is received by function: ", id);
    try {
      setLoading(true);
      toast.loading("Deleting item...");

      const response = await axios.delete("http://localhost:5000/delete-item", {
        data: { id },
      });

      toast.dismiss();
      console.log(response.data);
      toast.success("Item deleted successfully");
      fetchItemsData();
      setLoading(false);
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("Failed to delete item");
      setLoading(false);
    }
  };

  return {
    loading,
    deleteItem
  };
};

export default useDeleteItem;
