import { useEffect } from "react";
import useFetchItems from "@/hooks/useFetchItems";
import { LoadingItem } from "../quick-comp/Loading";
import { NoItems } from "../quick-comp/NoItems";
import { OtherItems } from "./other-items";

export const OtherStationaryItemsTable = () => {
  const { items, loading, fetchItems } = useFetchItems();

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <LoadingItem />;
  return (
    <div className=" min-h-full">
      {items?.length == 0 ? (
        <NoItems />
      ) : (
        <div className=" p-2 ">
          <OtherItems items={items} />
        </div>
      )}
    </div>
  );
};
