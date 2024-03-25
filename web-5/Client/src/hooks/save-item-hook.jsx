import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useSaveItem = (fetchData, signedImgUrl, fileData, items) => {
  const [loading, setLoading] = useState(false);

  const saveItem = async () => {
    if (!items.name || !items.quantity || !fileData) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      toast.loading("Creating item...");
      setLoading(true);

      if (!signedImgUrl) {
        toast.dismiss();
        toast.error("Failed to upload Image");
        return;
      }

      const uploadImage = await axios.put(signedImgUrl, fileData);

      const dataToUpload = {
        name: items.name,
        quantity: items.quantity,
        price: items.price,
        description: items.description,
        image: `https://s3.us-east-2.amazonaws.com/s3.deepthi.me/${fileData.name}`,
      };

      await axios.post("http://ec2-3-19-58-71.us-east-2.compute.amazonaws.com:5000/create-item", dataToUpload);

      setLoading(false);
      toast.dismiss();
      fetchData();
      toast.success("Item created✅");
    } catch (error) {
      toast.dismiss();
      setLoading(false);
      toast.error("Failed to create item");
    }
  };

  return {
    loading,
    saveItem
  };
};

export default useSaveItem;
