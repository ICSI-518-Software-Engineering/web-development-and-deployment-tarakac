import { PopupFooter } from "../quick-comp/dialog-footer";
import { PopupHeader } from "../quick-comp/dialog-header";
import { PopUpTrigger } from "../quick-comp/pop-up-trigger";
import {
  AlertDialog,
  AlertDialogContent,
} from "../ui/alert-dialog";

export const AlertDialogPop = ({
  children,
  productDescription,
  onDelete,
  id,
  buttonStyle,
}) => {
  console.log("del",onDelete,"id", id, buttonStyle)
  return (
    <AlertDialog>
      <PopUpTrigger>{children}</PopUpTrigger>
      <AlertDialogContent>
        <PopupHeader productDescription={productDescription} />
        <PopupFooter
          onDelete={onDelete}
          id={id}
          buttonStyle={'bg-black hover:bg-slate-700'}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};
