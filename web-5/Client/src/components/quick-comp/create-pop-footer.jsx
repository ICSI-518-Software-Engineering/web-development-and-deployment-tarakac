import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export const CreatePopFooter = ({ saveItem, loading }) => {
  return (
    <DialogFooter>
      <Button onClick={saveItem} className="bg-[#344e41]" asChild>
        {loading ? (
          <span>
            <Loader2 className=" h-4 w-4 animate-spin" />
          </span>
        ) : (
          <span className=" cursor-pointer">Create Item</span>
        )}
      </Button>
    </DialogFooter>
  );
};
