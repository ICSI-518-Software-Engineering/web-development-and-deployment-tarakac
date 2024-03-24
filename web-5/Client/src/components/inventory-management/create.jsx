import { useInventoryItems } from "@/store-hooks/useInventoryItems";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import useSaveItem from "@/hooks/save-item-hook";
import useFileUploader from "@/hooks/useUploadFile";
import { CreatePopHeader } from "../quick-comp/create-pop-cntnt";
import { CreatePopContent } from "../quick-comp/create-pop-content";
import { CreatePopFooter } from "../quick-comp/create-pop-footer";

export const CreateItemBtn = ({ children }) => {
  const [items, setItems] = useState(null);
  const { fetchData } = useInventoryItems();

  const { fileData, signedImgUrl, fileUploader } = useFileUploader();

  const inputChangeHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const { loading, saveItem } = useSaveItem(
    fetchData,
    signedImgUrl,
    fileData,
    items
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <CreatePopHeader />
        <CreatePopContent
          fileUploader={fileUploader}
          inputChangeHandler={inputChangeHandler}
        />
        <CreatePopFooter saveItem={saveItem} loading={loading} />
      </DialogContent>
    </Dialog>
  );
};
