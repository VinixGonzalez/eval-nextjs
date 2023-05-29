"use client";

import {
  Breadcrumb as ChakraBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Crumb {
  isLast: boolean;
  path: string;
  label: string;
}
interface BreadcrumbProps {
  crumbList: Array<Crumb>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbList }) => {
  return (
    <ChakraBreadCrumb className="text-xs" separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink className="no-underline" as={Link} href="/">
          <span className="text-purple">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {crumbList?.map((crumb) => (
        <BreadcrumbItem key={crumb.label}>
          {crumb.isLast ? (
            <span>{crumb.label}</span>
          ) : (
            <BreadcrumbLink
              className="no-underline"
              as={Link}
              href={crumb.path}
            >
              <span className="text-purple">{crumb.label}</span>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </ChakraBreadCrumb>
  );
};
