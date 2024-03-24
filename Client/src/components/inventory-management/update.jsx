import { useState } from "react";
import { Dialog} from "../ui/dialog";
import { PopUpdateContent } from "../quick-comp/pop-update-cntent";
import { UpdateTrigger } from "../quick-comp/update-trigger";

export const UpdateItemBtn = ({ name, quantity, id, price, description }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState({
    name: name || "title name will be here",
    quantity: quantity || 0,
    price: 0,
    description: description || "description will be here",
  });

  const onChange = (e) => {
    setItems({
      ...items,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Dialog>
      <UpdateTrigger/>
      <PopUpdateContent
        name={name}
        quantity={quantity}
        id={id}
        price={price}
        description={description}
        loading={loading}
        onChange={onChange}
        items={items}
      />
    </Dialog>
  );
};
