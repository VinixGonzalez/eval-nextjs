import PhotosModal from "@/app/components/modals/photos-modal/PhotosModal";
import Frame from "../../../components/frame/Frame";
import { MOCK_DATA_DETALHE_IMOVEL } from "../../../(private)/meus-imoveis/[id]/page";
import Album from "@/app/components/album/Album";

export interface Photo {
  id: string;
  name: string;
  url_path: string;
  isMain: boolean;
}

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = MOCK_DATA_DETALHE_IMOVEL.fotografias;
  const photo: any = photos.find((p) => p.id === photoId)!;

  return (
    <>
      <PhotosModal>
        {photos.map((photo) => (
          <Frame key={photo.id} photo={photo} />
        ))}
      </PhotosModal>
      <Album photos={photos} />
    </>
  );
}
