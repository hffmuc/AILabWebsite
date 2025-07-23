import { graphql } from '..';

export const getContactContent = async () => {
  const query = `
query ($locale: I18NLocaleCode){
      contactPage (locale: $locale) {
        content
      }
}

    `;

  const res = await graphql(query);

  return res.data.contactPage.content;
};
