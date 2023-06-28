import React from "react";
import { ProfileData } from "../page";
import { ChangePasswordModal } from "@/components/modals";
import ChangeImage from "./ChangeImage";

export default function ProfileView({
  profileData,
}: {
  profileData: ProfileData;
}) {
  return (
    <div className="flex flex-col justify-between max-w-xl rounded-xl border border-lightGrey p-8">
      <div className="flex justify-between">
        <span className="text-xl">Dados pessoais</span>
        <ChangeImage />
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-xs font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            className="border border-black p-4 h-11 rounded-md font-semibold"
            type="text"
            id="nome"
            placeholder="nome"
            value={profileData?.name}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-xs font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="border border-black p-4 h-11 rounded-md font-semibold"
            type="text"
            id="email"
            placeholder="email"
            value={profileData?.email}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-xs font-bold" htmlFor="telefone">
            Telefone
          </label>
          <input
            className="border border-black p-4 h-11 rounded-md font-semibold"
            type="text"
            id="telefone"
            placeholder="telefone"
            value={profileData?.phone}
            readOnly
          />
        </div>

        <div className="flex flex-col mt-10">
          <span className="text-xl block mb-6">Pedir nova password</span>
        </div>
      </div>

      <ChangePasswordModal />
    </div>
  );
}
