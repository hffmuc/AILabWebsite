import { graphql } from '..';

export const getFestivalList = async () => {
  const query = `
query ($locale: I18NLocaleCode) {
  festivals(locale: $locale) {
      name
      month
      shortDescription
      location
      link
  }
} 
      `;

  const res = await graphql(query);

  return res.data.festivals;
};

export const getFestivalsContent = async () => {
  const query = `
    query ($locale: I18NLocaleCode) {
        festivalsPage(locale: $locale) {
            introduction
        }
    }
    `;

  const res = await graphql(query);

  return res.data.festivalsPage.introduction;
};
