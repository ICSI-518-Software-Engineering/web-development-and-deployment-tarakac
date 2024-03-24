import { ItemCard } from "../inventory-management/item-card";

export const OtherItems = ({ items }) => {
  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-3 mx-3 mt-3">
      {items?.map((item, index) => (
        <div key={item._id}>
          {index !== items?.length - 1 && (
            <ItemCard
              isOtherStationary={true}
              description={item?.description}
              title={item?.title}
              img={item?.images[0]}
              price={item?.price}
              rating={item?.rating?.rate || "3.5"}
              quantity={"3.8/5"}
            />
          )}
        </div>
      ))}{" "}
    </div>
  );
};
