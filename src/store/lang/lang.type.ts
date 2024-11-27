export type Lang = "en" | "fa";

export type LanguageState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};
