/* eslint-disable import/prefer-default-export */
import { graphql } from '..';
import { STRAPI_ENDPOINT, STRAPI_ENDPOINT_GRAPHQL } from '../../../constants/apis';

export const getBlogArticles = async () => {
  const query = `
  query {
    blogArticles {
      data {
        attributes {
          title
          slug
          authors {
            data {
              attributes {
                name
              }
            }
          }
          date
          content
          shortDescription
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

  return res.data.blogArticles.data;
};

export const getBlogArticle = async (slug) => {
  const query = `
  query GetBlogArticle {
    blogArticles(filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          title
          slug
          authors {
            data {
              attributes {
                name
              }
            }
          }
          date
          content
          shortDescription
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

  return res.data.blogArticles.data[0].attributes;
};