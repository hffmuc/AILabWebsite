import { graphql } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getBlogArticles = async () => {
  const query = `
  {blogArticleCollection {items {title slug image{url} authorsCollection{items{firstNameLastName}} date content {json} shortDescription}}
}
        `;

  const res = await graphql(query);

  return res.data.blogArticleCollection.items;
};

export const getBlogArticle = async (slug) => {
  const query = `
  {blogArticleCollection(where: {slug: "${slug}"}) {items {title slug image{url} authorsCollection{items{firstNameLastName}} date content {json} shortDescription}}
}
        `;

  const res = await graphql(query);

  return res.data.blogArticleCollection.items[0];
};
