import React from "react";
import imgDefault from "./ImageThumb.jpg";
import Image from "next/image";
import { ChangePasswordModal } from "@/components/modals/change-password-modal/ChangePasswordModal";
import { SkeletonProfileView } from "@/components/skeletons";
import { useProfileViewHelper } from "./ProfileView.helper";

export function ProfileView() {
  const { loadingProfile, userData } = useProfileViewHelper();

  const ProfileComponent = (
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
            value={userData?.name}
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
            value={userData?.email}
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
            value={userData?.phone}
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

  const ComponentMap = loadingProfile ? (
    <SkeletonProfileView />
  ) : (
    ProfileComponent
  );

  return ComponentMap;
}
