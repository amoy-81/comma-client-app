export type Lang = "en" | "fa";
export type Theme = "dark" | "light";

export type LanguageState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
