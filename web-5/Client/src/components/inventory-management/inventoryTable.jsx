import { Plus } from "lucide-react";
import { useEffect } from "react";
import { CreateItemBtn } from "./create";
import { Button } from "../ui/button";
import { ItemCard } from "./item-card";
import { NoItems } from "../quick-comp/NoItems";
import { LoadingItem } from "../quick-comp/Loading";
import useDeleteItem from "@/hooks/useDeleteItems";
import useFetchItemsData from "@/hooks/useFetchBackend";

export const InventoryTable = () => {
  const { itemsData, loading, fetchItemsData } = useFetchItemsData();
  const { deleteItem } = useDeleteItem(fetchItemsData);
  useEffect(() => {
    fetchItemsData();
  }, []);
  if (loading) return <LoadingItem />;
  return (
    <div className=" min-h-full w-full flex justify-center">
      {itemsData?.length == 0 ? (
        //   <NoItems />
        <NoItems />
      ) : (
        <div>
          <div className=" flex w-full justify-end pb-3">
            <CreateItemBtn>
              <Button size="sm" className="bg-white text-black">
                Add Item <Plus className=" h-5 w-5 ml-1" />
              </Button>
            </CreateItemBtn>
          </div>
          <div className=" p-2  flex flex-col gap-3 justify-center">
            {itemsData?.map((item) => (
              <ItemCard
                key={item._id}
                img={item.image}
                title={item.name}
                id={item._id}
                price={item.price}
                description={item.description}
                quantity={item.quantity}
                onClick={deleteItem}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
