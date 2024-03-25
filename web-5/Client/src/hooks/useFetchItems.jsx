import { useState } from 'react';
import axios from 'axios';

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await axios.get("https://api.ec2-3-19-58-71.us-east-2.compute.amazonaws.com.co/api/v1/products/?categoryId=5");
      setItems(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Handle errors if needed
      console.error('Error fetching items:', error);
    }
  };

  return {
    items,
    loading,
    fetchItems
  };
};

export default useFetchItems;
