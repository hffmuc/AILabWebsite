import { graphql } from '..';
import { STRAPI_ENDPOINT, STRAPI_ENDPOINT_GRAPHQL } from '../../../constants/apis';

export const getAboutContent = async () => {
  const query = `
    query {
        ueberUns {
        data {
            attributes {
            Content
            }
        }
        }
    }
    `;

  const res = await graphql(query);

  return res.data.ueberUns.data.attributes.Content;
};

export const getAboutPhoto = async () => {
  const query = `
  query {
    ueberUns {
    data {
        attributes {
        Bild {
            data {
            attributes {
                url
            }
            }
        }
        }
    }
    }
}
      `;

  const res = await graphql(query);

  return STRAPI_ENDPOINT + res.data.ueberUns.data.attributes.Bild.data.attributes.url;
};
