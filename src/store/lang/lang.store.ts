import { create } from "zustand";
import { Lang, LanguageState, Theme } from "./lang.type";

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("lang") || "en";

  return ["fa", "en"].includes(savedLanguage) ? savedLanguage : "en";
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";

  return ["light", "dark"].includes(savedTheme) ? savedTheme : "en";
};

const useLanguageStore = create<LanguageState>((set) => ({
  lang: getInitialLanguage() as Lang,
  theme: getInitialTheme() as Theme,
  setLang: (lang: Lang) => {
    localStorage.setItem("lang", lang);
    set({
      lang,
    });
  },
  setTheme: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    set({
      theme,
    });
  },
}));

export default useLanguageStore;
