import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen min-w-full bg-white flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
