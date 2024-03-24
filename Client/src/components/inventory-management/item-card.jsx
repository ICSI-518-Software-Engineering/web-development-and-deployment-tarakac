import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDialogPop } from "./alert-dialog";
import { UpdateItemBtn } from "./update";

export const ItemCard = ({
  img,
  title,
  id,
  price,
  onClick,
  quantity,
  description,
  isOtherStationary=false,
}) => {
  return (
    <div>
        
      <div className="flex max-w-2xl flex-col items-center rounded-md  md:flex-row bg-slate-300/80 text-black">
        <div className="h-full w-full p-3  md:w-[300px]">
          <img
            src={img}
            alt="Laptop"
            className=" rounded-md object-cover  md:h-[150px] md:w-[200px]"
          />
          <h1 className=" mt-2 inline-flex items-center text-lg font-semibold">
            {title?.length > 18 ? title?.slice(0, 18) + "..." : title}
          </h1>
        </div>
        <div className=" flex w-full justify-start">
          <div className="px-4 pb-4 pt-4">
            <h3 className=" font-bold mb-1">Item Description</h3>
            <p className=" text-gray-700 text-sm mb-3">
              {description?.length > 100
                ? description?.slice(0, 100) + "..."
                : description}
            </p>
            <p className=" text-gray-700 text-sm">
              <span className=" font-bold text-slate-700">{isOtherStationary?'Ratings':'Quantity'}:</span>{" "}
              <span className=" text-black">{quantity}</span>
            </p>
            <p className=" text-sm text-gray-700 mt-2">
              <span className=" font-bold text-slate-700">Price:</span>{" "}
              <span className=" text-black">${price}</span>
            </p>
           { !isOtherStationary ? <div className="mt-4 space-x-4">
              <UpdateItemBtn
                id={id}
                name={title}
                description={description}
                price={price}
                quantity={quantity}
              />
              <AlertDialogPop
                description="Are you sure you want to delete this item?"
                onDelete={onClick}
                id={id}
                buttonColor="bg-gray-900"
              >
                <Button variant="destructive">
                  Delete <Trash2 className=" h-5 w-5 ml-2" />
                </Button>
              </AlertDialogPop>
            </div>:<div className="mt-4 h-3"/>}
          </div>
        </div>
      </div>
    </div>
  );
};
