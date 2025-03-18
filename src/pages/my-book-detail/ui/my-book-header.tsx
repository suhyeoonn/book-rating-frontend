import { Breadcrumb } from "@/shared/ui/breadcrumb";
import React from "react";
import { RemoveButton } from "@/features/my-books/remove-book";
import { menus } from "@/widgets/layout-header";

interface Props {
  id: number;
  title: string;
}

export const MyBookHeader = ({ id, title }: Props) => {
  return (
    <div className="flex justify-between">
      <Breadcrumb links={[menus[1]]} pathName={title} />
      <RemoveButton id={id} />
    </div>
  );
};
