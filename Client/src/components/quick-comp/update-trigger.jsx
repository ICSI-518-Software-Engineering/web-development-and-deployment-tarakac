import { DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

export const UpdateTrigger = () => {
  return (
    <DialogTrigger asChild>
      <Button className="  border-0 border-none hover:bg-slate-100">
        Update
      </Button>
    </DialogTrigger>
  );
};
