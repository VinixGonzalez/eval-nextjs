import { ChangePasswordForm } from "@/components/forms";
import { Password } from "@/components/icons/ready-to-use";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ChangePasswordModal: React.FC = () => {
  const Overlay = () => (
    <ModalOverlay
      bg="#F1E8FB95"
      backdropFilter="auto"
      backdropBlur="2px"
      //   backdropInvert="80%"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<Overlay />);

  return (
    <>
      <Button
        loadingText="Aguarde"
        spinnerPlacement="end"
        className="text-purple rounded-3xl border border-purple w-40 font-semibold text-sm h-11 hover:text-white hover:bg-black hover:border-black"
        rightIcon={<Password height="12" width="12" />}
        type="button"
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        Nova password
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Alterar password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="text-xs">
              Se está nesta página é porque pediu para recuperar a sua password
              de acesso ao software EVAL.
            </p>
            <p className="text-xs">
              Por favor coloque a sua password atual, crie uma nova password e
              confirme o seu pedido.
            </p>
            <ChangePasswordForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
