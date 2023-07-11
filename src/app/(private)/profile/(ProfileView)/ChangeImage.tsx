"use client";

import React from "react";
import Image from "next/image";
import imgDefault from "./ImageThumb.jpg";

export default function ChangeImage() {
  return (
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
  );
}
