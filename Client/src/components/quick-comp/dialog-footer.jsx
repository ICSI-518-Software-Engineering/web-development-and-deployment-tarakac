import { AlertDialogAction, AlertDialogCancel, AlertDialogFooter } from '../ui/alert-dialog';

export const PopupFooter = (
    {onDelete, id, buttonStyle}
) => {
    console.log(buttonStyle)
  return (
    <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete(id);
            }}
            className={`${buttonStyle}`}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
  )
}
