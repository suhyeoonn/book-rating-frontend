import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Button } from "../../../shared/ui/button";
import { ReactNode } from "react";
import { Fn } from "@/shared/types";

export default function BookEditModal({
  open,
  onOpenChange,
  onSave,
  children,
}: {
  open: boolean;
  onOpenChange: Fn;
  onSave: Fn;
  children: ReactNode;
}) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button type="submit" onClick={onSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
