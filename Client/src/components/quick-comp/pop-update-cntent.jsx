import { useInventoryItems } from "@/store-hooks/useInventoryItems"
import { Button } from "../ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { updateFunc } from "@/lib/update-item"
import useUpdateItemData from "@/hooks/update-hook"

export const PopUpdateContent = ({ name, quantity, id, price, description, loading, onChange, items }) => {
  const { fetchData } = useInventoryItems();
  const { updateItemData } = useUpdateItemData(updateFunc, fetchData);
  return (
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Item</DialogTitle>
          <DialogDescription>Update the item details below</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="name" className="text-left w-full text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder={name}
              onChange={onChange}
              className="col-span-3 bg-[#e9edc9]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label
              htmlFor="description"
              className="text-left w-full text-white"
            >
              Description
            </Label>
            <Input
              id="description"
              name="description"
              placeholder={description}
              onChange={onChange}
              className="col-span-3 bg-[#e9edc9]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="quantity" className="text-left w-full text-white">
              Quantity
            </Label>
            <Input
              id="quantity"
              name="quantity"
              placeholder={quantity}
              onChange={onChange}
              className="col-span-3 bg-[#e9edc9]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="price" className="text-left w-full text-white">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              onChange={onChange}
              placeholder={price}
              className="col-span-3 bg-[#e9edc9]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={()=>updateItemData(id, items)}
            disabled={loading}
            className="bg-[#344e41] text-white"
          >
            Update Product
          </Button>
        </DialogFooter>
      </DialogContent>
  )
}
