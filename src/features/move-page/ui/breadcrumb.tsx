import React from "react";
import {
  Breadcrumb as BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import Link from "next/link";

interface Props {
  links: Link[];
  pathName: string;
}

interface Link {
  href: string;
  label: string;
}
export const Breadcrumb = ({ links, pathName }: Props) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={links[0].href}>{links[0].label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pathName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};
