import PhotosModal from "@/app/components/modals/photos-modal/PhotosModal";
import Frame from "../../../components/frame/Frame";
import { MOCK_DATA_DETALHE_IMOVEL } from "../../../(private)/meus-imoveis/[id]/page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = MOCK_DATA_DETALHE_IMOVEL.fotografias;
  const photo: any = photos.find((p) => p.id === photoId)!;

  return (
    <PhotosModal>
      <Frame photo={photo} />
    </PhotosModal>
  );
}
