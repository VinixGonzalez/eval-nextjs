import React from "react";
import { LogoEval } from "@/app/components/icons/ready-to-use";
import { LoginForm } from "@/app/components/forms";

export default async function LoginPage() {
  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl sm:w-card-login sm:py-14 sm:px-20">
      <LogoEval className="mb-14 self-center" />
      <LoginForm />
    </div>
  );
}
