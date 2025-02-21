export const getImageUrl = (url: string): string => {
  if (url.startsWith("http")) {
    return url;
  }
  return `${import.meta.env.VITE_IMAGE_BASE_URL}${url}`;
};
