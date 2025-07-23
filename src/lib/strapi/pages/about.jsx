import { graphql } from '..';

export const getAboutContent = async () => {
  const query = `
    query ($locale: I18NLocaleCode){
        ueberUns (locale: $locale) {
            content
        }
    }
    `;

  const res = await graphql(query);

  return res.data.ueberUns.content;
};

export const getTeamContent = async () => {
  const query = `
  query ($locale: I18NLocaleCode) {
    ueberUns (locale: $locale) {
        our_team
    }
}
    `;

  const res = await graphql(query);

  return res.data.ueberUns.our_team;
};

export const getAboutPhoto = async () => {
  const query = `
  query ($locale: I18NLocaleCode) {
    ueberUns (locale: $locale) {
      image {
            url
      }
    }
}
      `;

  const res = await graphql(query);

  return res.data.ueberUns.image.url;
};
