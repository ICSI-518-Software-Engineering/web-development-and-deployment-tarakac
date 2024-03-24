import React from 'react'
import { AlertDialogTrigger } from '../ui/alert-dialog'

export const PopUpTrigger = (
    {children}
) => {
  return (
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
  )
}
