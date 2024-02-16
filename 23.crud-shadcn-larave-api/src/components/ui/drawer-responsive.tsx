import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { PlusIcon } from "lucide-react"

interface Props {
  title: string
  description: string
  buttonLabel: string | JSX.Element
  children: React.ReactNode
}

export function DrawerResponsive({title, description, buttonLabel, children}:Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button><PlusIcon size={20} className='mr-1.5' />{buttonLabel}</Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-[700px]">
        <DrawerHeader className="text-left p-6">
          <div className="flex justify-between items-end">
            <DrawerTitle className="text-2xl">{title}</DrawerTitle>
            <DrawerClose asChild>
              <Button className="w-fit" variant="outline">Cancelar</Button>
            </DrawerClose>
          </div>
          <DrawerDescription>
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto pb-5" style={{maxHeight: '77vh'}}>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
