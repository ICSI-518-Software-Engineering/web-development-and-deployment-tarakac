import axios from "axios";

export const updateFunc = async(
    id,
    items
) =>{
    try {
        const dataToUpdate = {
            id,
            name: items.name,
            quantity: items.quantity,
            description: items.description,
            price: items.price,
          };
          await axios.post("http://localhost:5000/update-item", dataToUpdate);
    } catch (error) {
        console.log(error);
        throw error;
    }
}