import {create} from "zustand";

export interface DialogProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}));