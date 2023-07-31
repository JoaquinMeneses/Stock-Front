import { create } from "zustand";

type Store = {
  theme: string;
  setTheme: () => void;
};

const useStore = create<Store>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useStore;
