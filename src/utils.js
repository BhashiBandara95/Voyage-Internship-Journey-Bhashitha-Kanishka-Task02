export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href; // use middleware , dynamically import images into our different components
};
