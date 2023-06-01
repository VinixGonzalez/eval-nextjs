import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./authOptions";
import { redirect } from "next/navigation";

interface RouteHandlerProps {
  children: React.ReactNode;
}

export async function RouteHandler({ children }: RouteHandlerProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  } else {
    return <>{children}</>;
  }
}
