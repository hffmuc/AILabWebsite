import { graphql } from '..';

export const getBlogArticles = async () => {
  const query = `
  query ($locale: I18NLocaleCode){
      blogArticles(sort: "date:desc", locale: $locale) {
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
  query GetBlogArticle ($locale: I18NLocaleCode) {
    blogArticles(filters: { slug: { eq: "${slug}" } }, locale: $locale) {
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
