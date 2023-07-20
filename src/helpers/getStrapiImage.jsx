/* eslint-disable import/prefer-default-export */
import { STRAPI_ENDPOINT } from '../constants/apis';

export const getStrapiImage = (imageUrl) => {
  if (imageUrl == null) {
    return null;
  }
  if (imageUrl.startsWith('/')) {
    return `${STRAPI_ENDPOINT}${imageUrl}`;
  }
  return imageUrl;
};
