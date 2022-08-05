/** check if url points to an image */
export const isImageUrl = (url: string): boolean => {
  if (url && url.length > 0) {
    return /\.(gif|jpe?g|tiff?|png|webp|bmp|jpg)$/i.test(url);
  } else {
    return false;
  }
};
