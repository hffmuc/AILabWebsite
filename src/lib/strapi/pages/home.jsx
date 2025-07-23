import { graphql } from '..';
import i18n from 'i18next';

export const getNewsCarousel = async () => {
  const query = `
query Query {
  newsCarousel {
    news {
      documentId
      title
      shortDescription
      image {
        formats
        url
      }
      link
    }
  }
}
  
    `;

  const res = await graphql(query);

  const localizedNews = await Promise.all(
    res.data.newsCarousel.news.map(async (newsItem) => {
      const response = await graphql(
        `
          query GetNewsItem($documentId: ID!, $locale: I18NLocaleCode) {
            news(documentId: $documentId, locale: $locale) {
              title
              shortDescription
              image {
                formats
                url
              }
              link
            }
          }
        `,
        { documentId: newsItem.documentId }
      );
      return response.data.news;
    })
  );

  return localizedNews;
};
