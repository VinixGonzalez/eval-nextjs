import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-lightPurple flex items-center justify-center">
      {children}
    </div>
  );
}
