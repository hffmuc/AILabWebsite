/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getBlogArticles = async () => {
  const query = `
  query{
      blogArticles(sort: "date:desc") {
      title
      slug
          authors {
            
                name
      
          }
          date
          content
          shortDescription
          image {
                url
 
          }
    }
}
  
    `;

  const res = await graphql(query);

  return res.data.blogArticles;
};

export const getBlogArticle = async (slug) => {
  const query = `
  query GetBlogArticle {
    blogArticles(filters: { slug: { eq: "${slug}" } }) {
      title
      slug
      authors {
      name
      }
      date
      content
      shortDescription
      image {
      url
      }
    }
  }    
    `;

  const res = await graphql(query);

  return res.data.blogArticles[0];
};
