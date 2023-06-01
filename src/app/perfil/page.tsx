import React from "react";
import { Breadcrumb, Header } from "@/components";
import { ProfileContent } from "./(ProfileContent)/ProfileContent";

export default function PerfilPage() {
  return (
    <main className="min-h-full">
      <Header pageLinks="default" />
      <ProfileContent />
    </main>
  );
}
