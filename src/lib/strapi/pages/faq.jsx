import { graphql } from '..';

export const getFAQs = async () => {
  const query = `
query ($locale: I18NLocaleCode) {
  faqs(sort: "publishedAt:desc", locale: $locale) {
        Question
        Answer
  }
}

  
    `;

  const res = await graphql(query);

  return res.data.faqs;
};
