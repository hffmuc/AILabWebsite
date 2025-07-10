import { graphql } from '..';
// import { getStrapiImage } from '../../../helpers/getStrapiImage';

export const getAboutContent = async () => {
  const query = `
    query {
        ueberUns {
            content
        }
    }
    `;

  const res = await graphql(query);

  return res.data.ueberUns.content;
};

export const getTeamContent = async () => {
  const query = `
  query {
    ueberUns {
        our_team
    }
}
    `;

  const res = await graphql(query);

  return res.data.ueberUns.our_team;
};

export const getAboutPhoto = async () => {
  const query = `
  query {
    ueberUns {
      image {
            url
      }
    }
}
      `;

  const res = await graphql(query);

  return res.data.ueberUns.image.url;
};
