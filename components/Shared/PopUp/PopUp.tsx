import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from '@radix-ui/react-dialog'

interface PopUpProps {
    open: boolean,
    onOpenChange: (open: boolean) => void,
    title?: string,
    description?: string,
    children: React.ReactNode
}

export function PopUp({open, onOpenChange,title,description,children}:PopUpProps) {
  return (
    <div>
        <Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent>
    <DialogHeader>
        <DialogClose asChild>Cerrar</DialogClose>
      <DialogTitle>{title}</DialogTitle>
      {
        description && (
         <DialogDescription>{description}</DialogDescription>   
        )
      }      
    </DialogHeader>
    <div>{children}</div>
  </DialogContent>
</Dialog>
    </div>
  )
}
