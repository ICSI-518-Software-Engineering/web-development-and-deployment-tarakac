import { useState } from 'react';
import toast from 'react-hot-toast';

const useUpdateItemData = (updateFunc, fetchData) => {
  const [loading, setLoading] = useState(false);

  const updateItemData = async (id, items) => {
    console.log("here are items", items);
    setLoading(true);
    try {     
      await updateFunc(id, items);
      fetchData();
      toast.success("Item updated successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to update item");
    }
  };

  return {
    loading,
    updateItemData
  };
};

export default useUpdateItemData;