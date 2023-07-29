"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLeftCircle } from "react-icons/ai";
import Image from "next/image";
import { Photo } from "@/app/@modal/(.)photos/[id]/page";

export default function Album({ photos }: { photos: Array<Photo> }) {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 bg-white min-h-screen w-full">
      <section id="navigation" className="flex p-6">
        <button onClick={() => router.back()} title="Voltar">
          <AiOutlineLeftCircle size={36} />
        </button>
      </section>

      <section
        id="images"
        className="w-full flex items-center justify-center flex-col"
      >
        {photos.map((photo, index) => {
          return (
            <div key={photo.id} className={`flex justify-center gap-8`}>
              <div className="border w-[741px]">
                <Image
                  alt=""
                  src={photo.url_path}
                  height={496}
                  width={741}
                  className="object-fill"
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
