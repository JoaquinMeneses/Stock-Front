
import { create } from "zustand";

type Store = {
  theme: string;
  setTheme: () => void;
};

const useStore = create<Store>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    });
  },
}));

export default useStore;
