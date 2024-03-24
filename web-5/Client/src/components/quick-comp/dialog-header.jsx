import React from 'react'
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog'

export const PopupHeader = (
    {productDescription}
) => {
  return (
    <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Are you absolutely sure to continue?
          </AlertDialogTitle>
          <AlertDialogDescription>{productDescription}</AlertDialogDescription>
        </AlertDialogHeader>
  )
}
