import { Header } from "@/components";
import React from "react";
import { ProfileContent } from "./(ProfileContent)/ProfileContent";

export default function PerfilPage() {
  return (
    <main className="min-h-full">
      <Header pageLinks="default" />
      <ProfileContent />
    </main>
  );
}
