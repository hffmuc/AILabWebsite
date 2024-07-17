/* eslint-disable import/prefer-default-export */
import { graphql } from '..';

export const getFestivalList = async () => {
  const query = `
{
  festivals {
    data {
      attributes {
        name
        month
        shortDescription
        location
        link
      }
    }
  }
} 
      `;

  const res = await graphql(query);

  return res.data.festivals.data;
};
