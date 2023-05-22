"use client";
import React from "react";
import { redirect } from "next/navigation";

export function Redirect() {
  const handleRedirectToHome = () => {
    redirect("/home");
  };

  return (
    <>
      <button onClick={handleRedirectToHome}>Voltar</button>
    </>
  );
}
