"use client";

import { Password } from "@/app/components/icons/ready-to-use";
import {
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { MOCK_DATA_DETALHE_IMOVEL } from "../page";
import Image from "next/image";

export function TodasImagensAlbum() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const photos = MOCK_DATA_DETALHE_IMOVEL.fotografias;

  return (
    <>
      <Button
        loadingText="Aguarde"
        spinnerPlacement="end"
        className="absolute hover:bg-black hover:text-white text-xs text-purple rounded-3xl p-3 bg-white bottom-12 left-5 flex items-center gap-2"
        rightIcon={<Password height="12" width="12" />}
        type="button"
        onClick={() => {
          onOpen();
        }}
      >
        Todas
      </Button>

      <>
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          scrollBehavior="inside"
          orientation="horizontal"
          preserveScrollBarGap={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="flex items-center justify-center">
              <span>Albúm de Fotos</span>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <div className="min-h-screen flex flex-col gap-8">
                {photos.map((photo) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={photo.id}
                  >
                    <Image
                      alt={photo.name}
                      src={photo.url_path}
                      height={600}
                      width={600}
                      style={{ borderRadius: 12 }}
                    />
                    <span>{photo.name}</span>
                  </div>
                ))}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
