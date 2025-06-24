/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getFAQs = async () => {
  const query = `
query {
  faqs(sort: "publishedAt:desc") {
    data {
      attributes {
        Question
        Answer
      }
    }
  }
}

  
    `;

  const res = await graphql(query);

  return res.data.faqs.data;
};
