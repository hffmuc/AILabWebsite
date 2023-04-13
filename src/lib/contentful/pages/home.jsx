import { graphql } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getCoverImage = async () => {
  const query = `
        {homePage (id: "geKbdPRMKpfIYqUFDEeDf") {coverImage {url}}}
    `;

  const res = await graphql(query);

  return res.data.homePage.coverImage.url;
};

export const getNews = async () => {
  const query = `
        
{newsCarousel(id:"4zK3uw4Z46REPBj1j1kaT0"){newsCollection{items{image{url} heading shortDescription link}}}}

    `;

  const res = await graphql(query);

  return res.data.newsCarousel.newsCollection.items;
};
