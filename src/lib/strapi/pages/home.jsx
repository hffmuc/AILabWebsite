/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getNewsCarousel = async () => {
  const query = `
  query {
    newsCarousel {
          news {
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

  return res.data.newsCarousel.news;
};
