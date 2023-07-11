import React from "react";
import imgDefault from "./ImageThumb.jpg";
import Image from "next/image";
import { ChangePasswordForm } from "@/components/forms";
import { ChangePasswordModal } from "@/components/modals/change-password-modal/ChangePasswordModal";

export const ProfileView: React.FC = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl rounded-xl border border-lightGrey p-8">
      <div className="flex justify-between">
        <span className="text-xl">Dados pessoais</span>

        <button
          className="flex flex-col justify-center items-center"
          onClick={() => {}}
        >
          <Image
            // src="../../../components/icons/svgs/ImageThumb.svg"
            src={imgDefault}
            alt="Imagem default"
            width="93"
            height="93"
            className="mb-2"
          />
          <span className="text-xs text-purple">Mudar foto</span>
        </button>
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
          />
        </div>

        <div className="flex flex-col mt-10">
          <span className="text-xl block mb-6">Pedir nova password</span>
          {/* <button
          type="button"
          className="text-purple rounded-3xl border border-purple w-36 text-sm h-11 hover:text-white hover:bg-black hover:border-black"
        >
          Nova password
        </button> */}
        </div>
      </div>

      <ChangePasswordModal />
    </div>
  );
};
