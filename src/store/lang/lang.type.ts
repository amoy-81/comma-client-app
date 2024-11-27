import { User } from "../../api/user/user.type";

export type Lang = "en" | "fa";

export type LanguageState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};
