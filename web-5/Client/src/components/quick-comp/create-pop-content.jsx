import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

export const CreatePopContent = ({
    fileUploader,
    inputChangeHandler
}) => {
  return (
    <div className="grid gap-3 py-4">
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="picture" className="text-left w-full text-white">
              Image
            </Label>
            <Input
              id="picture"
              type="file"
              onChange={fileUploader}
              className="col-span-3 cursor-pointer bg-[#e9edc9]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="name" className="text-left w-full text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              onChange={inputChangeHandler}
              placeholder="New Item"
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
              onChange={inputChangeHandler}
              placeholder="New Item"
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
              onChange={inputChangeHandler}
              placeholder="10"
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
              onChange={inputChangeHandler}
              placeholder="10"
              className="col-span-3 bg-[#e9edc9]"
            />
          </div>
        </div>
  )
}
