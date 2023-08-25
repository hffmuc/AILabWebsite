/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import { STRAPI_ENDPOINT, STRAPI_ENDPOINT_GRAPHQL } from '../../../constants/apis';

export const getNewsCarousel = async () => {
  const query = `
  query {
    newsCarousel {
      data {
        attributes {
          news {
            data {
              attributes {
                title
                shortDescription
                image {
                  data {
                    attributes {
                      formats
                      url
                    }
                  }
                }
                link
              }
            }
          }
        }
      }
    }
  }
  
    `;

  const res = await graphql(query);

  return res.data.newsCarousel.data.attributes.news.data;
};