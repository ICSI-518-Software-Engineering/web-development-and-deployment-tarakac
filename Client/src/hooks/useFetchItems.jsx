import { useState } from 'react';
import axios from 'axios';

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId=5");
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
