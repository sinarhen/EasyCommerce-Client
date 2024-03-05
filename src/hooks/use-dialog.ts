import {create} from "zustand";

export interface DialogProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  setOpen: (open: boolean) => set({isOpen: open}),
}));