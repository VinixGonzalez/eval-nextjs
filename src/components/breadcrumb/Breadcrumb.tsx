"use client";

import {
  Breadcrumb as ChakraBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  crumbList: [
    {
      isLast: boolean;
      path: string;
      label: string;
    }
  ];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbList }) => {
  return (
    <ChakraBreadCrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {crumbList?.map((crumb) => (
        <BreadcrumbItem key={crumb.label}>
          {crumb.isLast ? (
            <span>{crumb.label}</span>
          ) : (
            <BreadcrumbLink as={Link} href={crumb.path}>
              {crumb.label}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </ChakraBreadCrumb>
  );
};
