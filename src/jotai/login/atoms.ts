import { atom, useAtom } from "jotai";

interface LoginErrorTypes {
  statusCode: number;
  description: string;
  message: string;
}

const initialValues: LoginErrorTypes = {
  description: "",
  message: "",
  statusCode: 0,
};

// Create your atoms and derivatives
const loginErrorsAtom = atom<LoginErrorTypes>(initialValues);
// const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

export const isNewPasswordScreenAtom = atom(false);
