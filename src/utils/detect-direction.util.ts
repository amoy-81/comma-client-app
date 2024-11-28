export const detectDirection = (text: string): "rtl" | "ltr" => {
  const rtlPattern = /^[\u0600-\u06FF]/;
  return rtlPattern.test(text.trim()) ? "rtl" : "ltr";
};
