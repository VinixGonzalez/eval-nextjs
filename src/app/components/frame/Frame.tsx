import { FotografiaProps } from "@/app/(private)/meus-imoveis/[id]/page";
import Image from "next/image";

export default function Frame({ photo }: { photo: FotografiaProps }) {
  return (
    <>
      <Image
        alt=""
        src={photo.url_path}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
      </div>
    </>
  );
}
