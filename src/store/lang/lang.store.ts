import { create } from "zustand";
import { Lang, LanguageState } from "./lang.type";

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("lang") || "en";

  return ["fa", "en"].includes(savedLanguage) ? savedLanguage : "en";
};

const useLanguageStore = create<LanguageState>((set) => ({
  lang: getInitialLanguage() as Lang,
  setLang: (lang: Lang) => {
    localStorage.setItem("lang", lang);
    set({
      lang,
    });
  },
}));

export default useLanguageStore;
