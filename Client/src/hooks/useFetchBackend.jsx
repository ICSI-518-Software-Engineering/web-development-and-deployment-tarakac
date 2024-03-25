import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useFetchItemsData = () => {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItemsData = async () => {
    try {
      setLoading(true);
      toast.loading("Fetching items...");

      const response = await axios.get("http://ec2-3-19-58-71.us-east-2.compute.amazonaws.com:5000/get-items");

      console.log(response.data);
      setItemsData(response.data.items);
      setLoading(false);
      toast.dismiss();
    } catch (error) {
      toast.dismiss();
      console.log(error);
      setLoading(false);
    }
  };

  return {
    itemsData,
    loading,
    fetchItemsData
  };
};

export default useFetchItemsData;
