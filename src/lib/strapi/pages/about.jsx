import { graphql } from '..';
import { STRAPI_ENDPOINT, STRAPI_ENDPOINT_GRAPHQL } from '../../../constants/apis';
// import { getStrapiImage } from '../../../helpers/getStrapiImage';

export const getAboutContent = async () => {
  const query = `
    query {
        ueberUns {
        data {
            attributes {
            content
            }
        }
        }
    }
    `;

  const res = await graphql(query);

  return res.data.ueberUns.data.attributes.content;
};

export const getTeamContent = async () => {
  const query = `
  query {
    ueberUns {
    data {
        attributes {
        our_team
        }
    }
    }
}
    `;

  const res = await graphql(query);

  return res.data.ueberUns.data.attributes.our_team;
};

export const getAboutPhoto = async () => {
  const query = `
  query {
    ueberUns {
    data {
        attributes {
        image {
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

  return res.data.ueberUns.data.attributes.image.data.attributes.url;
};
