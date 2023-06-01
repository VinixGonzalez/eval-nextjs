import React from "react";
import imgDefault from "./ImageThumb.jpg";
import Image from "next/image";
import { ChangePasswordForm } from "@/components/forms";

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

      <ChangePasswordForm />
    </div>
  );
};
