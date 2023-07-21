import Frame from "../../../components/frame/Frame";

import {
  FotografiaProps,
  MOCK_DATA_DETALHE_IMOVEL,
} from "../../meus-imoveis/[id]/page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: FotografiaProps = MOCK_DATA_DETALHE_IMOVEL.fotografias.find(
    (p: any) => p.id === id
  )!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
