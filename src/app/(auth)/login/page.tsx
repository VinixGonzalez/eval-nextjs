import { LoginForm } from "@/components/forms";
import { LogoEval } from "@/components/icons/ready-to-use";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl sm:w-card-login sm:py-14 sm:px-20 ">
      <LogoEval className="mb-14 self-center" />
      <LoginForm />
    </div>
  );
}
