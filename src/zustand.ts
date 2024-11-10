import { create } from "zustand";

interface ClickStore {
  isClicked: boolean;
  setClicked: (clicked: boolean) => void;
}

const useClickStore = create<ClickStore>((set) => ({
  isClicked: true,
  setClicked: (clicked) => set({ isClicked: clicked }),
}));

export default useClickStore;
