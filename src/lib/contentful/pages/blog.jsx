import { graphql } from '..';

// eslint-disable-next-line import/prefer-default-export
export const getBlogArticles = async () => {
  const query = `
  {blogArticleCollection {items {title author date content {json} shortDescription}}
}
        `;

  const res = await graphql(query);

  return res.data.blogArticleCollection.items;
};
